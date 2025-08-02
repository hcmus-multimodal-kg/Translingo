# 🌐 Translation Machine

AI-powered English to Vietnamese translation machine built with FastAPI backend and React frontend.

## 🚀 Features

- **Real-time Translation**: Instant English to Vietnamese translation
- **Modern UI**: Beautiful, responsive interface with glassmorphism design
- **AI-Powered**: Uses T5 Transformer model for high-quality translations
- **User-Friendly**: Copy-to-clipboard, keyboard shortcuts, and loading states
- **RESTful API**: FastAPI backend with clean API endpoints

## 🏗️ Architecture

```
translation_machine/
├── Backend/                 # FastAPI backend
│   ├── main.py             # Main API server
│   ├── requirements.txt    # Python dependencies
│   ├── Model/             # Jupyter notebooks for model training
│   └── t5_vi_translation/ # T5 model files (not in git)
├── Frontend/              # React frontend
│   ├── src/               # React source code
│   ├── public/            # Static files
│   ├── package.json       # Node.js dependencies
│   └── README.md          # Frontend documentation
└── PhoMT/                 # Dataset (not in git)
```

## 🛠️ Tech Stack

### Backend
- **FastAPI** - Modern Python web framework
- **PyTorch** - Deep learning framework
- **Transformers** - Hugging Face transformers library
- **T5 Model** - Text-to-Text Transfer Transformer

### Frontend
- **React 18** - JavaScript library for building user interfaces
- **Tailwind CSS** - Utility-first CSS framework
- **Axios** - HTTP client for API calls
- **Lucide React** - Beautiful icons

## 📦 Installation

### Prerequisites
- Python 3.8+
- Node.js 16+
- npm or yarn

### Backend Setup

1. **Navigate to backend directory:**
   ```bash
   cd Backend
   ```

2. **Install Python dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

3. **Download the T5 model:**
   ```bash
   # You need to download the trained T5 model files
   # and place them in Backend/t5_vi_translation/
   ```

4. **Start the backend server:**
   ```bash
   python main.py
   ```
   
   The API will be available at `http://localhost:8000`

### Frontend Setup

1. **Navigate to frontend directory:**
   ```bash
   cd Frontend
   ```

2. **Install Node.js dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```
   
   The app will open at `http://localhost:3000`

## 🎯 Usage

1. **Start both servers:**
   - Backend: `python main.py` (runs on port 8000)
   - Frontend: `npm start` (runs on port 3000)

2. **Open your browser** and go to `http://localhost:3000`

3. **Enter English text** in the left textarea

4. **Click "Translate"** or press `Ctrl+Enter`

5. **View the Vietnamese translation** on the right

6. **Copy the translation** using the copy button

## 🔌 API Endpoints

### POST `/translate`
Translates English text to Vietnamese.

**Request:**
```json
{
  "text": "Hello, how are you?"
}
```

**Response:**
```json
{
  "translation": "Xin chào, bạn khỏe không?"
}
```

## 🎨 Frontend Features

- **Responsive Design**: Works on desktop and mobile
- **Loading States**: Visual feedback during translation
- **Error Handling**: User-friendly error messages
- **Keyboard Shortcuts**: `Ctrl+Enter` to translate quickly
- **Copy to Clipboard**: One-click copy functionality
- **Modern UI**: Glassmorphism design with gradients

## 📁 Project Structure

```
Backend/
├── main.py                 # FastAPI server with translation endpoint
├── requirements.txt        # Python dependencies
├── Model/                 # Training notebooks
│   ├── translation-machine.ipynb
│   └── translation-v2.ipynb
└── t5_vi_translation/     # Trained model files

Frontend/
├── src/
│   ├── App.js             # Main React component
│   ├── index.js           # React entry point
│   └── index.css          # Global styles with Tailwind
├── public/
│   └── index.html         # HTML template
├── package.json           # Node.js dependencies
├── tailwind.config.js     # Tailwind CSS configuration
└── postcss.config.js      # PostCSS configuration
```

## 🔧 Development

### Backend Development
- The FastAPI server uses T5 model for translation
- Model files are stored in `Backend/t5_vi_translation/`
- API documentation available at `http://localhost:8000/docs`

### Frontend Development
- React app with modern hooks and functional components
- Tailwind CSS for styling
- Axios for API communication
- Proxy configured to backend at `http://localhost:8000`

## 🚀 Deployment

### Backend Deployment
```bash
cd Backend
pip install -r requirements.txt
python main.py
```

### Frontend Deployment
```bash
cd Frontend
npm install
npm run build
# Serve the build folder
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Hugging Face Transformers library
- T5 model architecture
- FastAPI framework
- React and Tailwind CSS communities 