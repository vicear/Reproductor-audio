// src/components/MediaPlayer.jsx
import React, { useRef, useState } from 'react';

const MediaPlayer = ({ type, src }) => {
  const mediaRef = useRef(null);
  const [volume, setVolume] = useState(1);

  const play = () => mediaRef.current.play();
  const pause = () => mediaRef.current.pause();
  const stop = () => {
    mediaRef.current.pause();
    mediaRef.current.currentTime = 0;
  };

  const changeVolume = (e) => {
    const newVolume = e.target.value;
    setVolume(newVolume);
    mediaRef.current.volume = newVolume;
  };

  return (
    <div className="bg-gray-800 p-6 rounded-2xl shadow-md max-w-2xl mx-auto my-6">
      {type === 'video' ? (
        <video ref={mediaRef} className="w-full rounded-xl mb-4" controls={false}>
          <source src={src} type="video/mp4" />
          Tu navegador no soporta la etiqueta de video.
        </video>
      ) : (
        <audio ref={mediaRef} className="w-full mb-4" controls={false}>
          <source src={src} type="audio/mp3" />
          Tu navegador no soporta la etiqueta de audio.
        </audio>
      )}

      <div className="flex justify-center gap-4 mb-4">
        <button onClick={play} className="px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600">▶️ Play</button>
        <button onClick={pause} className="px-4 py-2 bg-yellow-500 text-white rounded-xl hover:bg-yellow-600">⏸️ Pause</button>
        <button onClick={stop} className="px-4 py-2 bg-red-500 text-white rounded-xl hover:bg-red-600">⏹️ Stop</button>
      </div>

      <div className="flex items-center justify-center gap-2">
        <label htmlFor="volume" className="text-white font-medium">🔊 Volumen:</label>
        <input
          id="volume"
          type="range"
          min="0"
          max="1"
          step="0.1"
          value={volume}
          onChange={changeVolume}
          className="w-1/2 accent-blue-500"
        />
      </div>
    </div>
  );
};

export default MediaPlayer;
