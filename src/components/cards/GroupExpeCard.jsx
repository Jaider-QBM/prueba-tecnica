
export function GroupExpeCard({title,date_start,date_end,cost,description, image_cover, status, styles }) {
    const formatRange = (dateStart, dateEnd) => {
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
    <div className="static w-60 xl:w-[27rem]">
        <div className={`shadow-[4px_7px_9px_2px_rgba(0,_0,_0,_0.2)] rounded-2xl z-50 bg-white ${styles.divSpace}`}>
            <div className="w-full h-52 bg-no-repeat bg-cover xl:h-[25rem]" style={{backgroundImage:`url(${image_cover})`}}></div>
            {
                status && (
                    <p className="text-center text-white font-bold py-0.5 xl:py-0 xl:text-lg" style={{ backgroundColor: status.color}}>
                        {status.title}
                    </p>
                )
            }
        
            <div className="xl:mx-[2rem]">
                <h1 className={`font-[900] text-center leading-tight text-lg xl:px-10 xl:text-[23px] ${styles.h1Size}`}>{title}</h1>
                <div className={`flex flex-col justify-center mt-2 ${styles.dataPrice}`}>
                    <p className={`text-yellow-dark font-bold  xl:text-[17px] text-center ${styles.priceDate}`}>
                        {formatRange(date_start, date_end)} | DESDE {cost } USD
                    </p>

                    <p className={`font-[450] mt-2 text-center  leading-tight text-base xl:text-[17px] ${styles.pSize}`}>
                        {description}
                    </p>
                </div>
            </div>
        </div>

        <div className="relative bg-yellow-dark text-center font-extrabold rounded-b-2xl text-white -top-1 -z-50 pt-5 pb-4 text-base xl:pt-8 xl:pb-7 xl:text-2xl ">
            <span className="underline">
                MÁS INFORMACIÓN
            </span>
        </div>

    </div>

  );
}
  
