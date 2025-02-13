"use client";
import Image from "next/image";
import { useState } from "react";
import { fetchData } from "@/lib/fetchData";
import API_BASE_URL from "@/config/config";

const apiData = fetchData("/api/get-companies/");
const navItems = [
  {
    title: "Inicio",
    label: "home",
    url: "#"
  },
  {
    title: "Nosotros",
    label: "about",
    url: "#"
  },
  {
    title: "Viajes",
    label: "travel",
    url: "#"
  },
  {
    title: "Blogs",
    label: "blogs",
    url: "#"
  },
  {
    title: "Contacto",
    label: "contact",
    url: "#"
  }
]

export function Header() {
  const data = apiData.read();

  const [active, setActive]= useState("home");
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="w-full bg-transparent static z-50">
      <div className="hidden justify-between items-center absolute top-0 right-0 left-0 lg:flex lg:m-8 xl:m-14">
        <div className="lg:w-[140px] lg:h-9 xl:w-[250px] xl:h-[60px]">
          {
            data?.map(({id,logo})=>(
              <Image
                key={id}
                src={`${API_BASE_URL}${logo}`}
                alt='Allintravels'
                width={230}
                height={30}
                className="w-full h-full"
              />
            ))
          }
        </div>

        <nav>
          <ul className="flex font-sans text-black/70 space-x-10 mr-9 xl:text-lg xl:space-x-[7.5rem] xl:mr-[3rem]">
            {
              navItems?.map(({ title,label,url})=>(
                <li key={title}>
                  <a 
                    href={url} 
                    className={`inline-block transition-transform hover:scale-110 hover:text-black focus:font-bold ${active === label ? "font-bold text-black" : ""} `}
                    onClick={() => setActive(label)}
                  >
                    {title}
                  </a>
                </li>
              ))
            }
          </ul>
        </nav>
      </div>

      <div className="absolute top-0 right-0 left-0 flex justify-between items-center p-6 lg:hidden">
        <div className="w-full h-full">
          <Image
            src='/img/logo.png'
            alt='Allintravels'
            width={120}
            height={40}
            className="w-auto h-auto"
          />
        </div>

        <button onClick={toggleMenu} className="text-black">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="bg-white w-64 h-full fixed left-0 top-0 p-6 shadow-lg transition-transform duration-300">
            <div className="flex "> 
              <Image
                src='/img/logo.png'
                alt='Allintravels'
                width={120}
                height={40}
              />
              <button onClick={toggleMenu} className="absolute top-4 right-4 text-black">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <nav className="mt-10">
              <ul className="space-y-4 text-black">
                {
                  navItems?.map(({ title,label,url})=>(
                    <li key={title}>
                      <a 
                        href={url} 
                        
                        className={`block focus:font-bold ${active === label ? "font-bold text-black" : ""} `}
                        onClick={() => setActive(label)}
                      >
                        {title}
                      </a>
                    </li>
                  ))
                }
              </ul>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
  }
  
