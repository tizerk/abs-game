export default function GameControls({ callOnField, onDecision, onReplay, score, replayEnabled }) {
  return (
    <div className="w-full max-w-2xl mt-2 p-5 md:p-8 backdrop-blur-xl bg-slate-900/60 rounded-3xl md:rounded-[2rem] border border-slate-800 shadow-2xl animate-fade-in-up">
      <div className="text-center mb-6 md:mb-8">
        <h2 className="text-slate-500 text-xs md:text-sm uppercase tracking-widest font-bold mb-1 md:mb-2">Call on Field</h2>
        <div className={`text-3xl md:text-4xl font-black tracking-tight ${callOnField === 'Strike' ? 'text-red-500' : 'text-blue-400'}`}>
          {callOnField}
        </div>
      </div>
      
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:gap-6">
        <button 
          onClick={() => onDecision('Challenge')}
          className="cursor-pointer group relative overflow-hidden py-4 md:py-5 text-base md:text-lg font-bold bg-slate-800 hover:bg-slate-700 rounded-2xl transition-all active:scale-95 text-white shadow-lg border border-slate-700"
        >
          <div className="absolute inset-0 w-1/4 h-full bg-gradient-to-r from-transparent via-white/5 to-transparent -ml-24 group-hover:animate-shimmer" />
          Challenge
        </button>
        <button 
          onClick={() => onDecision("Don't Challenge")}
          className="cursor-pointer group relative overflow-hidden py-4 md:py-5 text-base md:text-lg font-bold bg-slate-800 hover:bg-slate-700 rounded-2xl transition-all active:scale-95 text-white shadow-lg border border-slate-700"
        >
          Don't Challenge
        </button>
      </div>

      <button
        onClick={onReplay}
        disabled={score < 1 || !replayEnabled}
        className={`cursor-pointer mt-6 w-full py-3 text-sm font-bold rounded-xl transition-all border flex items-center justify-center gap-2 ${score >= 1 && replayEnabled ? 'bg-slate-900 hover:bg-slate-800 text-slate-400 active:scale-95 border-slate-800' : 'bg-slate-950 text-slate-700 border-slate-900 opacity-50 cursor-not-allowed'}`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
        Replay Pitch <span className="font-bold">(-1 pt)</span>
      </button>
    </div>
  );
}
