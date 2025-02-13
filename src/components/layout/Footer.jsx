import Image from "next/image";
import { fetchData } from "@/lib/fetchData";
import API_BASE_URL from "@/config/config";

const apiData = fetchData("/api/get-companies/");

const optionItems = [
  {
    title: "Inicio",
    label: "home",
    url: "#"
  },
  {
    title: "¿Quienes somos?",
    label: "about",
    url: "#"
  },
  {
    title: "Viajes grupales",
    label: "groupTravel",
    url: "#"
  },
  {
    title: "Viajes a la medida",
    label: "custoTravel",
    url: "#"
  },
  {
    title: "Contáctanos",
    label: "contact",
    url: "#"
  },
  {
    title: "Alianzas estratégicas",
    label: "strateAll",
    url: "#"
  },
  {
    title: "Blogs",
    label: "blogs",
    url: "#"
  },
  {
    title: "Términos y condiciones",
    label: "termCondi",
    url: "#"
  },
  {
    title: "Política de privacidad",
    label: "privacyPolicy",
    url: "#"
  },
  {
    title: "Registro Nacional de Turismo",
    label: "natiTourRegi",
    url: "#"
  }
]

const dataIcon =[
  {
    name: "phone",
    url:"/img/icono_telefono.png"
  },
  {
    name: "email",
    url:"/img/icono_mail.png"
  },
  {
    name: "direction",
    url:"/img/icono_ubicacion.png"
  },
  
]
export function Footer() {
  const data = apiData.read();

  return (
    <footer className="bg-white py-8 2xl:px-40">
      <div className="flex flex-wrap justify-center 2xl:justify-start">
        <div className="sm:w-1/3 flex flex-col items-start mb-6 sm:mb-0 2xl:w-[27.5rem]">
          <div className="2xl:w-72">
            {
              data?.map(({id,logo})=>(
                <Image
                  key={id}
                  src={`${API_BASE_URL}${logo}`}
                  alt={`Allintravels`}
                  width={230}
                  height={30}
                  className="w-full h-full"
                />
              ))
            }
          </div>
          <div className="2xl:w-72 mt-5">
            <Image
              src="/img/logos_redes.png"
              alt={`Allintravels`}
              width={230}
              height={30}
              className="w-full h-full"
            />
          </div>
        </div>

        <div className="sm:w-1/3 flex flex-col items-start mb-6 sm:mb-0 2xl:w-[25rem]">
          <ul className="space-y-1">
            {
              optionItems?.map(({title, label, url})=> (
                <li key={label}>
                  <a href={url} className="text-black hover:text-gray-400 text-lg font-[450]">{title}</a>
                </li>
              ))
            }
          </ul>
        </div>

        <div className="sm:w-1/3 flex flex-col items-start mb-6 sm:mb-0 2xl:w-[23rem] 2xl:px-5 font-[450]">
          {
            data?.map(({email,phone,direction})=> (
              <>
                <div className="flex items-center mb-2">
                  <Image
                    src={dataIcon.find(icon => icon.name === "email")?.url}
                    alt={`Email iconx`}
                    width={20}
                    height={20}
                    className="mr-2 2xl:w-[14px]"
                  />
                  <p className="text-black">{email}</p>
                </div>

                <div className="flex items-center mb-2">
                  <Image
                    src={dataIcon.find(icon => icon.name === "phone")?.url}
                    alt={`Phone iconx`}
                    width={20}
                    height={20}
                    className="mr-2 2xl:w-[14px]"
                  />
                  <p className="text-black">{phone}</p>
                </div>
                <div className="flex items-start mb-2">
                  <Image
                    src={dataIcon.find(icon => icon.name === "direction")?.url}
                    alt={`Phone iconx`}
                    width={20}
                    height={20}
                    className="mr-2 2xl:w-[14px]"
                  />
                  <p className="text-black">{direction}</p>
                </div>
              </>
            ))
          }
        </div>
      </div>
    </footer>


  );
}
  
