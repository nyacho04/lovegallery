import React from 'react';

const PenguinSticker = ({ style }) => (
  <svg
    width="70"
    height="90"
    viewBox="0 0 70 90"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={style}
  >
    <ellipse cx="35" cy="50" rx="28" ry="35" fill="#FFF6E5" stroke="#C8C3E6" strokeWidth="3"/>
    <ellipse cx="35" cy="45" rx="20" ry="28" fill="#B8E0F1" stroke="#C8C3E6" strokeWidth="2"/>
    <ellipse cx="25" cy="45" rx="3.5" ry="5" fill="#000"/>
    <ellipse cx="45" cy="45" rx="3.5" ry="5" fill="#000"/>
    <ellipse cx="35" cy="60" rx="7" ry="4" fill="#F2D3DC"/>
    <polygon points="32,55 38,55 35,62" fill="#F2D3DC"/>
    <ellipse cx="18" cy="80" rx="7" ry="4" fill="#F2D3DC"/>
    <ellipse cx="52" cy="80" rx="7" ry="4" fill="#F2D3DC"/>
  </svg>
);

export default PenguinSticker; 