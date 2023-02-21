import React from 'react';
import PerspectiveCard from '../components/PerspectiveCard';

function Home() {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap">
        <PerspectiveCard>
          <div className="bg-red-500 h-60 w-60 flex flex-col justify-center items-center text-center p-4 rounded-xl">
            <div className="font-bold">Perspective Card</div>
            <div>Tilts where the mouse moves</div>
          </div>
        </PerspectiveCard>
      </div>
    </div>
  );
}

export default Home;
