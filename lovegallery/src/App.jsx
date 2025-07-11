import PhotoFrame from './components/PhotoFrame';
import penguin from './assets/penguin.webp';
import muneco1 from './assets/muñeco1.png';
import muneco2 from './assets/muñeco2.png';
import snoopy1 from './assets/snoopy1.webp';
import snoopy2 from './assets/snoopy2.webp';
import foto1 from './assets/foto1.jpg';
import foto2 from './assets/foto2.jpg';
import foto3 from './assets/foto3.jpg';
import foto4 from './assets/foto4.jpg';
import foto5 from './assets/foto5.jpg';
import foto6 from './assets/foto6.jpg';
import foto7 from './assets/foto7.jpg';
import foto8 from './assets/foto8.jpg';
import foto9 from './assets/foto9.jpg';
import foto10 from './assets/foto10.jpg';
import foto11 from './assets/foto11.jpg';
import foto12 from './assets/foto12.jpg';
import foto13 from './assets/foto13.jpg';
import foto14 from './assets/foto14.jpg';
import foto15 from './assets/foto15.jpg';
import foto16 from './assets/foto16.jpg';
import kitty1 from './assets/kitty1.png';
import kitty2 from './assets/kitty2.png';
import './App.css';
import React, { useState, useEffect, useRef } from 'react';
import cancion from './assets/Monsieur Periné - Nuestra Canción.mp3';

