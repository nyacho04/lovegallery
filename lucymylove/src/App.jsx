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
import './App.css';

const fotos = [
  { src: foto1, alt: 'Foto 1' },
  { src: foto2, alt: 'Foto 2' },
  { src: foto3, alt: 'Foto 3' },
  { src: foto4, alt: 'Foto 4' },
  { src: foto5, alt: 'Foto 5' },
  { src: foto6, alt: 'Foto 6' },
  { src: foto7, alt: 'Foto 7' },
  { src: foto8, alt: 'Foto 8' },
  { src: foto9, alt: 'Foto 9' },
  { src: foto10, alt: 'Foto 10' },
  { src: foto11, alt: 'Foto 11' },
];

function App() {
  return (
    <div className="collage-layout">
      <div className="penguin-center">
        <img src={penguin} alt="Pinguino saludando" className="penguin-img" />
        <div className="speech-bubble">¡Hola Lucy! Hoy es un gran día para sonreír :)</div>
      </div>
      <div className="frames-container">
        {fotos.map((foto, idx) => (
          <PhotoFrame key={idx} src={foto.src} alt={foto.alt} />
        ))}
      </div>
      {/* Stickers decorativos */}
      <img src={muneco1} alt="Sticker Muñeco 1" className="sticker sticker-1" />
      <img src={muneco2} alt="Sticker Muñeco 2" className="sticker sticker-2" />
      <img src={snoopy1} alt="Snoopy corazón" className="snoopy snoopy-left" />
      <img src={snoopy2} alt="Snoopy abrazo" className="snoopy snoopy-right" />
    </div>
  );
}

export default App;
