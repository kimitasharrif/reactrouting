import React from 'react'

const Fruits = () => {
  const fruits = [
    { id: 1, name: 'Apple', description: 'A sweet, edible fruit produced by an apple tree.' },
    { id: 2, name: 'Banana', description: 'An elongated, edible fruit produced by several kinds of large herbaceous flowering plants.' },
    { id: 3, name: 'Cherry', description: 'A small, round stone fruit that is typically bright or dark red.' },
  ];

  return (
    <div className="fruits-container">
      <h1>Fruits</h1>
      <ul>
        {fruits.map(fruit => (
          <li key={fruit.id}>
            <h2>{fruit.name}</h2>
            <p>{fruit.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Fruits
