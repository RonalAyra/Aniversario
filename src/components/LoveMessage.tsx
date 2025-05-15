import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';

interface MessageProps {
  title: string;
  content: string;
}

const LoveMessage: React.FC<MessageProps> = ({ title, content }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [heartPosition, setHeartPosition] = useState<{ x: number, y: number }[]>([]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    const element = document.getElementById('love-message');
    if (element) observer.observe(element);
    
    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);
  
  useEffect(() => {
    // Create random floating hearts
    const positions = Array.from({ length: 15 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100
    }));
    
    setHeartPosition(positions);
  }, []);

  const paragraphs = content.split('\n\n').filter(p => p.trim());
  
  return (
    <section className="py-24 bg-gradient-to-b from-purple-50 to-rose-100 relative overflow-hidden">
      {/* Floating hearts */}
      {heartPosition.map((pos, idx) => (
        <div 
          key={idx}
          className="absolute opacity-40"
          style={{
            left: `${pos.x}%`,
            top: `${pos.y}%`,
            animation: `float ${3 + Math.random() * 5}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 5}s`
          }}
        >
          <Heart 
            size={10 + Math.random() * 24} 
            className="text-rose-300 fill-rose-300" 
          />
        </div>
      ))}
      
      <div className="container mx-auto px-4">
        <div 
          id="love-message"
          className={`max-w-3xl mx-auto bg-white/80 backdrop-blur-sm rounded-lg shadow-xl p-8 md:p-12 transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="flex justify-center mb-8">
            <div className="h-0.5 w-24 bg-rose-300"></div>
          </div>
          
          <h2 className="text-3xl md:text-4xl text-center font-serif font-bold text-gray-800 mb-8">
            {title}
          </h2>
          
          <div className="space-y-6 text-gray-700 leading-relaxed">
            {paragraphs.map((paragraph, index) => (
              <p 
                key={index} 
                className={`transition-all duration-1000 delay-${index * 300} ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                {paragraph}
              </p>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <div className="inline-block">
              <Heart className="h-8 w-8 mx-auto mb-2 text-rose-500 fill-rose-400" />
              <p className="text-rose-500 font-medium">Siempre juntos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoveMessage;