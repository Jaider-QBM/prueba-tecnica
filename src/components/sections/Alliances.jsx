"use client";
import "swiper/css";
import "swiper/css/autoplay";
import API_BASE_URL from "@/config/config";
import { fetchData } from "@/lib/fetchData";
import { Title } from "@/components/ui/Title";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

const apiData = fetchData("/api/get-partners/");

export function Alliances() {
  const data = apiData.read();

  return (
    <div className="relative px-5 my-5 pb-10 md:my-7 md:pb-11 md:px-24 xl:my-10 xl:pb-16 xl:px-36 2xl:px-[21rem]">
      <div className="absolute -top-12 right-5 md:-top-16 md:right-8 xl:right-32 xl:-top-24 2xl:-top-28">
        <Image
          width={133}
          height={133}
          src={`/img/logo_WA.png`}
          className="drop-shadow-xl w-14 h-14 md:w-16 md:h-16 xl:w-24 xl:h-24 2xl:w-full 2xl:h-full"
        />
      </div>
      <Title className={"text-yellow-dark pt-7 md:pb-8 lg:pb-9 2xl:pb-10"} title={"ALIANZAS ESTRATÉGICAS"} />

      <div className="2xl:mt-20">
        <Swiper
          slidesPerView={2}
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
          loop
          autoplay={{ delay: 2000 }}
          modules={[Autoplay]}
        >
          {
            data
            .filter(({logo}) => logo)
            .map(({id, name,logo}) => (
              <SwiperSlide key={id} className="flex justify-center">
                <img
                  src={`${API_BASE_URL}${logo}`}
                  alt={name}
                  className="w-full h-16 object-contain"
                />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
}
