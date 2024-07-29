import React from 'react'
import '../App.css'

const Players = () => {
  const players = [
    { id: 1, name: 'Lionel Messi', sport: 'Soccer' },
    { id: 2, name: 'LeBron James', sport: 'Basketball' },
    { id: 3, name: 'Roger Federer', sport: 'Tennis' },
  ];

  return (
    <div className="players-container">
      <h1>Players</h1>
      <ul>
        {players.map(player => (
          <li key={player.id}>
            <h2>{player.name}</h2>
            <p>{player.sport}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Players
