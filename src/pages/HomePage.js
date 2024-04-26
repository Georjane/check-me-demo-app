import React from 'react';
import { FaAngleDown } from 'react-icons/fa';
import Button from '../components/Button';
import '../assets/css/Homepage.css';

function HomePage() {
  return (
    <div className="hero-section py-5">
      <h1 className="hero-h1 w-50 m-auto d-none d-md-block">
        Transforming
        <span className="hero-span"> Breast Cancer Care</span>
        , One Patient at a Time
      </h1>
      <h1 className="hero-h1 m-auto px-4 d-block d-md-none">
        Transforming
        <span className="hero-span"> Breast Cancer Care</span>
        , One Patient at a Time
      </h1>
      <p className="hero-para  w-50 m-auto py-3 px-5 d-none d-md-block">
        Check Me mobile app connects patients
        and doctors for seamless communication, effortless appointment management,
        and a more empowered healthcare experience.
      </p>
      <p className="hero-para  py-3 m-auto px-4 d-block d-md-none">
        Check Me mobile app connects patients
        and doctors for seamless communication, effortless appointment management,
        and a more empowered healthcare experience.
      </p>
      <div className="hero-btn py-2">
        <Button type="default" text="Our Services" />
        <Button type="text-icon" text="Contact Us" icon={<FaAngleDown />} />
      </div>
    </div>
  );
}

export default HomePage;
