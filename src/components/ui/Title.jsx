export function Title({title, className}) {
  return (

      <div className={` w-full h-full py-4 text-center  md:py-5 xl:py-11 ${className || "text-yellow-dark"}`}>
          <h1 className=" tracking-extra-sm font-bold text-lg md:text-xl xl:text-4xl">
              {
                title
              }
          </h1>
      </div>
  );
}
  
