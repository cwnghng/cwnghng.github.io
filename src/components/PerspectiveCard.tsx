import React, { useCallback, useRef, useState } from 'react';
import './PerspectiveCard.css';

interface PerspectiveCardProps {
  maxAngle?: number,
  maxScale?: number,
  children: any,
}

const defaultProps = {
  maxAngle: 18,
  maxScale: 1.05,
};

function PerspectiveCard(props: PerspectiveCardProps) {
  const { maxAngle, maxScale, children } = props;

  const cardRef = useRef<HTMLInputElement>(null);
  const boundRef = useRef<HTMLInputElement>(null);

  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [scale, setScale] = useState(1);

  const calculateAngle = useCallback((offset: number, width: number): number => {
    const ratio = offset / (width / 2);
    return ratio * maxAngle!;
  }, [maxAngle]);

  const handleMouseMove = useCallback((e: any) => {
    const boundRect: DOMRect = boundRef.current!.getBoundingClientRect();

    const centerX = boundRect.left + (boundRect.width / 2);
    const centerY = boundRect.top + (boundRect.height / 2);

    setRotateX(calculateAngle(centerX - e.screenX, boundRect.width));
    setRotateY(calculateAngle(e.screenY - centerY, boundRect.height));
  }, [calculateAngle]);

  const handleMouseLeave = useCallback(() => {
    setRotateX(0);
    setRotateY(0);
    setScale(1);
  }, [calculateAngle]);

  return (
    <div
      style={{
        perspective: '1000px'
      }}
      ref={boundRef}
    >
      <div
        className="perspective-card h-full w-full transition-all"
        onMouseEnter={() => setScale(maxScale!)}
        onMouseMove={(e) => handleMouseMove(e)}
        onMouseLeave={() => handleMouseLeave()}
        style={{
          transform: `rotateX(${rotateY}deg) rotateY(${rotateX}deg) scale3d(${scale}, ${scale}, ${scale})`,
        }}
        ref={cardRef}
      >
        {children}
      </div>
    </div>
  );
}

PerspectiveCard.defaultProps = defaultProps;

export default PerspectiveCard;
