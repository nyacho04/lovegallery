import React from 'react';
import './PhotoFrame.css';

const PhotoFrame = ({ src, alt, caption, mensaje, starred }) => {
  return (
    <div className="photo-frame">
      {starred && (
        <span style={{
          position: 'absolute',
          top: '-18px',
          right: '-18px',
          zIndex: 20,
          filter: 'drop-shadow(0 0 12px #ffe066cc) drop-shadow(0 0 24px #ffe06699)'
        }}>
          <svg width="44" height="38" viewBox="0 0 44 38" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 5
              Q24 12, 32 13
              Q39 13.5, 34 18
              Q30 21, 32 28
              Q33 32, 25 29.5
              Q22 28, 19 29.5
              Q11 32, 12 28
              Q14 21, 10 18
              Q5 13.5, 12 13
              Q20 12, 22 5
              Z"
              fill="#ffe066"
              stroke="#ffd700"
              strokeWidth="2.2"
              style={{ filter: 'blur(0.2px)' }}
            />
          </svg>
        </span>
      )}
      <div className="photo-frame-inner">
        <img src={src} alt={alt} className="photo-frame-img" onClick={() => { if (typeof window !== 'undefined') window.dispatchEvent(new CustomEvent('open-photo', { detail: { src, alt, mensaje } })); }} style={{ cursor: 'pointer' }} />
        {caption && <div className="photo-frame-caption">{caption}</div>}
      </div>
      <svg className="scribble" width="54" height="18" viewBox="0 0 54 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 15 Q10 10, 18 14 Q26 18, 34 12 Q42 6, 52 10" stroke="#bdbdbd" strokeWidth="2" fill="none"/>
      </svg>
    </div>
  );
};

export default PhotoFrame; 