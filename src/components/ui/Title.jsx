export function Title({title, className}) {
  return (

      <div className={`w-full h-full py-4 text-center my-4 md:my-5 xl:my-11 ${className}`}>
          <h1 className="text-yellow-dark tracking-extra-sm font-bold text-lg md:text-xl xl:text-4xl">
              {
                title
              }
          </h1>
      </div>
  );
}
  
