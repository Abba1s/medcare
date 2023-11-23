import React from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { HiStar } from "react-icons/hi";
import rev_pic from "../../assets/images/patient-avatar.png";

const Testimonial = () => {
  return (
    <>
      <div className="mt-[30px] lg:mt-[55px]">
        <Swiper
          modules={[Pagination]}
          slidesPerView={1}
          spaceBetween={30}
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
        >
          <SwiperSlide>
            <div className="py-[30px] px-5 rounded-3">
              <div className="flex items-center gap-[13px]">
                <img src={rev_pic} alt="revPic" />
                <div>
                  <h4 className="text-[18px] leading-[30px] text-headingColor font-semibold ">
                    Anas khan 1
                  </h4>
                </div>
                <div className="flex items-center gap-[2px]">
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                </div>
              </div>

              <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                hic, cupiditate modi beatae aspernatur vero dolore. Rem ipsum
                explicabo velit recusandae, adipisci architecto nisi? Facere quo
                ullam debitis distinctio molestias velit optio id tempora.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="py-[30px] px-5 rounded-3">
              <div className="flex items-center gap-[13px]">
                <img src={rev_pic} alt="revPic" />
                <div>
                  <h4 className="text-[18px] leading-[30px] text-headingColor font-semibold ">
                    Anas khan 2
                  </h4>
                </div>
                <div className="flex items-center gap-[2px]">
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                </div>
              </div>

              <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                hic, cupiditate modi beatae aspernatur vero dolore. Rem ipsum
                explicabo velit recusandae, adipisci architecto nisi? Facere quo
                ullam debitis distinctio molestias velit optio id tempora.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="py-[30px] px-5 rounded-3">
              <div className="flex items-center gap-[13px]">
                <img src={rev_pic} alt="revPic" />
                <div>
                  <h4 className="text-[18px] leading-[30px] text-headingColor font-semibold ">
                    Anas khan 3
                  </h4>
                </div>
                <div className="flex items-center gap-[2px]">
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                </div>
              </div>

              <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                hic, cupiditate modi beatae aspernatur vero dolore. Rem ipsum
                explicabo velit recusandae, adipisci architecto nisi? Facere quo
                ullam debitis distinctio molestias velit optio id tempora.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="py-[30px] px-5 rounded-3">
              <div className="flex items-center gap-[13px]">
                <img src={rev_pic} alt="revPic" />
                <div>
                  <h4 className="text-[18px] leading-[30px] text-headingColor font-semibold ">
                    Anas khan 4
                  </h4>
                </div>
                <div className="flex items-center gap-[2px]">
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                </div>
              </div>

              <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                hic, cupiditate modi beatae aspernatur vero dolore. Rem ipsum
                explicabo velit recusandae, adipisci architecto nisi? Facere quo
                ullam debitis distinctio molestias velit optio id tempora.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="py-[30px] px-5 rounded-3">
              <div className="flex items-center gap-[13px]">
                <img src={rev_pic} alt="revPic" />
                <div>
                  <h4 className="text-[18px] leading-[30px] text-headingColor font-semibold ">
                    Anas khan 5
                  </h4>
                </div>
                <div className="flex items-center gap-[2px]">
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                </div>
              </div>

              <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                hic, cupiditate modi beatae aspernatur vero dolore. Rem ipsum
                explicabo velit recusandae, adipisci architecto nisi? Facere quo
                ullam debitis distinctio molestias velit optio id tempora.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="py-[30px] px-5 rounded-3">
              <div className="flex items-center gap-[13px]">
                <img src={rev_pic} alt="revPic" />
                <div>
                  <h4 className="text-[18px] leading-[30px] text-headingColor font-semibold ">
                    Anas khan 6
                  </h4>
                </div>
                <div className="flex items-center gap-[2px]">
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                </div>
              </div>

              <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                hic, cupiditate modi beatae aspernatur vero dolore. Rem ipsum
                explicabo velit recusandae, adipisci architecto nisi? Facere quo
                ullam debitis distinctio molestias velit optio id tempora.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Testimonial;
