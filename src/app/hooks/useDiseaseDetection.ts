'use client';

import { useState } from 'react';
import { diseaseDatabase } from '@/data/diseaseDatabase';

export interface DetectionResult {
    disease_name: string;
    confidence: number;
    description: string;
    symptoms: string[];
    treatment: string;
    prevention: string[];
    severity: "low" | "medium" | "high";
    pesticides: string[];
    organicTreatment: string[];
}

export function useDiseaseDetection() {
    const [result, setResult] = useState<DetectionResult | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const analyzeImage = async (base64Image: string) => {
        setIsLoading(true);
        setError(null);
        try {
            // Try to hit the API (works in web/development)
            const response = await fetch('/api/analyze', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ image: base64Image }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.details || data.error || 'Failed to analyze image');
            }

            setResult(data);
        } catch (err: any) {
            console.warn('Network/API error, falling back to offline/mock database:', err);

            // FALLBACK for APK / Offline Mode / API Limits
            // As requested: "leave it to the fake database's hand"
            await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate delay

            const mock = diseaseDatabase[Math.floor(Math.random() * diseaseDatabase.length)];
            const mockResult: DetectionResult = {
                disease_name: mock.name,
                confidence: 85 + Math.floor(Math.random() * 10),
                severity: mock.severity,
                description: mock.description,
                treatment: mock.treatment,
                prevention: mock.prevention,
                symptoms: mock.symptoms,
                pesticides: mock.pesticides,
                organicTreatment: mock.organicTreatment,
            };

            setResult(mockResult);
        } finally {
            setIsLoading(false);
        }
    };

    const clearResult = () => {
        setResult(null);
        setError(null);
    };

    return {
        result,
        isLoading,
        error,
        analyzeImage,
        clearResult,
    };
}
