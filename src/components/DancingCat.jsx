import catSvg from '../assets/images/cat.svg';
import '../styles/animations.css';

export default function DancingCat({ isPlaying, speed }) {
  const duration = (1 / speed).toFixed(2);

  const style = {
    animationPlayState: isPlaying ? 'running' : 'paused',
    '--dance-duration': `${duration}s`,
  };

  return (
    <div className="cat-stage">
      <div className="music-notes" aria-hidden="true">
        {isPlaying && (
          <>
            <span className="note note-1">♪</span>
            <span className="note note-2">♫</span>
            <span className="note note-3">♩</span>
            <span className="note note-4">♬</span>
          </>
        )}
      </div>

      <div className="cat-wrapper" style={style}>
        <div className="cat-body-container">
          <img
            src={catSvg}
            alt="Dancing cat"
            className="cat-image"
            style={style}
          />
        </div>
      </div>

      <div className="dance-floor" aria-hidden="true">
        <div className="floor-light floor-light-1" style={{ animationPlayState: isPlaying ? 'running' : 'paused' }} />
        <div className="floor-light floor-light-2" style={{ animationPlayState: isPlaying ? 'running' : 'paused' }} />
        <div className="floor-light floor-light-3" style={{ animationPlayState: isPlaying ? 'running' : 'paused' }} />
      </div>
    </div>
  );
}
