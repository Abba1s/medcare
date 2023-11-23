import React from "react";
import { Link } from "react-router-dom";
import HeroImg from "../../assets/images/hero-img01.png";
import HeroImg2 from "../../assets/images/hero-img02.png";
import HeroImg3 from "../../assets/images/hero-img03.png";
import featureImg from "../../assets/images/feature-img.png";
import faqpic from "../../assets/images/faq-img.png";
import v_icon from "../../assets/images/video-icon.png";
import About from "../../components/about/About";
import ServiceList from "../../components/services/ServiceList";
import MedSection from "../../components/medsection/MedSection";
import DoctorList from "../../components/doctorsList/DoctorList";
import FaqList from "../../components/faq/FaqList";
import Testimonial from "../../components/testimonial/Testimonial";

const Home = () => {
  return (
    <>
      <section className="hero_section pt-[60px] 2xl:h-[800px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-around">
            {/* _____Hero part____ */}
            <div>
              <div className="lg:w-[570px]">
                <h1 className="text-[36px] leading-[46px] text-textColor font-[800] md:text-[60px] md:leading-[70px]">
                  We helps patients live a healthy, longer life
                </h1>
                <p className="para">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptates, nulla necessitatibus, dignissimos natus esse enim
                  aut corrupti, aperiam repudiandae vel vero ab sequi dolore cum
                  dolorem! Rerum voluptatum dicta inventore omnis totam repellat
                  maiores.
                </p>
                <button className="btn"> Request an Appointment</button>
              </div>
              {/* ___________hero Counter_____ */}

              <div className="flex flex-col lg:flex-row lg:items-center gap-5 mt-[30px] lg:mt-[70px] lg:gap-[30px]">
                <div className="flex-1">
                  <h2 className="text-[36px] leading-[54px] lg:text-[44px] lg:leading-[54px] font-[700]">
                    25+
                  </h2>
                  <span className="w-[100px] bg-yellowColor rounded-full h-2 mt-[-14px] block"></span>
                  <p className="para">Years of experience</p>
                </div>
                <div className="flex-1">
                  <h2 className="text-[36px] leading-[54px] lg:text-[44px] lg:leading-[54px] font-[700]">
                    10+
                  </h2>
                  <span className="w-[100px] bg-purpleColor rounded-full h-2 mt-[-14px] block"></span>
                  <p className="para">Clinic Location</p>
                </div>
                <div className="flex-1">
                  <h2 className="text-[36px] leading-[54px] lg:text-[44px] lg:leading-[54px] font-[700]">
                    100%
                  </h2>
                  <span className="w-[100px] bg-irisBlueColor rounded-full h-2 mt-[-14px] block"></span>
                  <p className="para">Patients Satisfaction</p>
                </div>
              </div>
            </div>

            {/* Hero  Img section */}

            <div className="flex gap-[30px] justify-end">
              <figure>
                <img className="w-full" src={HeroImg} alt="Hero-Image" />
              </figure>

              <div className="mt-[30px]">
                <img className=" mb-[25px]" src={HeroImg2} alt="Hero-Image" />
                <img src={HeroImg3} alt="Hero-Image" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* _______Hero End_____ */}
      <section>
        <div className="container">
          <div className="lg:w-[470px] mx-auto">
            <h2 className="heading text-center">
              Providing the best medical services
            </h2>
            <p className="para text-center">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam
              molestias id Architecto.
            </p>
          </div>
          <MedSection />
        </div>
      </section>
      {/* ____About_____ */}

      <About />

      {/* Services */}

      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Our medical services</h2>
            <p className="para text-center">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus,
              inventore laboriosam illo error praesentium earum.
            </p>
          </div>

          <ServiceList />
        </div>
      </section>

      {/* _____Feature_____ */}

      <section>
        <div className="container">
          <div className="flex items-center justify-between flex-col lg:flex-row">
            {/* Left */}

            <div className="xl:w-[670px]">
              <h2 className="heading">
                Get virtual treatment <br />
                anytime
              </h2>
              <ul className="pl-4">
                <li className="para">1. Schedule the appointment directly</li>
                <li className="para">2. Search for your physician here</li>
                <li className="para">
                  2. dule the appointment di dule the appointment di Search for
                  your physician dule the appointment di dule the appointment di
                  here
                </li>
              </ul>
              <Link to={"/"}>
                <button className="btn">Learn more</button>
              </Link>
            </div>

            {/* Right */}

            <div className="relative z-10 flex justify-end mt-[50px] lg:mt-0 xl:w-[770px]">
              <img className="w-3/4" src={featureImg} alt="" />

              <div className="absolute left-0 bottom-[50px] md:bottom-[100px] md:left-5 p-2 pb-3 z-30 w-[150px] lg:w-[248px] bg-white lg:pt-4 lg:px-4 rounded-[10px] lg:pb-[26px]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-[6px] lg:gap-3">
                    <p className="text-[10px] leading-[10px] lg:text[14px] lg:leading-5 text-headingColor font-[600]">
                      Tue 24
                    </p>
                    <p className="text-[10px] leading-[10px] lg:text[14px] lg:leading-5 text-textColor font-[500]">
                      10:00 AM
                    </p>
                  </div>
                  <span className="flex items-center justify-center w-5 h-5 lg:w-[34px] lg:h-[34px] bg-yellowColor rounded py-1 px-1 lg:py-3 lg:px-2">
                    <img src={v_icon} alt="" />
                  </span>
                </div>

                <div className="w-[65px] lg:w-[96px]">Consultation</div>
                <div>PIC</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* FEATURE END */}

      {/* DOCTORS */}

      <section>
        <div className="container">
          <div className="lg:w-[470px] mx-auto">
            <h2 className="heading text-center">Our Doctors</h2>
            <p className="para text-center">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam
              molestias id Architecto. dolor sit amet consectetur adipisicing
              elit. Numquam molestias id Architecto.
            </p>
          </div>
        </div>
        <DoctorList />
      </section>

      {/* FAQ Section */}
      <section>
        <div className="container flex items-center justify-between">
          {/* Left side */}
          <div className="">
            <img className="w-full" src={faqpic} alt="pic" />
          </div>
          {/* right */}
          <div className="w-1/2">
            <h2 className="heading mb-3">
              Most questions by our beloved patients
            </h2>
            <FaqList />
          </div>
        </div>
      </section>
      {/* ___________Testimonial___________________ */}
      <section>
        <div className="container">
          <div className="lg:w-[470px] mx-auto">
            <h2 className="heading text-center">What our patient say</h2>
            <p className="para text-center">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam
              molestias id Architecto. dolor sit
            </p>
          </div>
          <Testimonial/>
        </div>

      </section>
    </>
  );
};

export default Home;
