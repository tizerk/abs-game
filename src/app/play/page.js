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
  const [hasScored, setHasScored] = useState(false);
  const [replayCount, setReplayCount] = useState(0);
  const [pitchVideoEnded, setPitchVideoEnded] = useState(false);

  useEffect(() => {
    fetch('/pitches.json')
      .then(res => res.json())
      .then(data => setPitches(data))
      .catch(err => console.error("Failed to load pitching data", err));
  }, []);

  const startGame = () => {
    setScore(0);
    setCurrentPitchIndex(0);
    setHasScored(false);
    setReplayCount(0);
    setPitchVideoEnded(false);
    if (pitches.length > 0) {
      setGameState('WATCHING_PITCH');
    }
  };

  const handlePitchEnded = () => {
    setPitchVideoEnded(true);
  };

  const handleDecision = (decision) => {
    const currentPitch = pitches[currentPitchIndex];
    const correct = decision === currentPitch.correctDecision;
    
    setIsCorrectDecision(correct);
    setGameState('WATCHING_ABS');
  };

  const handleAbsEnded = () => {
    if (isCorrectDecision) {
      if (!hasScored) {
        setScore(s => s + 1);
        setHasScored(true);
      }
      setGameState('ROUND_RESULT');
    } else {
      setGameState('GAME_OVER');
    }
  };

  const handleNextPitch = () => {
    setHasScored(false);
    setReplayCount(0);
    setPitchVideoEnded(false);
    if (currentPitchIndex + 1 < pitches.length) {
      setCurrentPitchIndex(i => i + 1);
      setGameState('WATCHING_PITCH');
    } else {
      // Loop back if they run out of pitches for now
      setCurrentPitchIndex(0);
      setGameState('WATCHING_PITCH');
    }
  };

  const handleReplayPitch = () => {
    if (score >= 1) {
      setScore(s => s - 1);
      setReplayCount(c => c + 1);
      setPitchVideoEnded(false);
      setGameState('WATCHING_PITCH');
    }
  };

  const handleReplayAbs = () => {
    setReplayCount(c => c + 1);
    setGameState('WATCHING_ABS');
  };

  if (gameState === 'START_SCREEN') {
    return <StartScreen onStart={startGame} />;
  }

  const currentPitch = pitches[currentPitchIndex];
  if (!currentPitch) return <div className="min-h-screen bg-slate-950 flex items-center justify-center text-white">Loading...</div>;

  return (
    <main className="flex min-h-[calc(100vh-4rem)] md:min-h-full flex-col items-center justify-end md:justify-center p-4 md:p-6 pb-6 md:pb-12 bg-slate-950 text-white font-sans selection:bg-blue-500/30 animate-fade-in">
      
      {/* Score Indicator */}
      <div className="absolute top-4 right-4 md:top-8 md:right-8 z-10 flex items-center gap-2 md:gap-3 backdrop-blur-md bg-slate-900/50 px-4 py-2 md:px-5 md:py-2 rounded-full border border-slate-800 shadow-xl shadow-slate-900/50">
        <span className="text-xs md:text-sm text-slate-400 font-bold uppercase tracking-widest leading-none">Score</span>
        <span className="text-xl md:text-2xl font-black leading-none">{score}</span>
      </div>

      <div className="w-full max-w-5xl relative mt-auto md:mt-16 mx-auto flex flex-col items-center justify-end pt-16 md:pt-0">
        {/* Video Area */}
        {gameState === 'WATCHING_PITCH' ? (
           <VideoPlayer 
             key={`pitch-${currentPitchIndex}-${replayCount}`} 
             src={currentPitch.pitchVideo} 
             onEnded={handlePitchEnded} 
           />
        ) : null}

        {gameState === 'WATCHING_ABS' || gameState === 'ROUND_RESULT' || gameState === 'GAME_OVER' ? (
           <VideoPlayer 
             key={`abs-${currentPitchIndex}-${replayCount}`} 
             src={currentPitch.absVideo} 
             onEnded={handleAbsEnded}
             isAbs={true}
           />
        ) : null}

        {/* Game Controls Area */}
        {gameState === 'WATCHING_PITCH' && (
           <div className="flex justify-center w-full mt-4">
             <GameControls 
               callOnField={currentPitch.callOnField} 
               onDecision={handleDecision} 
               onReplay={handleReplayPitch}
               score={score}
               replayEnabled={pitchVideoEnded}
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
             onReplay={handleReplayAbs}
           />
        )}
      </div>
    </main>
  );
}
