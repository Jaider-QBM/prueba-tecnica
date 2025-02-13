"use client";
import { useState } from "react";
import API_BASE_URL from "@/config/config";
import { fetchData } from "@/lib/fetchData";
import { Title } from "@/components/ui/Title";
import { GroupExpeCard } from "@/components/cards/GroupExpeCard";
import ChevronLeftIcon from "../icons/chevron-left";
import ChevronRightIcon from "../icons/chevron-right";

const apiData = fetchData("/api/get-travels/");

export function GroupExpe() {
  const data = apiData.read();
  const [cards, setCards] = useState(data || []);
  
  const addStile = {
    1: {
      divSpace: "pb-6 xl:pb-6",
      dataPrice: "xl:mt-4",
      pSize: "px-4 xl:px-8",
      h1Size: "mt-6 xl:mt-9",
    },
    2: {
      divSpace: "pb-6 xl:pb-6",
      dataPrice:"mt-3 lg:mt-2",
      pSize: "pt-[6px] px-4 xl:pt-0 xl:px-6",
      priceDate:"px-3 xl:px-0",
      h1Size: "mt-8 px-5 xl:mt-9 xl:px-14",
    },
    3: {
        pSize: "px-4 xl:px-0",
        divSpace:"pb-[10px] xl:pb-[.9rem]",
        h1Size: "mt-4 xl:mt-6",
    },
  };

  const moveRight = () => {
    const firstCard = cards[0];
    const remainingCards = cards.slice(1);
    setCards([...remainingCards, firstCard]); // Mueve la primera tarjeta al final
  };

  const moveLeft = () => {
    const lastCard = cards[cards.length - 1];
    const remainingCards = cards.slice(0, cards.length - 1);
    setCards([lastCard, ...remainingCards]); // Mueve la última tarjeta al principio
  };

  return (
    <div className="px-7 md:px-16 lg:px-24 xl:px-52 static">
      <Title className={"xl:my-20 text-yellow-dark"} title={"EXPERIENCIAS GRUPALES"} />
      
      <div className="relative w-full flex items-center justify-between mt-14 mb-5 md:mt-13 md:mb-6 xl:mt-20 xl:mb-7">
        <div className="absolute flex justify-center items-center top-1/2 -left-3 xl:-left-28 ">
            <button
                onClick={moveLeft}
                className="p-2 rounded-full transition border-yellow-dark border-2 text-white bg-yellow-dark xl:bg-transparent xl:text-yellow-dark  xl:hover:bg-yellow-dark xl:hover:text-white"
            >
                <ChevronLeftIcon className="h-6 w-6 xl:w-10 xl:h-10 "/>
            </button> 
        </div>
        <div className="flex overflow-hidden w-full">
            <div className="flex transition-transform duration-300 space-x-9 pl-3 lg:p-5 xl:space-x-16">
                {
                    cards?.map(({ id, title, date_start, date_end, cost, description, image_cover, status }) => (
                        <GroupExpeCard
                            key={id}
                            title={title}
                            date_start={date_start}
                            date_end={date_end}
                            cost={cost}
                            description={description}
                            image_cover={`${API_BASE_URL}${image_cover}`}
                            status={status}
                            styles={addStile[id]}
                        />
                    ))
                }
            </div>
        </div>

        <div className="absolute -right-3 xl:-right-[5.6rem] top-1/2">
            <button
                onClick={moveLeft}
                className="p-2 rounded-full transition border-yellow-dark border-2 text-white bg-yellow-dark xl:bg-transparent xl:text-yellow-dark  xl:hover:bg-yellow-dark xl:hover:text-white"
            >
              <ChevronRightIcon className="h-6 w-6 xl:w-10 xl:h-10"/>
            </button> 
        </div>
      </div>
    </div>
  );
}
