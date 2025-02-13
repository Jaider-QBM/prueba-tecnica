import API_BASE_URL from "@/config/config";
import Image from "next/image";
import { fetchData } from "@/lib/fetchData";
import { Title } from "@/components/ui/Title";


const apiData = fetchData("/api/get-customer_experiences/");

export function CustoExpe() {
  const data = apiData.read();
  return (
    <>
        {
            data?.map(({id, title,image,description,diference_description})=>(
                <div key={id} className="px-7 md:px-16 lg:px-20 xl:px-48 mt-20 xl:mt-40 static">
                    <Title className={"my-8 md:my-12 lg:my-16 xl:my-20 text-yellow-dark"} title={`${title}`} />
      
                    <div className="flex flex-col lg:flex-row justify-center items-center flex-wrap xl:mb-28 w-full">
                        <div className="w-full md:w-80 lg:w-96 xl:w-[32rem] flex justify-center items-center">
                            <Image
                                width={517}
                                height={672}
                                src={`${API_BASE_URL}${image}`}
                                alt={`${title}`}
                                className="w-full h-auto"
                            />
                        </div>

                        <div className="w-full text-center lg:w-96 lg:pl-12 xl:pl-14 xl:w-[58rem] xl:text-left" >
                            <h1 className="font-bold text-lg mt-8  leading-tight lg:mt-7 xl:text-4xl">{description}</h1>
                            <p className="text-justify font-light text-base mt-5 mb-9 lg:mt-4 lg:mb-10 xl:text-3xl xl:mt-7 xl:mb-16">{diference_description}</p>
                            <a href="#" className="bg-yellow-dark font-extrabold text-white px-10 py-3 md:px-14 md:py-4 xl:text-2xl xl:px-16 xl:py-6 rounded-xl">COTIZAR MI VIAJE</a>
                        </div>
                    </div>
                </div>
            ))
        }
    </>
  );
}
