import React from 'react'
import '../App.css'

const Beddings = () => {
  
    const beddings = [
    { id: 1, name: 'Cotton Sheets', description: 'Soft and breathable cotton sheets.' },
    { id: 2, name: 'Silk Pillowcases', description: 'Smooth and luxurious silk pillowcases.' },
    { id: 3, name: 'Down Comforter', description: 'Warm and fluffy down comforter.' },
  ];

  return (
    <div className="beddings-container">
      <h1>Beddings</h1>
      <ul>
        {beddings.map(bedding => (
          <li key={bedding.id}>
            <h2>{bedding.name}</h2>
            <p>{bedding.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Beddings
