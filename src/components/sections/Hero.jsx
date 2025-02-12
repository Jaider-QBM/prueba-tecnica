"use client";
import API_BASE_URL from "@/config/config";
import { fetchData } from "@/lib/fetchData";
import { CategoriesCard } from "../cards/CategoriesCard";

const apiData = fetchData("/api/get-banners/");
const apiCategories = fetchData("/api/get-categories/");

export function Hero() {
  const data = apiData.read();
  const dataCategories = apiCategories.read()

  return (
    <>
      {
        data?.map(({ id,title, image}) =>(
        <div key={id}
          className={`w-full flex flex-col justify-center items-center bg-cover bg-center bg-no-repeat `}
          style={{backgroundImage:`url(${API_BASE_URL}${image})`}}
        >
          <div className="mb-6 lg:mb-8 xl:mb-10">
            <h1 className="font-bold text-white tracking-extra-wide text-3xl mt-72 lg:text-6xl lg:mt-[18rem] xl:text-[5.4rem] xl:mt-[25.3rem] xl:ml-2">{title}</h1>
            <p className=" font-bold text-center tracking-extra-sm text-custom-yellow mt-1 text-xl lg:tracking-extra-largex lg:text-2xl lg:ml-2 xl:ml-4 xl:tracking-extra-large xl:text-[2.4rem] xl:mt-3">EXPERIENCE</p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center mb-4 p-3 md:space-x-4 lg:mb-5 lg:space-x-14 xl:mb-5">
            {
              dataCategories?.map(({id, name, image_banner, order})=>(
                <CategoriesCard
                  key={id}
                  name={name}
                  image={`${API_BASE_URL}${image_banner}`}
                  order={order}
                />
              ))
            }
          </div>
        </div>
        ))
      }
    </>

  );
}
  
