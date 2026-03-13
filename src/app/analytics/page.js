export default function AnalyticsPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] md:min-h-full p-6 animate-fade-in">
      <div className="max-w-2xl w-full backdrop-blur-md bg-slate-900/60 rounded-[2rem] p-12 shadow-2xl border border-slate-800 text-center">
        <div className="w-24 h-24 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl mx-auto mb-8 flex items-center justify-center shadow-lg shadow-indigo-500/20">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        </div>
        <h1 className="text-5xl font-extrabold mb-6 tracking-tight text-white">
          Analytics
        </h1>
        <p className="text-slate-400 text-xl leading-relaxed max-w-lg mx-auto mb-10">
          Analyze the hardest pitches to call. See where the community struggles the most to improve your own strategy. Coming soon!
        </p>
        
        <div className="inline-block p-[2px] rounded-2xl bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800">
          <div className="bg-slate-950 px-8 py-4 rounded-[14px] font-bold text-slate-300 uppercase tracking-widest text-sm">
            Under Construction
          </div>
        </div>
      </div>
    </div>
  );
}
