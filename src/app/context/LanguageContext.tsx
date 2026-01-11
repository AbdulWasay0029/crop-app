'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'te';

interface Translations {
    // Home Screen
    smartFarmingAssistant: string;
    homeDescription: string;
    scanMyCrop: string;
    joinFarmerForum: string;
    checkMandiPrices: string;

    // Scan Screen
    scanYourCrop: string;
    cameraPermissionTitle: string;
    cameraPermissionMessage: string;
    grantPermission: string;
    alignCropInFrame: string;
    cameraNotAvailableWeb: string;
    gallery: string;
    flip: string;
    scanningTips: string;
    tip1: string;
    tip2: string;
    tip3: string;
    scanAgain: string;
    error: string;
    failedToTakePicture: string;
    failedToPickImage: string;
    analyzing: string;
    recommendedTreatment: string;

    // Forum Screen
    farmerForum: string;
    activeFarmers: string;
    discussions: string;
    todaysPosts: string;
    popularTopics: string;
    replies: string;
    createNewPost: string;

    // Prices Screen
    mandiPrices: string;
    searchCrops: string;
    lastUpdated: string;
    priceDisclaimer: string;

    // Disease Result
    diseaseDetected: string;
    confidence: string;
    symptoms: string;
    treatment: string;
    prevention: string;
    severity: string;
    speakResult: string;
    low: string;
    medium: string;
    high: string;
}

