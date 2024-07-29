import React from 'react'
import '../Home.css'

const Home = () => {
 const features = [
    { id: 1, title: 'Feature 1', description: 'Description for feature 1' },
    { id: 2, title: 'Feature 2', description: 'Description for feature 2' },
    { id: 3, title: 'Feature 3', description: 'Description for feature 3' },
  ];

  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to Our Website!</h1>
        <p>Your one-stop solution for all your needs.</p>
      </header>

      <section className="home-intro">
        <h2>Introduction</h2>
        <p>
          We are committed to providing the best services to our customers.
          Our platform offers a wide range of features designed to help you
          achieve your goals.
        </p>
      </section>

      <section className="home-features">
        <h2>Features</h2>
        <ul>
          {features.map(feature => (
            <li key={feature.id} className="feature-item">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};


export default Home
