import { useEffect, useRef } from 'react';

export default function VideoPlayer({ src, onEnded, isAbs = false }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current && src) {
       videoRef.current.load();
       videoRef.current.play().catch(e => console.error("Autoplay prevented:", e));
    }
  }, [src]);

  return (
    <div className={`relative w-full aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl border ${isAbs ? 'border-red-500/50 shadow-red-900/20' : 'border-slate-800 shadow-slate-900/50'}`}>
      
      {isAbs && (
        <div className="absolute top-4 left-4 z-10 bg-red-600 text-white text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">
          ABS Challenge
        </div>
      )}

      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        onEnded={onEnded}
        playsInline
        controls={false}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