const translations: Record<Language, Translations> = {
    en: {
        // Home Screen
        smartFarmingAssistant: 'Smart Farming Assistant',
        homeDescription: 'Your friendly farming partner, always by your side. Detect diseases, get recommendations, and connect with farmers.',
        scanMyCrop: 'Scan My Crop',
        joinFarmerForum: 'Join Farmer Forum',
        checkMandiPrices: 'Check Mandi Prices',

        // Scan Screen
        scanYourCrop: 'Scan Your Crop',
        cameraPermissionTitle: 'Camera Permission Required',
        cameraPermissionMessage: 'We need access to your camera to scan crops and detect diseases.',
        grantPermission: 'Grant Permission',
        alignCropInFrame: 'Align crop leaves in the frame',
        cameraNotAvailableWeb: 'Camera not available on web. Please use gallery.',
        gallery: 'Gallery',
        flip: 'Flip',
        scanningTips: 'Scanning Tips:',
        tip1: 'Hold camera steady and focus on affected leaves',
        tip2: 'Ensure good lighting for better results',
        tip3: 'Capture close-up images of symptoms',
        scanAgain: 'Scan Again',
        error: 'Error',
        failedToTakePicture: 'Failed to take picture. Please try again.',
        failedToPickImage: 'Failed to pick image. Please try again.',
        analyzing: 'Analyzing crop image...',
        recommendedTreatment: 'Recommended Treatment',

        // Forum Screen
        farmerForum: 'Farmer Forum',
        activeFarmers: 'Active Farmers',
        discussions: 'Discussions',
        todaysPosts: "Today's Posts",
        popularTopics: 'Popular Topics',
        replies: 'replies',
        createNewPost: 'Create New Post',

        // Prices Screen
        mandiPrices: 'Mandi Prices',
        searchCrops: 'Search crops...',
        lastUpdated: 'Last Updated',
        priceDisclaimer: 'Prices are indicative and may vary. Please verify with local markets before making decisions.',

        // Disease Result
        diseaseDetected: 'Disease Detected',
        confidence: 'Confidence',
        symptoms: 'Symptoms',
        treatment: 'Treatment',
        prevention: 'Prevention',
        severity: 'Severity',
        speakResult: 'Speak Result',
        low: 'Low',
        medium: 'Medium',
        high: 'High',
    },
    te: {
        // Home Screen
        smartFarmingAssistant: 'స్మార్ట్ వ్యవసాయ సహాయకుడు',
        homeDescription: 'మీ స్నేహపూర్వక వ్యవసాయ భాగస్వామి, ఎల్లప్పుడూ మీ పక్కన. వ్యాధులను గుర్తించండి, సిఫార్సులు పొందండి మరియు రైతులతో కనెక్ట్ అవ్వండి.',
        scanMyCrop: 'నా పంటను స్కాన్ చేయండి',
        joinFarmerForum: 'రైతుల ఫోరమ్‌లో చేరండి',
        checkMandiPrices: 'మండి ధరలను తనిఖీ చేయండి',

        // Scan Screen
        scanYourCrop: 'మీ పంటను స్కాన్ చేయండి',
        cameraPermissionTitle: 'కెమెరా అనుమతి అవసరం',
        cameraPermissionMessage: 'పంటలను స్కాన్ చేయడానికి మరియు వ్యాధులను గుర్తించడానికి మాకు మీ కెమెరా యాక్సెస్ అవసరం.',
        grantPermission: 'అనుమతి ఇవ్వండి',
        alignCropInFrame: 'పంట ఆకులను ఫ్రేమ్‌లో అమర్చండి',
        cameraNotAvailableWeb: 'వెబ్‌లో కెమెరా అందుబాటులో లేదు. దయచేసి గ్యాలరీని ఉపయోగించండి.',
        gallery: 'గ్యాలరీ',
        flip: 'తిప్పండి',
        scanningTips: 'స్కానింగ్ చిట్కాలు:',
        tip1: 'కెమెరాను స్థిరంగా పట్టుకుని ప్రభావిత ఆకులపై దృష్టి పెట్టండి',
        tip2: 'మంచి ఫలితాల కోసం మంచి వెలుతురు ఉండేలా చూసుకోండి',
        tip3: 'లక్షణాల క్లోజ్-అప్ చిత్రాలను తీయండి',
        scanAgain: 'మళ్లీ స్కాన్ చేయండి',
        error: 'లోపం',
        failedToTakePicture: 'చిత్రం తీయడంలో విఫలమైంది. దయచేసి మళ్లీ ప్రయత్నించండి.',
        failedToPickImage: 'చిత్రం ఎంచుకోవడంలో విఫలమైంది. దయచేసి మళ్లీ ప్రయత్నించండి.',
        analyzing: 'పంట చిత్రాన్ని విశ్లేషిస్తోంది...',
        recommendedTreatment: 'సిఫార్సు చేయబడిన చికిత్స',

        // Forum Screen
        farmerForum: 'రైతుల ఫోరమ్',
        activeFarmers: 'క్రియాశీల రైతులు',
        discussions: 'చర్చలు',
        todaysPosts: 'నేటి పోస్ట్‌లు',
        popularTopics: 'ప్రసిద్ధ అంశాలు',
        replies: 'సమాధానాలు',
        createNewPost: 'కొత్త పోస్ట్ సృష్టించండి',

        // Prices Screen
        mandiPrices: 'మండి ధరలు',
        searchCrops: 'పంటలను వెతకండి...',
        lastUpdated: 'చివరిసారి నవీకరించబడింది',
        priceDisclaimer: 'ధరలు సూచనాత్మకమైనవి మరియు మారవచ్చు. నిర్ణయాలు తీసుకునే ముందు దయచేసి స్థానిక మార్కెట్లతో ధృవీకరించండి.',

        // Disease Result
        diseaseDetected: 'వ్యాధి గుర్తించబడింది',
        confidence: 'విశ్వాసం',
        symptoms: 'లక్షణాలు',
        treatment: 'చికిత్స',
        prevention: 'నివారణ',
        severity: 'తీవ్రత',
        speakResult: 'ఫలితం చెప్పండి',
        low: 'తక్కువ',
        medium: 'మధ్యమ',
        high: 'అధిక',
    },
};

interface LanguageContextType {
    language: Language;
    toggleLanguage: () => void;
    t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState<Language>('en');

    const toggleLanguage = () => {
        setLanguage(prev => prev === 'en' ? 'te' : 'en');
    };

    const t = translations[language];

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
