document.addEventListener('DOMContentLoaded', () => {
  // DOM Elements
  const avatar = document.querySelector('.hero__avatar');
  const avatarFace = document.querySelector('.avatar__face');
  const leftEye = document.querySelector('.avatar__eye:first-child');
  const rightEye = document.querySelector('.avatar__eye:last-child');
  const leftPupil = leftEye.querySelector('.avatar__pupil');
  const rightPupil = rightEye.querySelector('.avatar__pupil');
  const leftEyebrow = leftEye.querySelector('.avatar__eyebrow');
  const rightEyebrow = rightEye.querySelector('.avatar__eyebrow');
  const smile = document.querySelector('.avatar__smile');
  
  // Animation settings
  const PUPIL_MOVEMENT_RANGE = 7; // Increased range for more dramatic movement
  const EYE_FOLLOW_SPEED = 0.12;  // Smoother tracking
  const EYEBROW_RAISE_DISTANCE = 5; // How much eyebrows raise
  
  // State
  let eyeX = 0, eyeY = 0;
  let targetEyeX = 0, targetEyeY = 0;
  let isHovered = false;
  let isSmiling = false;
  let lastSmileTime = 0;
  let lastBlinkTime = 0;
  
  // Get avatar's center position
  const getAvatarCenter = () => {
    const rect = avatar.getBoundingClientRect();
    return {
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2,
      width: rect.width,
      height: rect.height
    };
  };
  
  // Handle mouse movement
  const handleMouseMove = (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const now = Date.now();
    
    // Get avatar's center and dimensions
    const avatarCenter = getAvatarCenter();
    
    // Calculate angle and distance from avatar center to cursor
    const dx = mouseX - avatarCenter.x;
    const dy = mouseY - avatarCenter.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const angle = Math.atan2(dy, dx);
    
    // Calculate distance factor for expressions (0 when far, 1 when close)
    const expressionIntensity = 1 - Math.min(distance / 400, 1);
    
    // Update smile based on distance and interaction
    updateSmile(expressionIntensity);
    
    // Calculate eye look direction with dynamic intensity
    const lookIntensity = Math.min(1.5, distance / 60);
    const lookX = Math.cos(angle) * PUPIL_MOVEMENT_RANGE * lookIntensity;
    const lookY = Math.sin(angle) * PUPIL_MOVEMENT_RANGE * 0.7 * lookIntensity;
    
    // Random micro-expressions (occasional blinks, looks around)
    if (Math.random() < 0.002 && now - lastBlinkTime > 3000) {
      blink();
      lastBlinkTime = now;
    } else if (Math.random() < 0.001 && now - lastSmileTime > 5000) {
      // Random smile occasionally
      smile.classList.add('wide');
      setTimeout(() => smile.classList.remove('wide'), 1500);
      lastSmileTime = now;
    }
    
    // Smooth eye movement with easing
    eyeX += (lookX - eyeX) * EYE_FOLLOW_SPEED;
    eyeY += (lookY - eyeY) * EYE_FOLLOW_SPEED;
    
    // Update pupil positions with slight asymmetry for natural look
    if (leftPupil && rightPupil) {
      leftPupil.style.transform = `translate(calc(-50% + ${eyeX * 0.9}px), calc(-50% + ${eyeY * 0.9}px))`;
      rightPupil.style.transform = `translate(calc(-50% + ${eyeX * 0.9}px), calc(-50% + ${eyeY * 0.9}px))`;
    }
    
    // Update eyebrows based on expression
    const eyebrowRaise = expressionIntensity * EYEBROW_RAISE_DISTANCE;
    const eyebrowTilt = Math.sin(angle) * 5; // Slight tilt based on cursor angle
    
    if (leftEyebrow && rightEyebrow) {
      leftEyebrow.style.transform = `translateY(-${eyebrowRaise}px) rotate(${-5 - eyebrowTilt}deg)`;
      rightEyebrow.style.transform = `translateY(-${eyebrowRaise}px) rotate(${5 - eyebrowTilt}deg)`;
    }
    
    // Squint eyes slightly when smiling
    if (leftEye && rightEye) {
      const squintAmount = expressionIntensity * 0.7;
      if (squintAmount > 0.3) {
        leftEye.classList.add('squint');
        rightEye.classList.add('squint');
      } else {
        leftEye.classList.remove('squint');
        rightEye.classList.remove('squint');
      }
    }
    
    // Subtle head turn based on cursor position (more natural)
    const headTurn = (mouseX - avatarCenter.x) / 80; // Reduced head turn amount
    const headTilt = (mouseY - avatarCenter.y) / 120;
    
    // Slight head movement towards cursor
    const headMoveX = (mouseX - avatarCenter.x) / 100;
    const headMoveY = (mouseY - avatarCenter.y) / 200;
    
    avatarFace.style.transform = `
      perspective(1000px) 
      translate(${headMoveX}px, ${headMoveY}px)
      rotateY(${headTurn}deg) 
      rotateX(${-headTilt}deg)
    `;
    
    // Blink occasionally, more likely when moving fast
    if (Math.random() < 0.002) {
      blink();
    }
  };
  
  // Enhanced blink animation
  const blink = () => {
    const eyes = document.querySelector('.avatar__eyes');
    eyes.style.transition = 'transform 0.1s ease-out';
    eyes.style.transform = 'scaleY(0.05)';
    
    setTimeout(() => {
      eyes.style.transition = 'transform 0.2s cubic-bezier(0.2, 0.8, 0.6, 1.5)';
      eyes.style.transform = 'scaleY(1.1)';
      
      setTimeout(() => {
        eyes.style.transition = 'transform 0.1s ease-out';
        eyes.style.transform = 'scaleY(1)';
      }, 100);
    }, 80);
  };
  
  // Update smile based on distance factor (0 to 1)
  const updateSmile = (distanceFactor) => {
    // More dynamic smile with non-linear scaling
    const easedFactor = Math.pow(distanceFactor, 0.7); // Ease-out effect
    const smileWidth = 25 + (easedFactor * 35); // 25px to 60px
    const smileCurve = 40 + (easedFactor * 80); // 40% to 120% border radius
    const smileThickness = 2 + (easedFactor * 3); // 2px to 5px
    
    // Apply smile styles with smooth transitions
    smile.style.width = `${smileWidth}px`;
    smile.style.borderRadius = `${smileCurve}% ${smileCurve}% 0 0`;
    smile.style.borderBottom = `${smileThickness}px solid #000`;
    
    // Toggle smile class for more pronounced expressions
    const shouldSmile = distanceFactor > 0.3;
    if (shouldSmile !== isSmiling) {
      isSmiling = shouldSmile;
      if (isSmiling) {
        smile.classList.add('wide');
      } else {
        smile.classList.remove('wide');
      }
    }
    
    // Update hover state for interactive elements
    isHovered = distanceFactor > 0.4;
  };
  
  // Add hover effect on interactive elements
  const interactiveElements = document.querySelectorAll('a, button, .btn, [role="button"], input, textarea, select');
  
  const handleHover = () => {
    // Slightly enhance the current smile when hovering interactive elements
    const currentWidth = parseFloat(smile.style.width) || 20;
    smile.style.width = `${Math.min(currentWidth + 10, 40)}px`;
    smile.style.borderBottom = '3px solid #333';
  };
  
  const handleHoverOut = () => {
    // Return to distance-based smile when leaving interactive elements
    const currentWidth = parseFloat(smile.style.width) || 20;
    if (currentWidth > 30) {
      smile.style.width = `${currentWidth - 10}px`;
      smile.style.borderBottom = '2.5px solid #333';
    }
  };
  
  interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', handleHover);
    el.addEventListener('mouseleave', handleHoverOut);
  });
  
  // Initialize
  document.addEventListener('mousemove', handleMouseMove);
  
  // Auto-blink every few seconds
  setInterval(() => {
    if (Math.random() < 0.8) { // 80% chance to blink when triggered
      blink();
    }
  }, 3000);
});
