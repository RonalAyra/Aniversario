export const addMouseHeartEffect = () => {
  if (window.innerWidth < 768) return; // Only add on desktop
  
  const createHeart = (x: number, y: number) => {
    const heart = document.createElement('div');
    heart.className = 'heart-cursor';
    heart.innerHTML = `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" 
        fill="#F43F5E" stroke="#F43F5E" />
    </svg>`;
    
    document.body.appendChild(heart);
    
    // Position the heart
    heart.style.left = `${x}px`;
    heart.style.top = `${y}px`;
    
    // Animate and remove the heart
    setTimeout(() => {
      heart.style.transform = `translateY(-80px) scale(0)`;
      heart.style.opacity = '0';
      
      setTimeout(() => {
        document.body.removeChild(heart);
      }, 1000);
    }, 50);
  };
  
  // Add mouse move listener
  let throttled = false;
  document.addEventListener('mousemove', (e) => {
    if (throttled) return;
    throttled = true;
    
    setTimeout(() => {
      createHeart(e.clientX, e.clientY);
      throttled = false;
    }, 150);
  });
  
  // Add CSS for the heart
  const style = document.createElement('style');
  style.textContent = `
    .heart-cursor {
      position: fixed;
      width: 20px;
      height: 20px;
      pointer-events: none;
      z-index: 10000;
      transition: transform 1s ease, opacity 1s ease;
    }
  `;
  document.head.appendChild(style);
};

export const addAnimationStyles = () => {
  const style = document.createElement('style');
  style.textContent = `
    @keyframes float {
      0% {
        transform: translateY(0px);
      }
      50% {
        transform: translateY(-20px);
      }
      100% {
        transform: translateY(0px);
      }
    }
    
    @keyframes pulse {
      0% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.05);
      }
      100% {
        transform: scale(1);
      }
    }
    
    .animate-fade-in {
      animation: fadeIn 1.5s ease-out forwards;
    }
    
    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(-20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `;
  document.head.appendChild(style);
};