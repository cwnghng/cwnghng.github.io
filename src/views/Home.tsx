import React from 'react';
import PerspectiveCard from '../components/PerspectiveCard';

function Home() {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap">
        <PerspectiveCard />
        <PerspectiveCard />
        <PerspectiveCard />
        <PerspectiveCard />
        <PerspectiveCard />
        <PerspectiveCard />
        <PerspectiveCard />
        <PerspectiveCard />
      </div>
    </div>
  );
}

export default Home;
