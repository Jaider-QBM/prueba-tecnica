import Image from "next/image";
import API_BASE_URL from "@/config/config";
import { fetchData } from "@/lib/fetchData";
import { Title } from "@/components/ui/Title";

const apiData = fetchData("/api/get-blogs/");

const truncateText = (text) => {
  if (!text) return " ";
  return text.split("...")[0];
};

export function Blogs() {
  const data = apiData.read();

  return (
    <div className="static bg-yellow-dark px-2 mt-20 pb-9 md:px-10 md:mt-28 xl:pb-28 xl:px-32 xl:mt-32 2xl:px-48 ">
      <Title className={"text-white pt-7 md:pt-12 xl:pt-16 2xl:pb-10"} title={"BLOGS"} />

      <div className="grid grid-cols-1 lg:grid-cols-2 w-full p-6 gap-8 lg:gap-10 xl:gap-16">
        {data?.map(({ id, image_content, title, description }, index) => (
          <div
            key={id}
            className={`${
              index === 0 ? "lg:row-span-2" : ""
            } bg-white p-4 rounded-xl shadow-lg flex flex-col justify-center md:p-10 lg:p-8 xl:p-9`}
          >
            <div className="relative w-full h-auto overflow-hidden">
              <Image
                width={517}
                height={672}
                src={`${API_BASE_URL}${image_content}`}
                alt={title}
                className={`w-full h-full object-cover rounded-lg ${
                  index === 0 ? "object-center w-full h-56 md:h-[34rem] lg:h-[22rem] xl:h-[28rem] 2xl:h-[37rem]" : ""
                }`}
              />
            </div>
            <div className="mt-4">
              <h2 className="font-bold text-base md:text-xl xl:text-[22px] 2xl:text-3xl">{title}</h2>

              {
                index === 0 ? (
                <p className="mt-2 text-justify leading-tight font-normal hidden md:block md:text-lg xl:text-[22px]">
                  {truncateText(description)}...
                </p>
                ) : (null)
              }

              <div className={`text-end mt-3 ${index === 2 ? "mt-10" : ""}`}>
                <a href="#" className="text-yellow-dark font-extrabold underline md:text-2xl lg:text-xl xl:text-2xl">LEER MÁS</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
