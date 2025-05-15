import React, { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';
import banner from '../assets/banner.jpg';
const Hero: React.FC = () => {
  const [offset, setOffset] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{
          backgroundImage: `url(${banner})`,
          transform: `translateY(${offset * 0.5}px)`,
          filter: 'brightness(0.7)'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-rose-500/30 to-purple-900/50 z-10" />
      
      <div className="relative flex flex-col items-center justify-center h-full text-center px-4 z-20">
        <div className="flex items-center mb-6 animate-fade-in">
          <Heart className="text-white h-8 w-8 mr-2 fill-rose-500 stroke-rose-500" />
          <h2 className="text-2xl md:text-3xl font-light text-white tracking-wider">Feliz Aniversario</h2>
          <Heart className="text-white h-8 w-8 ml-2 fill-rose-500 stroke-rose-500" />
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-tight leading-tight">
          Nuestra Historia de<span className="text-rose-300"> Amor</span><br />
          Ronal y<span className="text-rose-300"> Maria</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
          Celebrando otro hermoso año de amor, risas y crecimiento juntos.
        </p>
        
        <div className="flex space-x-4">
          <button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-8 py-3 rounded-full transition duration-300 border border-white/40">
            Nuestro viaje
          </button>
          <button className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-3 rounded-full transition duration-300">
            Carta de Amor
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce z-20">
        <div className="w-10 h-10 rounded-full border-2 border-white/50 flex items-center justify-center">
          <div className="w-2 h-4 bg-white/70 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;