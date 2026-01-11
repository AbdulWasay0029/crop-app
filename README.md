
# 🌾 CropSaviour

> **Smart Farming Assistant for the Modern Age**

CropSaviour is an innovative AI-powered mobile application designed to help farmers detect crop diseases instantly, connect with a community of peers, and check real-time market prices.

## ✨ Features

### 🔍 instant Disease Detection
Simply upload a photo of your crop, and our advanced AI (powered by Google Gemini) will analyze it for diseases.
*   **Offline Mode**: Works even without an internet connection using our extensive internal database.
*   **Detailed Reports**: Get disease name, severity, confidence score, symptoms, and treatment recommendations.

### 🤝 Farmer Forum
Connect with fellow farmers to discuss:
*   Organic farming tips
*   Pest control solutions
*   Crop rotation strategies
*   Weather updates

### 📈 Mandi Prices
Stay updated with the latest market prices for various crops in different markets (Hyderbad, Delhi, Mumbai, etc.).

### 🌐 Multilingual Support
Fully localized for **English** and **Telugu** (తెలుగు) speakers.

---

## 🚀 Getting Started

### Prerequisites
*   Node.js 18+ installed
*   Git

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/AbdulWasay0029/crop-app.git
    cd crop-app
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Run the development server**
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### 🔑 API Configuration (Optional)
This app comes with a robust "offline mock mode" by default. To enable **real AI analysis**:
1.  Get a Gemini API Key from Google AI Studio.
2.  Create a `.env.local` file in the root directory.
3.  Add your key:
    ```env
    GEMINI_API_KEY=your_api_key_here
    ```

---

## 📱 Building the APK (Android)

This project is configured to run as a native Android application using Capacitor.

1.  **Build the web assets**
    ```bash
    npm run build
    ```

2.  **Initialize Android project (if not done)**
    ```bash
    npx cap add android
    ```

3.  **Sync assets to Android**
    ```bash
    npx cap sync
    ```

4.  **Open in Android Studio**
    ```bash
    npx cap open android
    ```
    From Android Studio, you can build the signed APK or run it on an emulator.

---

## 🛠 Tech Stack
*   **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
*   **Mobile Wrapper**: [Capacitor](https://capacitorjs.com/)
*   **AI Model**: Google Gemini Flash 2.0
*   **Icons**: Lucide React

---

## 📜 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Happy Farming! 🌱**
