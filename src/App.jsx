import './styles/global.css';
import './App.css';
import DancingCat from './components/DancingCat';
import AnimationControls from './components/AnimationControls';
import { useAnimation } from './hooks/useAnimation';
import { useEffect, useCallback } from 'react';

export default function App() {
  const { isPlaying, speed, toggle, changeSpeed } = useAnimation();

  const handleKeyDown = useCallback((e) => {
    if (e.code === 'Space' && e.target === document.body) {
      e.preventDefault();
      toggle();
    }
  }, [toggle]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return (
    <main className="app">
      <div className="spotlight" aria-hidden="true" />

      <h1 className="title">
        <span className="title-emoji">🐱</span>
        댄싱 캣
        <span className="title-emoji">🎵</span>
      </h1>
      <p className="subtitle">
        {isPlaying ? '신나게 춤추는 중!' : '잠시 쉬는 중...'}
      </p>

      <DancingCat isPlaying={isPlaying} speed={speed} />

      <AnimationControls
        isPlaying={isPlaying}
        speed={speed}
        onToggle={toggle}
        onSpeedChange={changeSpeed}
      />

      <p className="keyboard-hint" aria-label="키보드 힌트">
        스페이스바로도 조절할 수 있어요
      </p>
    </main>
  );
}
