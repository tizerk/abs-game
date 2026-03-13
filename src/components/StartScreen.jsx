export default function StartScreen({ onStart }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] md:min-h-full bg-slate-950 text-white p-6 animate-fade-in">
      <div className="max-w-md w-full backdrop-blur-md bg-slate-900/80 rounded-3xl p-10 shadow-2xl border border-slate-800 text-center transform transition-all hover:scale-[1.02]">
        <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-red-600 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg shadow-blue-500/20">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h1 className="text-4xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-red-500 tracking-tight">
          Overturned
        </h1>
        <p className="text-slate-400 mb-10 text-lg leading-relaxed">
          Are you better than an umpire? Watch the pitch, see the call on the field, and decide if it should be challenged!
        </p>
        <button 
          onClick={onStart}
          className="cursor-pointer w-full py-4 text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 rounded-2xl shadow-lg shadow-blue-900/50 transition-all active:scale-95 text-white border border-blue-500/30"
        >
          Play
        </button>
      </div>
    </div>
  );
}
