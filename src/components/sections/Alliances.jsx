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
    <div className="relative px-2 2xl:px-[21rem] 2xl:my-10 2xl:pb-16">
      <div className="absolute 2xl:right-32 2xl:-top-28 ">
        <Image
          width={133}
          height={133}
          src={`/img/logo_WA.png`}
          className="drop-shadow-xl"
        />
      </div>
      <Title className={"text-yellow-dark pt-7 2xl:pb-10"} title={"ALIANZAS ESTRATÉGICAS"} />

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
