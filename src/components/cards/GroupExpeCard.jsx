import Image from "next/image";

export function GroupExpeCard({title,date_start,date_end,cost,description, image_cover, status}) {

    const formatRange = (dateStart, dateEnd) =>{
        const months = [
            "01", "02", "03", "04", "05", "06", 
            "07", "08", "09", "10", "11", "12"
        ];

        const parseDate = (dateString) => {
            const [year, month, day] = dateString.split("-").map(Number);
            return new Date(year, month - 1, day);
        };

        const startDate = parseDate(dateStart);
        const endDate = parseDate(dateEnd);


        const dayStart = startDate.getDate();
        const monthStart = months[startDate.getMonth()];

        const dayEnd = endDate.getDate();
        const monthEnd = months[endDate.getMonth()];

        

        if (monthStart !== monthEnd) {
            return `${dayStart}/${monthStart} - ${dayEnd}/${monthEnd}`;
        }

        const monthName = [
            "ENERO", "FEBRERO", "MARZO", "ABRIL", "MAYO", "JUNIO", 
            "JULIO", "AGOSTO", "SEPTIEMBRE", "OCTUBRE", "NOVIEMBRE", "DICIEMBRE"
        ][startDate.getMonth()];
      

        return `${dayStart} AL ${dayEnd} DE ${monthName}`;
    };

  return (
    
    <div className="xl:w-[27rem] static">
        <div className="shadow-lg rounded-2xl z">
            <Image
                src={image_cover}
                alt={title}
                width={471}
                height={470}
                className="w-full h-auto"
            />
            
            {
                status && (
                    <p className="text-center text-white font-bold xl:text-lg" style={{ backgroundColor: status.color}}>
                        {status.title}
                    </p>
                )
            }
        
            <div className="xl:mt-4 xl:h-[17rem] rounded-b-2xl bg-white">
                <h1 className="font-[900] flex justify-around items-center text-center xl:h-24 xl:mx-[4rem] xl:text-[26px]">{title}</h1>
                <div className="flex flex-col justify-center mt-2">
                    <p className="text-yellow-dark font-bold xl:text-[18px] xl:text-center">
                        {formatRange(date_start, date_end)} | DESDE {cost } USD
                    </p>

                    <p className="font-[400] mt-2 text-center xl:text-lg xl:px-8  ">
                        {description}
                    </p>
                </div>
            </div>
        </div>

        <div className="relative bg-yellow-dark text-center font-extrabold rounded-b-2xl text-white xl:py-8 xl:text-2xl xl:-top-1 -z-50">
            <span className="underline">
                MÁS INFORMACIÓN
            </span>
        </div>

    </div>

  );
}
  
