export default function ResultOverlay({ isCorrect, actualOutcome, score, onNext, onRestart }) {
  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center bg-slate-950/90 backdrop-blur-md p-6 animate-fade-in rounded-3xl">
      <div className="max-w-sm w-full bg-slate-900 rounded-[2rem] p-10 shadow-2xl border border-slate-800 text-center transform transition-all scale-100">
        
        <div className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6 shadow-lg ${isCorrect ? 'bg-green-500/20 text-green-500 shadow-green-900/20' : 'bg-red-500/20 text-red-500 shadow-red-900/20'}`}>
          {isCorrect ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          ) : (
             <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
            </svg>           
          )}
        </div>

        <h2 className={`text-4xl font-black mb-3 tracking-tight ${isCorrect ? 'text-white' : 'text-white'}`}>
          {isCorrect ? 'Correct!' : 'Game Over'}
        </h2>
        <p className="text-slate-400 text-lg mb-8 leading-relaxed">
          The pitch was a <span className={`font-bold ${actualOutcome === 'Strike' ? 'text-red-400' : 'text-blue-400'}`}>{actualOutcome}</span>
        </p>
        
        <div className="bg-slate-950/50 rounded-2xl p-6 mb-10 border border-slate-800/50">
          <p className="text-slate-500 text-xs uppercase tracking-widest font-bold mb-2">Current Streak</p>
          <div className="flex items-baseline justify-center gap-1">
            <p className="text-5xl font-black text-white">{score}</p>
            <p className="text-slate-500 font-bold">pts</p>
          </div>
        </div>

        {isCorrect ? (
          <button 
            onClick={onNext}
            className="w-full py-4 text-xl font-bold bg-white hover:bg-slate-200 text-slate-950 rounded-2xl shadow-lg transition-all active:scale-95"
          >
            Next Pitch
          </button>
        ) : (
          <button 
            onClick={onRestart}
            className="w-full py-4 text-xl font-bold bg-white hover:bg-slate-200 text-slate-950 rounded-2xl shadow-lg transition-all active:scale-95"
          >
            Play Again
          </button>
        )}
      </div>
    </div>
  );
}
