"use client";
import API_BASE_URL from "@/config/config";
import { fetchData } from "@/lib/fetchData";
import { Title } from "@/components/ui/Title";
import { GroupExpeCard } from "@/components/cards/GroupExpeCard";

const apiData = fetchData("/api/get-travels/");

export function GroupExpe() {
  const data = apiData.read();
    return (
        <div className="">
            <Title className={"xl:my-20"} title={"EXPERIENCIAS GRUPALES"} />
            
            <div className="flex xl:justify-between xl:px-56">
                {
                    data?.map(({id,title,date_start,date_end,cost,description, image_cover, status}) => (
                        <GroupExpeCard
                            key={id}
                            title={title}
                            date_start={date_start}
                            date_end={date_end}
                            cost={cost}
                            description={description}
                            image_cover={`${API_BASE_URL}${image_cover}`}
                            status={status}
                        />
                    ))
                }
            </div>
            
        </div>
    );
}