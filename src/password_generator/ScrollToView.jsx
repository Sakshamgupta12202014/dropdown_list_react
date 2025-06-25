import React, { useRef } from 'react';

function ScrollToView() {
  const sectionRef = useRef(null);

  const handleScroll = () => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <button onClick={handleScroll}>Go to Section</button>

      <div style={{ height: '600px' }}></div> {/* Spacer for scroll */}

      <div
        ref={sectionRef}
        style={{
          height: '200px',
          backgroundColor: '#f2a',
          padding: '20px',
          borderRadius: '10px',
        }}
      >
        🎯 This is the section we scrolled to!
      </div>
    </div>
  );
}

export default ScrollToView
