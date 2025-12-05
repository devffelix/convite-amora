import React, { useEffect, useRef } from 'react';

const HeartBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const hearts: Heart[] = [];
    const colors = ['#ff4d6d', '#ff8fa3', '#c9184a', '#ffb3c1'];

    class Heart {
      x: number;
      y: number;
      size: number;
      speedY: number;
      color: string;
      opacity: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = height + Math.random() * 100;
        this.size = Math.random() * 15 + 5;
        this.speedY = Math.random() * 1.5 + 0.5;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.opacity = Math.random() * 0.5 + 0.1;
      }

      update() {
        this.y -= this.speedY;
        if (this.y < -50) {
          this.y = height + 50;
          this.x = Math.random() * width;
        }
      }

      draw() {
        if (!ctx) return;
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        const topCurveHeight = this.size * 0.3;
        ctx.moveTo(this.x, this.y + topCurveHeight);
        // bezier curve for heart shape
        ctx.bezierCurveTo(
          this.x, this.y, 
          this.x - this.size / 2, this.y, 
          this.x - this.size / 2, this.y + topCurveHeight
        );
        ctx.bezierCurveTo(
          this.x - this.size / 2, this.y + (this.size + topCurveHeight) / 2, 
          this.x, this.y + (this.size + topCurveHeight) / 2, 
          this.x, this.y + this.size
        );
        ctx.bezierCurveTo(
          this.x, this.y + (this.size + topCurveHeight) / 2, 
          this.x + this.size / 2, this.y + (this.size + topCurveHeight) / 2, 
          this.x + this.size / 2, this.y + topCurveHeight
        );
        ctx.bezierCurveTo(
          this.x + this.size / 2, this.y, 
          this.x, this.y, 
          this.x, this.y + topCurveHeight
        );
        ctx.fill();
        ctx.globalAlpha = 1;
      }
    }

    const init = () => {
      for (let i = 0; i < 50; i++) {
        hearts.push(new Heart());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      hearts.forEach(heart => {
        heart.update();
        heart.draw();
      });
      requestAnimationFrame(animate);
    };

    init();
    animate();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
    />
  );
};

export default HeartBackground;