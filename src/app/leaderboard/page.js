export default function LeaderboardPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] md:min-h-full p-6 animate-fade-in">
      <div className="max-w-2xl w-full backdrop-blur-md bg-slate-900/60 rounded-[2rem] p-12 shadow-2xl border border-slate-800 text-center">
        <div className="w-24 h-24 bg-gradient-to-br from-amber-400 to-orange-600 rounded-3xl mx-auto mb-8 flex items-center justify-center shadow-lg shadow-amber-500/20">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
        </div>
        <h1 className="text-5xl font-extrabold mb-6 tracking-tight text-white">
          Global Leaderboard
        </h1>
        <p className="text-slate-400 text-xl leading-relaxed max-w-lg mx-auto mb-10">
          Compete against fans worldwide to prove you have the best eye in baseball. Coming soon in a future update!
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
