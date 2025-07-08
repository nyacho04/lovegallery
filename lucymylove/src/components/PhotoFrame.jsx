import React from 'react';
import './PhotoFrame.css';

const PhotoFrame = ({ src, alt, caption }) => {
  return (
    <div className="photo-frame">
      <div className="photo-frame-inner">
        <img src={src} alt={alt} className="photo-frame-img" />
        {caption && <div className="photo-frame-caption">{caption}</div>}
      </div>
    </div>
  );
};

export default PhotoFrame; 