const fotos = [
  { src: foto1, alt: 'Foto 1', mensaje: 'amo esta foto, salis dormidita pero no se ve tu cara, no te podes quejar 😀' },
  { src: foto2, alt: 'Foto 2', mensaje: 'no recuerdo que peli fuimos a ver al cine, pero estabas preciosa 😭' },
  { src: foto3, alt: 'Foto 3', mensaje: 'en esta salgo re facha, no? 😁' },
  { src: foto4, alt: 'Foto 4', mensaje: 'mi foto favorita jiji' },
  { src: foto5, alt: 'Foto 5', mensaje: 'lenguita 😛' },
  { src: foto6, alt: 'Foto 6', mensaje: 'mi otra foto favorita, salimos muy linids 😭' },
  { src: foto7, alt: 'Foto 7', mensaje: 'en esta vos tan aesthetic y yo tan azteca' },
  { src: foto8, alt: 'Foto 8', mensaje: 'spider maaaan sin arañas' },
  { src: foto9, alt: 'Foto 9', mensaje: 'me haces muy feliz mi amor 😭' },
  { src: foto10, alt: 'Foto 10', mensaje: 'gracias por leer cada nota amor, próximamente más en la love gallery 😁' },
  { src: foto11, alt: 'Foto 11', mensaje: 'todas las fotos que nos sacamos juntos tienen su contraparte lenguita 😛' },
  { src: foto12, alt: 'Foto 12', mensaje: 'hace fio' },
  { src: foto13, alt: 'Foto 13', mensaje: 'dormidas mis 2 bebés' },
  { src: foto14, alt: 'Foto 14', mensaje: 'la mejor chocotorta que comí' },
  { src: foto15, alt: 'Foto 15', mensaje: '10/2/25, el cumple de kitty ^_^' },
  { src: foto16, alt: 'Foto 16', mensaje: '16/8/24, primer día de pinguino!' },
];

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalPhoto, setModalPhoto] = useState(null);
  const [modalAlt, setModalAlt] = useState('');
  const [modalMessage, setModalMessage] = useState('');
  const [modalAnim, setModalAnim] = useState('');
  const [jumping, setJumping] = useState(false);
  const [modalIndex, setModalIndex] = useState(null);
  const [fadeIn, setFadeIn] = useState(false);
  const [audio, setAudio] = useState(null);
  const [audioError, setAudioError] = useState(false);
  const [muted, setMuted] = useState(true);
  const [showMusicMsg, setShowMusicMsg] = useState(true);
  const msgTimeoutRef = useRef(null);

  useEffect(() => {
    setTimeout(() => setFadeIn(true), 50);
  }, []);

  useEffect(() => {
    const handler = (e) => {
      const idx = fotos.findIndex(f => f.src === e.detail.src);
      setModalPhoto(e.detail.src);
      setModalAlt(e.detail.alt);
      setModalMessage(e.detail.mensaje);
      setModalIndex(idx);
      setModalOpen(true);
      setTimeout(() => setModalAnim('open'), 10);
    };
    window.addEventListener('open-photo', handler);
    return () => window.removeEventListener('open-photo', handler);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 40) {
        document.body.classList.add('scrolled');
      } else {
        document.body.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const audioEl = new window.Audio(cancion);
    audioEl.volume = 0.15;
    audioEl.loop = false;
    setAudio(audioEl);
    audioEl.play().catch(() => setAudioError(true));
    audioEl.addEventListener('ended', () => {
      audioEl.currentTime = 0;
      audioEl.play();
    });
    return () => {
      audioEl.pause();
      audioEl.removeEventListener('ended', () => {});
    };
  }, []);

  useEffect(() => {
    if (audio) audio.muted = muted;
  }, [muted, audio]);

  useEffect(() => {
    if (showMusicMsg) {
      if (msgTimeoutRef.current) clearTimeout(msgTimeoutRef.current);
      msgTimeoutRef.current = setTimeout(() => setShowMusicMsg(false), 10000);
    }
    return () => {
      if (msgTimeoutRef.current) clearTimeout(msgTimeoutRef.current);
    };
  }, [showMusicMsg]);

  const handlePlayAudio = () => {
    if (audio) {
      audio.play();
      setAudioError(false);
    }
  };

  const closeModal = () => {
    setModalAnim('close');
    setTimeout(() => {
      setModalOpen(false);
      setModalAnim('');
    }, 350);
  };

  const handlePenguinJump = () => {
    if (!jumping) {
      setJumping(true);
      setTimeout(() => setJumping(false), 500);
    }
  };

  const nextPhoto = (e) => {
    e.stopPropagation();
    if (modalIndex !== null) {
      const nextIdx = (modalIndex + 1) % fotos.length;
      setModalPhoto(fotos[nextIdx].src);
      setModalAlt(fotos[nextIdx].alt);
      setModalMessage(fotos[nextIdx].mensaje);
      setModalIndex(nextIdx);
    }
  };

  const prevPhoto = (e) => {
    e.stopPropagation();
    if (modalIndex !== null) {
      const prevIdx = (modalIndex - 1 + fotos.length) % fotos.length;
      setModalPhoto(fotos[prevIdx].src);
      setModalAlt(fotos[prevIdx].alt);
      setModalMessage(fotos[prevIdx].mensaje);
      setModalIndex(prevIdx);
    }
  };

  const toggleMute = () => {
    if (audioError && audio) {
      audio.play().then(() => setAudioError(false));
    }
    setMuted(m => !m);
  };

  return (
    <div className={"collage-layout" + (fadeIn ? " fade-in" : "") }>
      {}
      <div className="side-sparkles left">
        <span className="sparkle star"></span>
        <span className="sparkle circle"></span>
        <span className="sparkle star"></span>
        <span className="sparkle circle"></span>
        <span className="sparkle star"></span>
      </div>
      <div className="side-sparkles right">
        <span className="sparkle star"></span>
        <span className="sparkle circle"></span>
        <span className="sparkle star"></span>
        <span className="sparkle circle"></span>
        <span className="sparkle star"></span>
      </div>
      {}
      {modalOpen && (
        <div className="photo-modal" onClick={closeModal}>
          <div className={`photo-modal-content ${modalAnim}`} onClick={e => e.stopPropagation()}>
            <button className="photo-modal-close" onClick={closeModal} aria-label="Cerrar modal">&times;</button>
            <img src={modalPhoto} alt={modalAlt} className="photo-modal-img" />
            <div className="photo-modal-message">{modalMessage}</div>
            <div className="photo-modal-nav">
              <button className="photo-modal-nav-btn" onClick={prevPhoto} aria-label="Foto anterior">&larr; Atrás</button>
              <button className="photo-modal-nav-btn" onClick={nextPhoto} aria-label="Siguiente foto">Adelante &rarr;</button>
            </div>
          </div>
        </div>
      )}
      <div className="penguin-center fade-in">
        <div className="sparkles sparkles-penguin">
          <span className="sparkle star"></span>
          <span className="sparkle circle"></span>
          <span className="sparkle star"></span>
          <span className="sparkle circle"></span>
          <span className="sparkle star"></span>
        </div>
        <div className="cloud-bubble">
            Hola mi amor, bienvenida a nuestra galeria! este es el espacio en el cual vas a poder ver los recuerditos que hemos sacado durante nuestra relación. Cada fotito tiene una nota graciosa, podes verla dándole click! Espero que te guste. Te ama mucho - nani
          <div className="sparkles sparkles-bubble">
            <span className="sparkle star"></span>
            <span className="sparkle circle"></span>
            <span className="sparkle star"></span>
            <span className="sparkle circle"></span>
            <span className="sparkle star"></span>
            <span className="sparkle circle"></span>
            <span className="sparkle star"></span>
            <span className="sparkle circle"></span>
          </div>
        </div>
        <img
          src={penguin}
          alt="Pinguino saludando"
          className={"penguin-img" + (jumping ? " jump" : "")}
          onClick={handlePenguinJump}
          style={{ cursor: 'pointer' }}
        />
        <div style={{ display: 'flex', alignItems: 'center', position: 'fixed', top: 18, right: 18, zIndex: 1002 }}>
          {showMusicMsg && (
            <span style={{ color: 'white', marginRight: 16, fontFamily: 'Gloria Hallelujah, cursive', fontSize: '1.1em', textShadow: '1px 1px 4px #000a', transition: 'opacity 0.5s' }}>
              ¡No olvides activar la música!
            </span>
          )}
          <div className={"mute-btn-container"} style={{ position: 'static' }}>
            <button className="mute-btn" onClick={toggleMute} aria-label={muted ? "Activar música" : "Mutear música"}>
              {muted ? (
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 7V13H7L12 18V2L7 7H3Z" stroke="#a14d4d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <line x1="15" y1="7" x2="19" y2="13" stroke="#a14d4d" strokeWidth="1.5" strokeLinecap="round"/>
                  <line x1="19" y1="7" x2="15" y2="13" stroke="#a14d4d" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 7V13H7L12 18V2L7 7H3Z" stroke="#a14d4d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M15 8C15.6667 8.66667 16 9.33333 16 10C16 10.6667 15.6667 11.3333 15 12" stroke="#a14d4d" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M17 6C18.3333 7.33333 19 8.66667 19 10C19 11.3333 18.3333 12.6667 17 14" stroke="#a14d4d" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              )}
            </button>
          </div>
        </div>
        {}
      </div>
      <div className="frames-container fade-in">
        {fotos.map((foto, idx) => (
          <PhotoFrame
            key={idx}
            src={foto.src}
            alt={foto.alt}
            mensaje={foto.mensaje}
            starred={[3, 5, 14, 15].includes(idx)}
          />
        ))}
      </div>
      {}
      <img src={muneco1} alt="Sticker Muñeco 1" className="sticker sticker-1 fade-in" />
      <img src={muneco2} alt="Sticker Muñeco 2" className="sticker sticker-2 fade-in" />
      <img src={snoopy1} alt="Snoopy corazón" className="snoopy snoopy-left fade-in" />
      <img src={snoopy2} alt="Snoopy abrazo" className="snoopy snoopy-right fade-in" />
      {}
      <img src={kitty1} alt="Kitty 1" className="kitty-sticker kitty-1 fade-in" />
      <img src={kitty2} alt="Kitty 2" className="kitty-sticker kitty-2 fade-in" />
    </div>
  );
}

export default App;
