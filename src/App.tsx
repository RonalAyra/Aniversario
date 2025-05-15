import React, { useEffect, useState } from 'react';
import Hero from './components/Hero';
import TimelineComponent from './components/Timeline';
import Gallery from './components/Gallery';
import LoveMessage from './components/LoveMessage';
import Countdown from './components/Countdown';
import Footer from './components/Footer';
import { timelineData, photos, message } from './data/anniversaryData';
import { addMouseHeartEffect, addAnimationStyles } from './utils/animations';

function App() {
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  
  // Set anniversary date (adjust as needed)
  const anniversaryDate = new Date();
  anniversaryDate.setHours(anniversaryDate.getHours() + 24); // Example: 24 hours from now
  
  useEffect(() => {
    // Set page title
    document.title = "Feliz Aniversario, Mi Amor";
    
    // Add custom animations
    addAnimationStyles();
    addMouseHeartEffect();
    
    // Create audio element
    const bgMusic = new Audio('https://www.youtube.com/watch?v=St6d4QK8GIU');
    bgMusic.loop = true;
    bgMusic.volume = 0.4;
    setAudio(bgMusic);
    
    // Update favicon
    const link = document.querySelector("link[rel='icon']") as HTMLLinkElement;
    if (link) {
      link.href = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%23F43F5E"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>';
    }
    
    return () => {
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
    };
  }, []);
  
  const toggleMusic = () => {
    if (!audio) return;
    
    if (isMusicPlaying) {
      audio.pause();
    } else {
      audio.play().catch(error => {
        console.error("Audio playback failed:", error);
      });
    }
    
    setIsMusicPlaying(!isMusicPlaying);
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Hero />
      <TimelineComponent milestones={timelineData} />
      <Gallery photos={photos} />
      <LoveMessage title={message.title} content={message.content} />
      <Countdown targetDate={anniversaryDate} />
      <Footer isMusicPlaying={isMusicPlaying} toggleMusic={toggleMusic} />
    </div>
  );
}

export default App;