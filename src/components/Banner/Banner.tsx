import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./baner.module.css";
import banner from "../../asset/baner.png";
import SwiperCore, { Navigation } from "swiper";
import ButtonWhit from "../Buttons/ButtonWhit/ButtonWhit";

export default function Banner() {
  SwiperCore.use([Navigation]);
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  return (
    <>
      <section className={styles.banner}>
        <Swiper
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          onBeforeInit={(swiper) => {
            // @ts-ignore
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            // @ts-ignore
            swiper.params.navigation.nextEl = navigationNextRef.current;
          }}
        >
          <SwiperSlide>
            <div className={styles.bannerSwiper__shadow}>
              <img
                className={styles.bannerSwiper__image}
                src={banner}
                alt="banner"
              />
            </div>
            <div className={styles.content}>
              <h1 className={styles.title}>Twenty One Pilots</h1>
              <h3 className={styles.subtitle}>22.02.23 в 21:00</h3>
              <ButtonWhit text={"Купить билет"} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.bannerSwiper__shadow}>
              <img
                className={styles.bannerSwiper__image}
                src={banner}
                alt="banner"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.bannerSwiper__shadow}>
              <img
                className={styles.bannerSwiper__image}
                src={banner}
                alt="banner"
              />
            </div>
          </SwiperSlide>
          <div ref={navigationPrevRef} className={styles.btnPrev}>
            <svg
              width="6"
              height="10"
              viewBox="0 0 6 10"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="arrow-left"
                d="M0.382372 4.54038C0.128531 4.79422 0.128531 5.20578 0.382372 5.45962L4.51895 9.59619C4.77279 9.85003 5.18434 9.85003 5.43818 9.59619C5.69203 9.34235 5.69203 8.9308 5.43818 8.67696L1.76123 5L5.43818 1.32304C5.69203 1.0692 5.69203 0.657647 5.43818 0.403806C5.18434 0.149965 4.77279 0.149965 4.51895 0.403806L0.382372 4.54038ZM1.89462 4.35H0.841991V5.65H1.89462V4.35Z"
              />
            </svg>
          </div>
          <div ref={navigationNextRef} className={styles.btnNext}>
            <svg
              width="6"
              height="10"
              viewBox="0 0 6 10"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="arrow-right"
                d="M5.61735 5.45962C5.87119 5.20578 5.87119 4.79422 5.61735 4.54038L1.48078 0.403806C1.22694 0.149965 0.815381 0.149965 0.56154 0.403806C0.307699 0.657647 0.307699 1.0692 0.56154 1.32304L4.2385 5L0.56154 8.67696C0.307699 8.9308 0.307699 9.34235 0.56154 9.59619C0.815381 9.85003 1.22694 9.85003 1.48078 9.59619L5.61735 5.45962ZM4.1051 5.65H5.15773V4.35H4.1051V5.65Z"
              />
            </svg>
          </div>
        </Swiper>
      </section>
    </>
  );
}
