'use client';

import React from 'react';
import { AlertTriangle, Shield, Stethoscope, Leaf } from 'lucide-react';
import { DetectionResult } from '../hooks/useDiseaseDetection';
import { useLanguage } from '../context/LanguageContext';

interface DiseaseResultProps {
    result: DetectionResult;
    onSpeak?: () => void;
}

export function DiseaseResult({ result }: DiseaseResultProps) {
    const { t } = useLanguage();

    const getSeverityColor = (severity: string) => {
        switch (severity?.toLowerCase()) {
            case 'low': return 'bg-green-600';
            case 'medium': return 'bg-amber-500';
            case 'high': return 'bg-red-600';
            default: return 'bg-gray-500';
        }
    };

    const getSeverityText = (severity: string) => {
        switch (severity?.toLowerCase()) {
            case 'low': return t.low;
            case 'medium': return t.medium;
            case 'high': return t.high;
            default: return severity;
        }
    };

    return (
        <div className="flex flex-col bg-white pb-10">
            <div className="flex items-center justify-between px-5 py-4 bg-red-50 border-b border-red-200">
                <div className="flex items-center gap-2">
                    <AlertTriangle className="text-red-600 w-6 h-6" />
                    <h2 className="text-lg font-bold text-red-600">{t.diseaseDetected}</h2>
                </div>
            </div>

            <div className="mx-5 mt-5 p-5 bg-red-50 rounded-2xl border border-red-200">
                <h3 className="text-2xl font-bold text-red-600 mb-3">{result.disease_name}</h3>
                <div className="flex items-center mb-2">
                    <span className="text-gray-600 mr-2">{t.confidence}:</span>
                    <span className="text-red-600 font-bold">{result.confidence}%</span>
                </div>
                <div className="flex items-center">
                    <span className="text-gray-600 mr-2">{t.severity}:</span>
                    <span className={`px-3 py-1 rounded-xl text-white font-semibold text-sm ${getSeverityColor(result.severity)}`}>
                        {getSeverityText(result.severity)}
                    </span>
                </div>
            </div>

            <p className="px-5 mt-5 text-gray-700 leading-relaxed text-lg">
                {result.description}
            </p>

            {/* Symptoms */}
            <div className="px-5 mt-6">
                <div className="flex items-center gap-2 mb-3">
                    <Stethoscope className="text-red-600 w-5 h-5" />
                    <h4 className="text-lg font-bold text-gray-800">{t.symptoms}</h4>
                </div>
                <div className="space-y-2">
                    {result.symptoms?.map((symptom, index) => (
                        <div key={index} className="flex items-start gap-2">
                            <span className="text-gray-500 mt-1.5">•</span>
                            <p className="text-gray-700">{symptom}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Treatment */}
            <div className="px-5 mt-6">
                <div className="flex items-center gap-2 mb-3">
                    <Leaf className="text-green-600 w-5 h-5" />
                    <h4 className="text-lg font-bold text-gray-800">{t.treatment}</h4>
                </div>
                <div className="bg-green-50 p-4 rounded-xl border-l-4 border-green-600 mb-4">
                    <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">{result.treatment}</p>
                </div>

                {result.pesticides && result.pesticides.length > 0 && (
                    <div className="mt-4">
                        <h5 className="font-semibold text-gray-800 mb-2">Recommended Pesticides:</h5>
                        {result.pesticides.map((pesticide, index) => (
                            <div key={index} className="flex items-start gap-2 mb-1">
                                <span className="text-gray-500 mt-1.5">•</span>
                                <p className="text-red-600 font-medium">{pesticide}</p>
                            </div>
                        ))}
                    </div>
                )}

                {result.organicTreatment && result.organicTreatment.length > 0 && (
                    <div className="mt-4">
                        <h5 className="font-semibold text-gray-800 mb-2">Organic Treatment Options:</h5>
                        {result.organicTreatment.map((treatment, index) => (
                            <div key={index} className="flex items-start gap-2 mb-1">
                                <span className="text-gray-500 mt-1.5">•</span>
                                <p className="text-green-600 font-medium">{treatment}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Prevention */}
            <div className="px-5 mt-6">
                <div className="flex items-center gap-2 mb-3">
                    <Shield className="text-sky-500 w-5 h-5" />
                    <h4 className="text-lg font-bold text-gray-800">{t.prevention}</h4>
                </div>
                <div className="space-y-2">
                    {result.prevention?.map((prevention, index) => (
                        <div key={index} className="flex items-start gap-2">
                            <span className="text-gray-500 mt-1.5">•</span>
                            <p className="text-gray-700">{prevention}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mx-5 mt-8 p-4 bg-amber-50 rounded-xl border border-amber-300">
                <p className="text-amber-800 text-sm text-center">
                    ⚠️ This is an AI-powered diagnosis. For severe cases or persistent problems,
                    please consult with a local agricultural expert or extension officer.
                </p>
            </div>
        </div>
    );
}
