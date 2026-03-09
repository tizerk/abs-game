"use client";

import { useState, useEffect } from 'react';
import StartScreen from '@/components/StartScreen';
import VideoPlayer from '@/components/VideoPlayer';
import GameControls from '@/components/GameControls';
import ResultOverlay from '@/components/ResultOverlay';

export default function Home() {
  const [gameState, setGameState] = useState('START_SCREEN'); // START_SCREEN, WATCHING_PITCH, MAKE_DECISION, WATCHING_ABS, ROUND_RESULT, GAME_OVER
  const [score, setScore] = useState(0);
  const [pitches, setPitches] = useState([]);
  const [currentPitchIndex, setCurrentPitchIndex] = useState(0);
  const [isCorrectDecision, setIsCorrectDecision] = useState(null);

  useEffect(() => {
    fetch('/pitches.json')
      .then(res => res.json())
      .then(data => setPitches(data))
      .catch(err => console.error("Failed to load pitching data", err));
  }, []);

  const startGame = () => {
    setScore(0);
    setCurrentPitchIndex(0);
    if (pitches.length > 0) {
      setGameState('WATCHING_PITCH');
    }
  };

  const handlePitchEnded = () => {
    setGameState('MAKE_DECISION');
  };

  const handleDecision = (decision) => {
    const currentPitch = pitches[currentPitchIndex];
    const correct = decision === currentPitch.correctDecision;
    
    setIsCorrectDecision(correct);
    setGameState('WATCHING_ABS');
  };

  const handleAbsEnded = () => {
    if (isCorrectDecision) {
      setScore(s => s + 1);
      setGameState('ROUND_RESULT');
    } else {
      setGameState('GAME_OVER');
    }
  };

  const handleNextPitch = () => {
    if (currentPitchIndex + 1 < pitches.length) {
      setCurrentPitchIndex(i => i + 1);
      setGameState('WATCHING_PITCH');
    } else {
      // Loop back if they run out of pitches for now
      setCurrentPitchIndex(0);
      setGameState('WATCHING_PITCH');
    }
  };

  if (gameState === 'START_SCREEN') {
    return <StartScreen onStart={startGame} />;
  }

  const currentPitch = pitches[currentPitchIndex];
  if (!currentPitch) return <div className="min-h-screen bg-slate-950 flex items-center justify-center text-white">Loading...</div>;

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-slate-950 text-white font-sans selection:bg-blue-500/30">
      
      {/* Top Header */}
      <div className="absolute top-0 w-full p-6 flex justify-between items-center max-w-5xl mx-auto z-10 text-white">
         <div className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-red-500 tracking-tight">
           ABS Challenge
         </div>
         <div className="flex items-center gap-3 backdrop-blur-md bg-slate-900/50 px-5 py-2 rounded-full border border-slate-800 shadow-xl shadow-slate-900/50">
           <span className="text-sm text-slate-400 font-bold uppercase tracking-widest">Streak</span>
           <span className="text-2xl font-black">{score}</span>
         </div>
      </div>

      <div className="w-full max-w-4xl relative relative m-auto">
        {/* Video Area */}
        {gameState === 'WATCHING_PITCH' || gameState === 'MAKE_DECISION' ? (
           <VideoPlayer 
             key={`pitch-${currentPitchIndex}`} 
             src={currentPitch.pitchVideo} 
             onEnded={handlePitchEnded} 
           />
        ) : null}

        {gameState === 'WATCHING_ABS' || gameState === 'ROUND_RESULT' || gameState === 'GAME_OVER' ? (
           <VideoPlayer 
             key={`abs-${currentPitchIndex}`} 
             src={currentPitch.absVideo} 
             onEnded={handleAbsEnded}
             isAbs={true}
           />
        ) : null}

        {/* Game Controls Area */}
        {gameState === 'MAKE_DECISION' && (
           <div className="flex justify-center w-full absolute -bottom-10 left-0">
             <GameControls 
               callOnField={currentPitch.callOnField} 
               onDecision={handleDecision} 
             />
           </div>
        )}

        {/* Result Overlay Area */}
        {(gameState === 'ROUND_RESULT' || gameState === 'GAME_OVER') && (
           <ResultOverlay 
             isCorrect={gameState === 'ROUND_RESULT'} 
             actualOutcome={currentPitch.actualOutcome}
             score={score}
             onNext={handleNextPitch}
             onRestart={startGame}
           />
        )}
      </div>
    </main>
  );
}
