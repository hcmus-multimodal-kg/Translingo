# Translation Machine Frontend

A beautiful, modern React frontend for the AI-powered English to Vietnamese translation machine.

## Features

- 🎨 Modern, responsive UI with glassmorphism design
- ⚡ Real-time translation with loading states
- 📋 Copy-to-clipboard functionality
- ⌨️ Keyboard shortcuts (Ctrl+Enter to translate)
- 📱 Mobile-friendly design
- 🌈 Beautiful gradient background

## Setup

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000).

## Usage

1. Make sure your backend server is running on `http://localhost:8000`
2. Enter English text in the left textarea
3. Click "Translate" or press Ctrl+Enter
4. View the Vietnamese translation on the right
5. Use the copy button to copy the translation to clipboard

## Technologies Used

- React 18
- Tailwind CSS
- Axios for API calls
- Lucide React for icons
- Create React App

## API Integration

The frontend connects to your FastAPI backend at `http://localhost:8000` and expects the following endpoint:

- `POST /translate` - Accepts `{ text: string }` and returns `{ translation: string }`

## Build for Production

```bash
npm run build
```

This creates a `build` folder with optimized production files. 