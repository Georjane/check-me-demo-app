import React from 'react';
import { FaAngleDown } from 'react-icons/fa';
import Button from '../components/Button';
import '../assets/css/Homepage.css';

function HomePage() {
  return (
    <div>
      <h1 className="hero-h1">Transforming Breast Cancer Care, One Patient at a Time</h1>
      <p className="hero-para">
        Check Me mobile app connects patients
        and doctors for seamless communication, effortless appointment management,
        and a more empowered healthcare experience.
      </p>
      <div className="hero-btn">
        <Button type="default" text="Our Services" />
        <Button type="text-icon" text="Contact Us" icon={<FaAngleDown />} />
      </div>
    </div>
  );
}

export default HomePage;
