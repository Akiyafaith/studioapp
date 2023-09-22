import React from 'react';
import './Landingpage.css';
import landing from './landing.jpg';

function LandingPage() {
  return (
    <div className="landing-page">
      <h1>Welcome to Our Studio Booking App</h1>
      <div className="image-container">
      <img 
      src={landing}
      alt=''
      className='center-image'
      /> 
    </div>
    <div className="studios-navigation">
        <h2>Explore Our Studios</h2>
        <p>Find the perfect studio for your creative projects.</p>
        <a href="/studios" className="cta-button">Explore Studios</a>
      </div>
    <p>Discover and Book the Perfect Studio Space</p>
    <p>Are you an artist, musician, or creative professional in need of the perfect studio space for your next project? Look no further! Studio App is your one-stop solution for finding, booking, and managing studio spaces effortlessly.</p>

      <h2>What Studio App Offers:</h2>
      
      <p><strong>Explore Diverse Studios:</strong> Browse through a wide variety of studio spaces tailored to different creative needs, from photography and music recording studios to art studios and more.</p>

      <p><strong>Streamlined Booking:</strong> Our user-friendly platform makes it easy to search for available studios, compare prices, and book your ideal space with just a few clicks.</p>

      <p><strong>Real-Time Availability:</strong> No more guessing or waiting for responses. Studio App provides real-time availability information, so you can secure your studio right when you need it.</p>

      <p><strong>Save Time and Hassle:</strong> Say goodbye to endless phone calls and emails. Studio App simplifies the entire booking process, so you can focus on what you do best—your art.</p>

      <p><strong>Secure and Reliable:</strong> Your payments and personal information are safeguarded with top-notch security measures, ensuring a worry-free booking experience.</p>

      <h2>Ready to Get Started?</h2>

      <p>Explore our studio listings now and find the perfect space for your next creative endeavor. Join the Studio App community today and take your projects to the next level.</p>

      <button className="cta-button">Get Started</button>

      <p><strong>Have questions?</strong> <a href="/contact">Contact Us</a> for assistance.</p>

      <p><strong>Studio App - Where Creativity Finds its Space</strong></p>
    </div>
  );
}


export default LandingPage;
