import React from 'react';
import { Heart, Music } from 'lucide-react';

interface FooterProps {
  isMusicPlaying: boolean;
  toggleMusic: () => void;
}

const Footer: React.FC<FooterProps> = ({ isMusicPlaying, toggleMusic }) => {
  return (
    <footer className="py-8 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="flex items-center">
              Echo con <Heart className="h-4 w-4 mx-1 text-rose-500 fill-rose-500" /> para ti Maria
            </p>
          </div>
          
          <div className="flex items-center">
            <button 
              onClick={toggleMusic}
              className={`flex items-center px-4 py-2 rounded-full transition-colors ${
                isMusicPlaying ? 'bg-rose-600 hover:bg-rose-700' : 'bg-gray-700 hover:bg-gray-600'
              }`}
            >
              <Music className="h-4 w-4 mr-2" />
              <span>{isMusicPlaying ? 'Pause Musica' : 'Play Musica'}</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;