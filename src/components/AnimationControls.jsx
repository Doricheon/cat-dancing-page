import '../styles/controls.css';

export default function AnimationControls({ isPlaying, speed, onToggle, onSpeedChange }) {
  const speeds = [
    { label: '느리게', value: 0.5 },
    { label: '보통', value: 1 },
    { label: '빠르게', value: 2 },
  ];

  return (
    <div className="controls" role="group" aria-label="애니메이션 컨트롤">
      <button
        className={`play-btn ${isPlaying ? 'playing' : 'paused'}`}
        onClick={onToggle}
        aria-pressed={isPlaying}
        aria-label={isPlaying ? '애니메이션 정지' : '애니메이션 시작'}
      >
        <span className="btn-icon">{isPlaying ? '⏸' : '▶'}</span>
        <span className="btn-text">{isPlaying ? '정지' : '시작'}</span>
      </button>

      <div className="speed-controls" role="group" aria-label="속도 조절">
        {speeds.map(({ label, value }) => (
          <button
            key={value}
            className={`speed-btn ${speed === value ? 'active' : ''}`}
            onClick={() => onSpeedChange(value)}
            aria-pressed={speed === value}
            aria-label={`속도 ${label}`}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}
