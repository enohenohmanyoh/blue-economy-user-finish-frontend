import React from 'react';
import './VideoTestimonial.css';

const VideoTestimonial = ({ videoSrc, thumbnail, name, role, quote }) => {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [hasError, setHasError] = React.useState(false);
  const videoRef = React.useRef();

  const handlePlay = () => {
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.play().catch(err => {
        console.error("Video play error:", err);
        setHasError(true);
        setIsPlaying(false);
      });
    }
  };

  return (
    <div className="video-testimonial-card">
      <div className="video-container">
        {!isPlaying ? (
          <div className="thumbnail-overlay" onClick={handlePlay}>
            <img 
              src={thumbnail} 
              alt={`Play ${name}'s testimonial`}
              className="thumbnail-image"
              onError={() => setHasError(true)}
            />
            <div className="play-button">
              <svg viewBox="0 0 24 24" width="48" height="48">
                <path d="M8 5v14l11-7-11-7z" fill="white"/>
              </svg>
            </div>
          </div>
        ) : (
          <video
            ref={videoRef}
            src={videoSrc}
            controls
            autoPlay
            playsInline
            muted
            onError={(e) => {
              console.error("Video load error:", e);
              setHasError(true);
            }}
            onEnded={() => setIsPlaying(false)}
            className="testimonial-video"
          >
            Your browser does not support HTML5 video.
          </video>
        )}
      </div>

      {/* If video errors, show warning but keep video visible */}
      {hasError && (
        <p className="video-error">⚠️ Video could not be loaded. Check console for details.</p>
      )}

      <div className="testimonial-info">
        <p className="testimonial-quote">"{quote}"</p>
        <div className="testimonial-author">
          <span className="author-name">{name}</span>
          <span className="author-title">{role}</span>
        </div>
      </div>
    </div>
  );
};

export default VideoTestimonial;
