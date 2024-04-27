import React from 'react';
import { FaAngleDown } from 'react-icons/fa';
import Button from '../components/Button';
import heroImgSvg from '../assets/images/hero-img.svg';
import laptop1Svg from '../assets/images/laptop1.svg';
import laptop2Svg from '../assets/images/laptop2.svg';
import starsSvg from '../assets/images/stars.svg';
import womanSvg from '../assets/images/woman.svg';
import plusSvg from '../assets/images/plusIcon.svg';
import socialSvg from '../assets/images/socialmedia.svg';
import manSvg from '../assets/images/man.svg';
import appSvg from '../assets/images/app.svg';
import minusSvg from '../assets/images/minusIcon.svg';
import promptSvg from '../assets/images/prompt.svg';
import promptMobileSvg from '../assets/images/prompt_mobile.svg';
import logoSvg from '../assets/images/logo.svg';
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
              <span><strong>Jenny Wilson</strong></span>
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
              <span><strong>Devon Lane</strong></span>
              <br />
              <span>Medical Specialist</span>
            </div>
          </div>
        </div>
      </section>
      <section className="faqSection m-5">
        <h2>Frequently Asked Questions</h2>
        <p className="mb-4">Everything you need to know about the product and billing.</p>
        <div className="faqDiv">
          <div className="d-flex justify-content-between align-items-center">
            <p className="w-75"><strong>What resources are available on Check Me Patient?</strong></p>
            <div className="w-25 d-flex justify-content-end"><img src={minusSvg} alt="Minus icon" /></div>
          </div>
          <p>
            Check Me Patient offers a variety of educational resources, articles,
            and videos to help you learn more about breast cancer, treatment options,
            and supportive care.
          </p>
          <hr />
          <div className="d-flex justify-content-between align-items-center">
            <p className="w-75"><strong>Is my personal health information safe on Check Me Patient?</strong></p>
            <div className="w-25 d-flex justify-content-end"><img src={plusSvg} alt="Plus Icon" /></div>
          </div>
          <hr />
          <div className="d-flex justify-content-between align-items-center">
            <p className="w-75"><strong>Is my patient data secure on Check Me Specialist?</strong></p>
            <div className="w-25 d-flex justify-content-end"><img src={plusSvg} alt="Plus Icon" /></div>
          </div>
          <hr />
          <div className="d-flex justify-content-between align-items-center">
            <p className="w-75"><strong>How can I schedule appointments with healthcare providers?</strong></p>
            <div className="w-25 d-flex justify-content-end"><img src={plusSvg} alt="Plus Icon" /></div>
          </div>
          <hr />
          <div className="d-flex justify-content-between align-items-center">
            <p className="w-75"><strong>Can I track my treatment progress and medications on Check Me Patient?</strong></p>
            <div className="w-25 d-flex justify-content-end"><img src={plusSvg} alt="Plus Icon" /></div>
          </div>
          <hr />
          <div className="d-flex justify-content-between align-items-center">
            <p className="w-75"><strong>How do I join the Check Me Specialist network?</strong></p>
            <div className="w-25 d-flex justify-content-end"><img src={plusSvg} alt="Plus Icon" /></div>
          </div>
        </div>

      </section>
      <section>
        <img className="w-100 d-none d-md-block" src={promptSvg} alt="Care section" />
        <img className="w-100 d-md-none" src={promptMobileSvg} alt="Care section" />
      </section>
      <section className="footer-one d-none d-md-flex justify-content-between align-items-center m-5">
        <div className="w-50 d-flex flex-column align-items-start">
          <div><img src={logoSvg} alt="Logo" /></div>
          <div className="d-flex justify-content-between w-100 m-2">
            <p>Home</p>
            <p>About</p>
            <p>Services</p>
            <p>Blog</p>
            <p>Careers</p>
            <p>Contact Us</p>
          </div>
        </div>
        <div className="w-25 d-flex flex-column align-items-start">
          <p className="text-left">Download the app</p>
          <div><img src={appSvg} alt="App" /></div>
        </div>
      </section>
      <section className="footer-one d-md-none m-5">
        <div className="w-100">
          <div><img src={logoSvg} alt="Logo" /></div>
          <div className="d-flex justify-content-between w-100 mt-3">
            <p>Home</p>
            <p>About</p>
            <p>Services</p>
          </div>
          <div className="d-flex justify-content-between w-100">
            <p>Blog</p>
            <p>Careers</p>
            <p>Contact Us</p>
          </div>
        </div>
        <div className="w-100 d-flex flex-column align-items-start mt-4">
          <p className="w-100">Download the app</p>
          <div className="w-100"><img src={appSvg} alt="App" /></div>
        </div>
      </section>
      <hr />
      <section className="d-md-flex justify-content-between align-items-center m-5">
        <div><img src={socialSvg} alt="Social Media Icons" /></div>
        <div className="d-flex d-md-none w-100 justify-content-between my-3">
          <p>Terms of Services</p>
          <p>Privacy Policy</p>
        </div>
        <div className="d-none d-md-flex w-25 justify-content-between">
          <p>Terms of Services</p>
          <p>Privacy Policy</p>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
