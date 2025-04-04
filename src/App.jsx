// src/App.jsx
import React from 'react';
import MediaPlayer from './components/MediaPlayer';

function App() {
  return (
    <div className="bg-gray-900 min-h-screen text-white p-4">
      <h2 className="text-center text-3xl font-bold mb-6">🎵 Reproductor Multimedia con React y Tailwind</h2>
      
      <MediaPlayer type="video" src="/video.mp4" />
      <MediaPlayer type="audio" src="/audio.mp3" />

      <footer className="text-center mt-10 text-sm text-gray-400">
        "Sunset Journey" by John Doe, CC BY-SA. Disponible en: https://example.com/audio
      </footer>
    </div>
  );
}

export default App;
