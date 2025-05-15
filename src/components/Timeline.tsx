import React from 'react';
import { Timeline } from '../types';
import { Heart } from 'lucide-react';

interface TimelineProps {
  milestones: Timeline[];
}

const TimelineComponent: React.FC<TimelineProps> = ({ milestones }) => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-rose-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Nuestro viaje juntos</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Cada momento contigo ha sido un recuerdo preciado en nuestra hermosa historia.</p>
        </div>
        
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-rose-200"></div>
          
          {milestones.map((milestone, index) => (
            <div 
              key={index} 
              className={`relative flex items-center mb-16 ${index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'}`}
            >
              <div className="w-1/2"></div>
              
              <div className="z-10 flex items-center justify-center">
                <div className="w-16 h-16 bg-white rounded-full border-4 border-rose-300 flex items-center justify-center shadow-lg">
                  <Heart className="h-8 w-8 text-rose-500 fill-rose-200" />
                </div>
              </div>
              
              <div 
                className={`w-1/2 p-6 rounded-lg shadow-md bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${
                  index % 2 === 0 ? 'text-right mr-8' : 'ml-8'
                }`}
              >
                <span className="inline-block px-4 py-1 rounded-full bg-rose-100 text-rose-600 text-sm font-medium mb-2">
                  {milestone.date}
                </span>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{milestone.title}</h3>
                <p className="text-gray-600">{milestone.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineComponent;