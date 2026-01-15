import React from 'react';
import Season from './Season';
import './styles/global.css';

function Seasons() {
  const seasons = [
    { id: 1, name: '20-21' },
    { id: 2, name: '21-22' },
    { id: 3, name: '22-23' },
  ];

  return (
    <div className="seasons">
      <h1>Select a Season</h1>
      <ul>
        {seasons.map(season => (
          <Season key={season.id} season={season} />
        ))}
      </ul>
    </div>
  );
}

export default Seasons;