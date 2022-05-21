import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./baner.module.css";
import baner from "../../asset/baner.png";
import { Button, Typography } from "@mui/material";
import SwiperCore, { Navigation } from "swiper";
import { NavigationOptions } from "swiper/types";
SwiperCore.use([Navigation]);
export default function Baner() {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  return (
    <>
      <section className={styles.baner}>
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
            <div className={styles.banerSwiper__shadow}>
              <img
                className={styles.banerSwiper__image}
                src={baner}
                alt="baner"
              />
            </div>
            <div className={styles.content}>
              <Typography variant="h1">Тестовое задание</Typography>
              <Typography variant="subtitle1">Рыжий Михаил</Typography>
              <Button
                variant="contained"
                sx={{ background: "white", color: "#000" }}
              >
                test
              </Button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.banerSwiper__shadow}>
              <img
                className={styles.banerSwiper__image}
                src={baner}
                alt="baner"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.banerSwiper__shadow}>
              <img
                className={styles.banerSwiper__image}
                src={baner}
                alt="baner"
              />
            </div>
          </SwiperSlide>
          <div ref={navigationPrevRef} />
          <div ref={navigationNextRef} />
        </Swiper>
      </section>
    </>
  );
}
