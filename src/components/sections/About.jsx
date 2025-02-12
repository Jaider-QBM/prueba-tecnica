"use client";
import API_BASE_URL from "@/config/config";
import { fetchData } from "@/lib/fetchData";
import { Title } from "@/components/ui/Title";
import { useState } from "react";
import InstagramIcon from "@/components/icons/Intagram";
import ChevronRightIcon from "@/components/icons/chevron-right";

const apiData = fetchData("/api/get-companies/");

export function About() {
  const data = apiData.read();

  const [images, setImages] = useState(data[0]?.feed_instagram);
  const nextImage = () => {
    setImages((prevImages) => {
      const updatedImages = [...prevImages];
      const movedImage = updatedImages.shift();
      updatedImages.push(movedImage); 
      return updatedImages;
    });
  };

  return (
    <div className="px-7 md:px-16 lg:px-24 xl:px-[17.5rem] static">
      <Title title={"NOSOTROS"} />

      {data?.map(({ id, description, instagram_account }) => (
        <div key={id} className="mb-14">
          <p className="font-light text-justify leading-tight text-base md:text-lg lg:text-xl xl:text-[1.8rem]">
            {description}
          </p>

          <div className="relative w-full flex items-center justify-center mt-14 mb-5 md:mt-13 md:mb-6 xl:mt-20 xl:mb-7">
            <div className="flex overflow-hidden w-full">
              <div className="flex transition-transform duration-300">
                {images?.map(({ id, image, order }, index) => {
                  const isSelected = index === 0;
                  return (
                    <div
                      key={id}
                      className={`flex-shrink-0 mx-2 xl:mx-3 transition-all duration-300 ${isSelected ? "mr-5 md:mr-10 xl:mr-20" : "mr-0"}`}
                    >
                      <img
                        src={`${API_BASE_URL}${image}`}
                        alt={`Imagen ${order}`}
                        className={`w-32 md:w-60 xl:w-96 object-cover rounded-lg transition-all duration-300 ${
                          isSelected ? "scale-110 shadow-lg" : ""
                        }`}
                      />
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="absolute flex bg-gradient-to-r from-slate-50/5 to-slate-900 justify-center items-center right-0 h-32 w-14 md:h-60 md:w-16 xl:w-32 xl:h-96 xl:right-0">
              <button
                onClick={nextImage}
                className="p-2 text-white rounded-full hover:bg-gray-600 transition border-2 border-white xl:p-2"
              >
                <ChevronRightIcon className="w-4 h-4 md:w-5 md:h-5 xl:w-6 xl:h-6"/>
              </button>
            </div>

            <div className="absolute flex justify-center items-center -left-5 lg:-left-16 xl:-left-24 xl:w-20 xl:h-96">
              <div className="p-3 bg-yellow-dark rounded-full hover:cursor-pointer hover:bg-yellow-600">
                <InstagramIcon className="w-4 h-4 md:w-5 md:h-5  xl:w-8 xl:h-8"/>
              </div>
            </div>
            
          </div>

          <span className="text-base text-yellow-dark xl:text-2xl">
            {
              instagram_account
            }
          </span>

          <hr className="bg-yellow-dark p-[.5px] mt-9 xl:mt-16"/>
        </div>
      ))}
    </div>
  );
}
