export default function GameControls({ callOnField, onDecision }) {
  return (
    <div className="w-full max-w-2xl mt-8 p-8 backdrop-blur-xl bg-slate-900/60 rounded-[2rem] border border-slate-800 shadow-2xl animate-fade-in-up">
      <div className="text-center mb-8">
        <h2 className="text-slate-500 text-sm uppercase tracking-widest font-bold mb-2">Call on Field</h2>
        <div className={`text-4xl font-black tracking-tight ${callOnField === 'Strike' ? 'text-red-500' : 'text-blue-400'}`}>
          {callOnField}
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-6">
        <button 
          onClick={() => onDecision('Challenge')}
          className="group relative overflow-hidden py-5 text-lg font-bold bg-slate-800 hover:bg-slate-700 rounded-2xl transition-all active:scale-95 text-white shadow-lg border border-slate-700"
        >
          <div className="absolute inset-0 w-1/4 h-full bg-gradient-to-r from-transparent via-white/5 to-transparent -ml-24 group-hover:animate-shimmer" />
          Challenge
        </button>
        <button 
          onClick={() => onDecision("Don't Challenge")}
          className="py-5 text-lg font-bold bg-slate-800/50 hover:bg-slate-800 rounded-2xl transition-all active:scale-95 text-slate-300 shadow-lg border border-slate-800"
        >
          Don't Challenge
        </button>
      </div>
    </div>
  );
}
