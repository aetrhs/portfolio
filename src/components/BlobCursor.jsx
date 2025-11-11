import { useEffect, useRef } from 'react';

function BlobCursor() {
  const blobRef = useRef(null);

  useEffect(() => {
    const blob = blobRef.current;
    if (!blob) return;

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      
      blob.animate([
        { 
          left: `${clientX}px`, 
          top: `${clientY}px` 
        }
      ], { 
        duration: 3000, 
        fill: 'forwards' 
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={blobRef}
      className="fixed w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full pointer-events-none z-50 mix-blend-difference"
      style={{
        transform: 'translate(-50%, -50%)',
        filter: 'blur(1px)',
      }}
    />
  );
}

export default BlobCursor;