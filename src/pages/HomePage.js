import React from 'react';
import { FaAngleDown } from 'react-icons/fa';
import Button from '../components/Button';
import heroImgSvg from '../assets/images/hero-img.svg';
import laptop1Svg from '../assets/images/laptop1.svg';
import '../assets/css/Homepage.css';

function HomePage() {
  return (
    <div>
      <section className="hero-section py-5">
        <h1 className="hero-h1 w-50 m-auto d-none d-md-block">
          Transforming
          <span className="hero-span"> Breast Cancer Care</span>
          , One Patient at a Time
        </h1>
        <h1 className="hero-h1 m-auto px-4 d-block d-md-none">
          Transforming
          <span className="pink-text"> Breast Cancer Care</span>
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
      </section>
      <div className="img-div"><img className="hero-img" src={heroImgSvg} alt="Hero" /></div>
      <section className="d-md-flex about-section">
        <div className="about-div">
          <h6>ABOUT CHECKME</h6>
          <h2 className="">
            Founded on Love, Loss, and a Commitment to
            <span className="pink-text"> Empower Patients and Specialists</span>
            .
          </h2>
        </div>
        <div className="d-none d-md-block vertical-line" />
        <div className="about-div">
          <p>
            Check Me is more than a platform—it&apos;s a promise. A promise to honor a
            sister&apos;s legacy, to uplift those affected by breast cancer,
            and to support patients and specialists every step of the way.
            Our purpose is to ensure that no one faces breast cancer alone.
            {' '}
          </p>
          <div className="d-flex w-100 justify-content-between">
            <div>
              <h2>100+</h2>
              <p>Active Users</p>
            </div>
            <div>
              <h2>1k+</h2>
              <p>Medical Specialists</p>
            </div>
            <div>
              <h2>100%</h2>
              <p>Free for Patients</p>
            </div>
          </div>
          <Button color="white" type="text-icon" text="Read More" icon={<FaAngleDown />} />
        </div>
      </section>
      <section className="app-section d-md-flex">
        <div className="order-2 app-section-div">
          <h6>CHECK FOR BREAST CANCER WARRIORS</h6>
          <h2>Your Personalized Breast Cancer Hub</h2>
          <p>
            Join Check Me Patient on the web and mobile to Access Support,
            Resources, and Expert Guidance. Some key features include:
          </p>
          <ul>
            <li> Access personalized support tailored to your unique needs and preferences.</li>
            <li>Locate and navigate to the nearest healthcare facilities.</li>
            <li>
              Easily schedule and manage appointments with healthcare providers,
              ensuring timely access to care.
            </li>
          </ul>
          <Button type="text-icon" text="Read More" icon={<FaAngleDown />} />

        </div>
        <div className="app-section-div"><img className="laptop" src={laptop1Svg} alt="laptop" /></div>
      </section>
    </div>
  );
}

export default HomePage;
