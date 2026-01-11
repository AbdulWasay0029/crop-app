
export interface DiseaseInfo {
    id: number;
    name: string;
    crop: string;
    description: string;
    symptoms: string[];
    treatment: string;
    prevention: string[];
    severity: 'low' | 'medium' | 'high';
    pesticides: string[];
    organicTreatment: string[];
    season: string[];
}

export const diseaseDatabase: DiseaseInfo[] = [
    {
        id: 1,
        name: 'Tomato Early Blight',
        crop: 'Tomato',
        description: 'A fungal disease caused by Alternaria solani that affects tomato plants, causing dark spots with concentric rings on leaves.',
        symptoms: [
            'Dark brown spots with concentric rings on older leaves',
            'Yellow halo around spots',
            'Leaf yellowing and dropping',
            'Stem lesions with dark rings',
            'Fruit spots near stem end'
        ],
        treatment: 'Apply fungicide containing Mancozeb or Chlorothalonil. Remove affected leaves and improve air circulation.',
        prevention: [
            'Crop rotation with non-solanaceous crops',
            'Avoid overhead watering',
            'Maintain proper plant spacing',
            'Remove plant debris',
            'Use disease-resistant varieties'
        ],
        severity: 'medium',
        pesticides: [
            'Mancozeb 75% WP (2g/L)',
            'Chlorothalonil 75% WP (2g/L)',
            'Copper Oxychloride 50% WP (3g/L)',
            'Propiconazole 25% EC (1ml/L)'
        ],
        organicTreatment: [
            'Neem oil spray (5ml/L)',
            'Baking soda solution (5g/L)',
            'Copper sulfate (2g/L)',
            'Trichoderma viride application'
        ],
        season: ['Monsoon', 'Post-monsoon']
    },
    {
        id: 2,
        name: 'Tomato Late Blight',
        crop: 'Tomato',
        description: 'A devastating disease caused by Phytophthora infestans that can destroy entire crops in favorable conditions.',
        symptoms: [
            'Water-soaked spots on leaves',
            'White fuzzy growth on leaf undersides',
            'Brown to black lesions on stems',
            'Fruit rot with firm, brown areas',
            'Rapid plant collapse in humid conditions'
        ],
        treatment: 'Apply systemic fungicides like Metalaxyl + Mancozeb. Remove infected plants immediately.',
        prevention: [
            'Use certified disease-free seeds',
            'Avoid overhead irrigation',
            'Ensure good drainage',
            'Apply preventive fungicide sprays',
            'Remove volunteer potato plants'
        ],
        severity: 'high',
        pesticides: [
            'Metalaxyl + Mancozeb 72% WP (2.5g/L)',
            'Dimethomorph 50% WP (1g/L)',
            'Cymoxanil + Mancozeb 72% WP (2g/L)',
            'Fosetyl Aluminium 80% WP (2.5g/L)'
        ],
        organicTreatment: [
            'Bordeaux mixture (1%)',
            'Copper hydroxide (3g/L)',
            'Potassium bicarbonate (5g/L)',
            'Milk spray (1:10 ratio)'
        ],
        season: ['Monsoon', 'Winter']
    },
    {
        id: 3,
        name: 'Rice Blast',
        crop: 'Rice',
        description: 'A serious fungal disease caused by Magnaporthe oryzae affecting rice at all growth stages.',
        symptoms: [
            'Diamond-shaped lesions on leaves',
            'Gray centers with brown margins',
            'Neck rot causing panicle breakage',
            'Node infection causing lodging',
            'Reduced grain filling'
        ],
        treatment: 'Apply Tricyclazole or Isoprothiolane fungicides. Use resistant varieties.',
        prevention: [
            'Use resistant rice varieties',
            'Balanced fertilization (avoid excess nitrogen)',
            'Proper water management',
            'Seed treatment with fungicides',
            'Remove infected stubble'
        ],
        severity: 'high',
        pesticides: [
            'Tricyclazole 75% WP (0.6g/L)',
            'Isoprothiolane 40% EC (1.5ml/L)',
            'Carbendazim 50% WP (1g/L)',
            'Tebuconazole 25.9% EC (1ml/L)'
        ],
        organicTreatment: [
            'Pseudomonas fluorescens (5g/L)',
            'Trichoderma harzianum (5g/L)',
            'Neem cake application (250kg/ha)',
            'Silicon application (2kg/ha)'
        ],
        season: ['Kharif', 'Rabi']
    },
    {
        id: 4,
        name: 'Cotton Bollworm',
        crop: 'Cotton',
        description: 'A major pest of cotton caused by Helicoverpa armigera larvae that damage bolls and reduce yield.',
        symptoms: [
            'Circular holes in bolls',
            'Larvae feeding inside bolls',
            'Damaged flowers and squares',
            'Frass (insect excrement) on plants',
            'Reduced boll formation'
        ],
        treatment: 'Apply Bt-based insecticides or synthetic pyrethroids. Use pheromone traps for monitoring.',
        prevention: [
            'Use Bt cotton varieties',
            'Install pheromone traps',
            'Intercropping with marigold',
            'Regular field monitoring',
            'Destroy crop residues'
        ],
        severity: 'high',
        pesticides: [
            'Chlorpyrifos 20% EC (2ml/L)',
            'Cypermethrin 25% EC (1ml/L)',
            'Indoxacarb 14.5% SC (1ml/L)',
            'Emamectin Benzoate 5% SG (0.5g/L)'
        ],
        organicTreatment: [
            'Bt spray (Bacillus thuringiensis)',
            'NPV (Nuclear Polyhedrosis Virus)',
            'Neem oil (5ml/L)',
            'Release of Trichogramma wasps'
        ],
        season: ['Kharif']
    },
    {
        id: 5,
        name: 'Wheat Rust',
        crop: 'Wheat',
        description: 'A fungal disease complex including leaf rust, stem rust, and stripe rust affecting wheat crops.',
        symptoms: [
            'Orange to reddish-brown pustules on leaves',
            'Yellow stripes on leaves (stripe rust)',
            'Black pustules on stems (stem rust)',
            'Premature leaf senescence',
            'Reduced grain weight'
        ],
        treatment: 'Apply Propiconazole or Tebuconazole fungicides. Use resistant varieties.',
        prevention: [
            'Use rust-resistant wheat varieties',
            'Timely sowing',
            'Balanced fertilization',
            'Remove alternate hosts',
            'Crop rotation'
        ],
        severity: 'medium',
        pesticides: [
            'Propiconazole 25% EC (1ml/L)',
            'Tebuconazole 25.9% EC (1ml/L)',
            'Mancozeb 75% WP (2g/L)',
            'Hexaconazole 5% EC (2ml/L)'
        ],
        organicTreatment: [
            'Sulfur dust application',
            'Bordeaux mixture (1%)',
            'Trichoderma application',
            'Cow urine spray (1:10 ratio)'
        ],
        season: ['Rabi']
    }
];
