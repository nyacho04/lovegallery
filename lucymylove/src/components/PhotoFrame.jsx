import React from 'react';
import './PhotoFrame.css';

const PhotoFrame = ({ src, alt, caption, mensaje }) => {
  return (
    <div className="photo-frame">
      <div className="photo-frame-inner">
        <img src={src} alt={alt} className="photo-frame-img" onClick={() => { if (typeof window !== 'undefined') window.dispatchEvent(new CustomEvent('open-photo', { detail: { src, alt, mensaje } })); }} style={{ cursor: 'pointer' }} />
        {caption && <div className="photo-frame-caption">{caption}</div>}
      </div>
      {/* Garabato tipo texto ilegible */}
      <svg className="scribble" width="54" height="18" viewBox="0 0 54 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 15 Q10 10, 18 14 Q26 18, 34 12 Q42 6, 52 10" stroke="#bdbdbd" strokeWidth="2" fill="none"/>
      </svg>
    </div>
  );
};

export default PhotoFrame; 