import ChevronRightIcon from "@/components/icons/chevron-right";

export function CategoriesCard({ name, image, order}) {

  return (
    <div className="bg-white/35 w-60 h-20 rounded-md p-3 mb-4 lg:border-0 lg:w-[260px] lg:h-[150px] lg:rounded-xl xl:w-[413px] xl:h-[236px] xl:p-4 xl:rounded-2xl">
        <div 
            className={`bg-cover bg-no-repeat bg-center w-full h-full flex justify-end items-end p-2 lg:bg-contain lg:p-3 xl:p-5 xl:bg-contain order-[${order}]`}
            style={{backgroundImage: `url(${image})`}}
        >
            <h1 className="font-bold text-white mr-3 text-xs lg:text-sm xl:text-lg">
                {name}
            </h1>
            
            <div className="text-white rounded-full border-2 border-white text-center ">
              <ChevronRightIcon className="w-4 h-4 lg:w-5 lg:h-5 xl:w-[2rem] xl:h-[2rem]"/>
            </div>
        </div>
    </div>

  );
  }
  
