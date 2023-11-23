import React from 'react'
import about from "../../assets/images/about.png"
import aboutCardImg from "../../assets/images/about-card.png"
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section>
        <div className="container">
            <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
                {/* About Img */}
                <div className='relative w3/4 lg:w-1/2 xl:w-[770px] order-2 lg:order-1'>
                    <img src={about} alt="" />
                    <div className='absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%]'>
                        <img src={aboutCardImg} alt="" />
                    </div>
                </div>

                {/* ___About Desc____ */}

                <div className='w-full lg:w-1/2 order-1 lg:order-2 xl:w-[670px]'>
                    <h2 className='heading'>Proud to be one of the nations best</h2>
                    <p className='para'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta laudantium repudiandae quos, id exercitationem saepe nisi autem accusantium, voluptate inventore blanditiis magnam, nostrum vero alias temporibus fugit facere illum ut.</p>
                    <p  className='para mt-[30px]'>Lorem ipsum dolor sit amet conse xl:w-[670px]ctetur adipisicing elit. Fuga exercitationem reiciendis omnis maiores pariatur porro voluptatem tempore obcaecati accusantium ut amet cumque excepturi, quam, quod aliquam recusandae, saepe reprehenderit ipsam.</p>

                    <Link to={"/"}>
                    <button className='btn'>Learn more</button>
                    </Link>
                </div>


            </div>
        </div>
    </section>
  )
}

export default About