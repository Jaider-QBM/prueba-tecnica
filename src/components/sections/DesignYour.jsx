"use client";
import { useState } from "react";
import { fetchData } from "@/lib/fetchData";
import { Title } from "@/components/ui/Title";
import ChevronDownIcon from "../icons/Chevron-down";

const apiData = fetchData("/api/get-travels/");
const apiTags = fetchData("/api/get-tags/")

export function DesignYour() {
    const [selectedTags, setSelectedTags] = useState([]);
    const [knowTravelDate, setKnowTravelDate] = useState(null);
    const [children, setChildren] = useState(0);
    const [adults, setAdults] = useState(1);

    const toggleTag = (tag) => {
        setSelectedTags((prev) =>
          prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
        );
    };

    const data = apiData.read();
    const dataTags = apiTags.read();
    return (
        <>
            <div className="px-7 static bg-[#d9d9d9bb] pb-11 md:px-16 md:pb-16 xl:px-[10rem] 2xl:px-[21rem] 2xl:pb-28">
                <Title className={"py-8 md:py-10 xl:py-16 2xl:py-20 text-yellow-dark"} title={"DISEÑA TU VIAJE"}/>

                <div>
                    <h1 className="font-bold md:text-xl xl:text-2xl 2xl:text-[27px]">
                        AQUÍ COMIENZA TU EXPERIENCIA
                    </h1>
                    <p className="font-normal text-justify leading-tight mt-3 mb-5 md:mt-4 md:mb-7 md:text-lg xl:text-2xl xl:mt-5 2xl:mb-16 2xl:text-[27px] 2xl:w-[74rem]">
                        Una vez llenado este formulario, uno de nuestros planners travelers se pondra en contacto contigo para perfeccionar ese viaje que tanto has soñado. Estamos aquí para brindarte la mejor experiencia.
                    </p>
                </div>

                <form>
                    <div className="flex flex-wrap gap-9">
                        <div>
                            <label className="block font-medium mb-2 md:text-lg xl:text-[23px] 2xl:text-[25px]">
                                ¿CUÁL ES EL DESTINO QUE QUIERES VISITAR?
                            </label>
                            <div className="relative">
                                <select className="w-full p-2 border rounded-xl appearance-none pr-10 hover:cursor-pointer md:h-16  md:px-6">
                                    <option value="">Selecciona un destino</option>
                                    {
                                        data?.map(({ id, title }, index) => (
                                            <option key={index} value={id}>
                                                {title}
                                            </option>
                                        ))
                                    }
                                </select>
                                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-yellow-dark ">
                                    <ChevronDownIcon className="w-[2.5rem] h-[2.5rem]"/>
                                </div>
                            </div>
                        </div>

                        <div>
                            <label className="block font-medium mb-2 md:text-lg md:mx-6 xl:text-[23px] 2xl:text-[25px] 2xl:mx-4">¿QUÉ OTRO DESTINO TIENES EN MENTE?</label>
                            <div className="relative">
                                <select className="w-full p-2 border rounded-xl appearance-none pr-10 hover:cursor-pointer md:h-16 md:px-6">
                                    <option value="">Selecciona un destino</option>
                                    {
                                        data?.map(({id, title}, index) => (
                                            <option key={index} value={id}>{title}</option>
                                        ))
                                    }
                                </select>
                                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-yellow-dark ">
                                    <ChevronDownIcon className="w-[2.5rem] h-[2.5rem]"/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <label className="block font-medium mb-2 mt-6 md:text-lg md:mt-9 xl:text-[23px] 2xl:text-[25px] 2xl:mt-16">¿QUÉ EXPERIENCIAS QUIERES VIVIR?</label>
                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-7">
                            {
                                dataTags?.map(({id, name}) => (
                                    <button
                                        key={id}
                                        type="button"
                                        className={`rounded-lg text-black/50 py-2 xl:py-4 xl:text-2xl ${
                                            selectedTags.includes(name)
                                            ? "bg-yellow-dark text-white border-yellow-dark"
                                            : "bg-white border-gray-300"
                                        }`}
                                        onClick={() => toggleTag(name)}
                                    >
                                        {name}
                                    </button>
                                ))
                            }
                        </div>
                    </div>

                    <div className="flex flex-wrap items-center mt-6 gap-4 lg:mt-9  xl:gap-0 xl:mt-12 2xl:mt-16 xl:h-16">
                        <label className="block font-medium md:text-lg xl:text-[23px] 2xl:text-[25px]">¿SABES CUÁNDO VIAJAR?</label>
                        <div className="flex gap-6 2xl:ml-9">
                            <label className="flex items-center md:text-lg xl:text-2xl">
                                <input
                                    className="w-7 h-7 appearance-none rounded-full border-none mx-2 bg-white/90 checked:bg-yellow-dark"
                                    type="radio"
                                    name="knowDate"
                                    value="yes"
                                    checked={knowTravelDate === "yes"}
                                    onChange={() => setKnowTravelDate("yes")}
                                />
                                Sí
                            </label>
                            <label className="flex items-center md:text-lg xl:text-2xl">
                                <input
                                    className="w-7 h-7 appearance-none rounded-full border-none mx-2 bg-white/90 checked:bg-yellow-dark"
                                    type="radio"
                                    name="knowDate"
                                    value="no"
                                    checked={knowTravelDate === "no"}
                                    onChange={() => setKnowTravelDate("no")}
                                />
                                NO
                            </label>
                        </div>
                        {
                            knowTravelDate === "yes" && (
                                <div className="flex flex-wrap gap-4 xl:gap-1 xl:pl-7 2xl:pl-11">
                                    <div className="flex items-center">
                                        <label className="xl:text-2xl">IDA:</label>
                                        <input type="date" className="p-2 border rounded mx-3 2xl:w-48 xl:h-16 xl:px-2 2xl:px-4"/>
                                    </div>

                                    <div className="flex items-center">
                                        <label className="xl:text-2xl">REGRESO:</label>
                                        <input type="date" className="p-2 border rounded ml-3 xl:w-48 xl:h-16 xl:px-2 2xl:px-4" />
                                    </div>
                                </div>
                            )
                        }
                    </div>

                    <div className="flex flex-wrap gap-4 mt-5 xl:mt-10">
                        <div className="flex items-center">
                            <label className="block font-normal mr-3 md:text-lg xl:text-[23px] 2xl:text-[25px]">NIÑOS:</label>
                            <div className="relative">
                                <select
                                    className="p-2 border rounded-xl appearance-none pr-10 hover:cursor-pointer w-24 md:w-32 md:px-5 xl:h-16 xl:px-6 xl:w-48"
                                    value={children}
                                    onChange={(e) => setChildren(e.target.value)}
                                >
                                    {[...Array(6).keys()].map((n) => (
                                    <option key={n} value={n}>{n}</option>
                                    ))}
                                </select>
                                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-yellow-dark ">
                                    <ChevronDownIcon className="w-[2.5rem] h-[2.5rem]"/>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <label className="block font-normal mr-3 md:text-lg xl:text-[23px] 2xl:text-[25px]">ADULTOS:</label>
                            <div className="relative">
                                <select
                                    className="p-2 border rounded-xl appearance-none pr-10 hover:cursor-pointer w-24 md:w-32 md:px-5 xl:h-16 xl:px-6 xl:w-48"
                                    value={adults}
                                    onChange={(e) => setAdults(e.target.value)}
                                >
                                    {[...Array(6).keys()].map((n) => (
                                    <option key={n} value={n + 1}>{n + 1}</option>
                                    ))}
                                </select>
                                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-yellow-dark ">
                                    <ChevronDownIcon className="w-[2.5rem] h-[2.5rem]"/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-9 2xl:mt-16">
                        <label className="block font-normal md:text-lg xl:text-[23px] 2xl:text-[25px] mb-3">TU VIAJE IDEAL...</label>
                        <textarea className="w-full p-2 border rounded xl:h-44" rows="3"></textarea>
                    </div>
                    
                    <div className="flex justify-center mt-9 2xl:mt-20">
                        <button type="submit" className="bg-yellow-dark text-white rounded font-extrabold py-3 px-14 xl:text-2xl xl:py-4 xl:px-16 2xl:text-3xl 2xl:py-5 2xl:px-20">
                            Enviar
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}
