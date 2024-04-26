import React from 'react';
import { FaAngleDown } from 'react-icons/fa';
import Button from '../components/Button';
import heroImgSvg from '../assets/images/hero-img.svg';
import laptop1Svg from '../assets/images/laptop1.svg';
import laptop2Svg from '../assets/images/laptop2.svg';
import starsSvg from '../assets/images/stars.svg';
import womanSvg from '../assets/images/woman.svg';
import manSvg from '../assets/images/man.svg';
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
            <li>Access personalized support tailored to your unique needs and preferences.</li>
            <li>Locate and navigate to the nearest healthcare facilities.</li>
            <li>
              Easily schedule and manage appointments with healthcare providers,
              ensuring timely access to care.
            </li>
          </ul>
          <Button type="text-icon" text="Read More" icon={<FaAngleDown />} />

        </div>
        <div className="app-section-div">
          <img className="laptop" src={laptop1Svg} alt="laptop" />
          <div className="pink-shadow pink2 d-none d-md-block" />
        </div>
      </section>
      <section className="app-section d-md-flex">
        <div className="app-section-div">
          <h6>CHECKME FOR MEDICAL SPECIALISTS</h6>
          <h2>Elevate Your Practice with Check Me Specialist.</h2>
          <p>
            Join Check Me Specialist on the web and mobile to revolutionize the way
            you provide care and collaborate with colleagues. Some key features include:
          </p>
          <ul>
            <li>Schedule, reschedule, and manage appointments efficiently.</li>
            <li>Secure Communication with Patients.</li>
            <li>Eliminate paper prescriptions &  streamline medication management.</li>
          </ul>
          <Button type="text-icon" text="Read More" icon={<FaAngleDown />} />

        </div>
        <div className="app-section-div">
          <img className="laptop" src={laptop2Svg} alt="laptop" />
          <div className="pink-shadow d-none d-md-block" />
        </div>
      </section>
      <section className="testimonials">
        <p className="pink-text">500+ Happy CheckMe Users</p>
        <h2>Don&apos;t just take our words</h2>
        <div className="m-5 d-md-flex justify-content-between">
          <div className="d-flex align-items-center w-100 py-2">
            <img className="testinmonial-img w-50 d-md-none" src={womanSvg} alt="Woman" />
            <img className="testinmonial-img d-none d-md-block" src={womanSvg} alt="Woman" />
            <div className="testinmonial-div">
              <img src={starsSvg} alt="Review Stars" />
              <p>
                “The personalized support and guidance I&apos;ve received
                have made all the difference in my recovery. I&apos;m grateful
                for Check Me team.”
              </p>
              <span>Jenny Wilson</span>
              <br />
              <span>Breast Cancer Warrior</span>
            </div>
          </div>
          <div className="d-flex w-100 align-items-center py-2">
            <img className="testinmonial-img w-50 d-md-none" src={manSvg} alt="Man" />
            <img className="testinmonial-img d-none d-md-block" src={manSvg} alt="Man" />
            <div className="testinmonial-div">
              <img src={starsSvg} alt="Review Stars" />
              <p>
                “The platform&apos;s intuitive interface and comprehensive features
                allowing me to provide the highest quality care to my patients.”
              </p>
              <p>Devon Lane</p>
              <p>Medical Specialist</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
