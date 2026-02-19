
export default function Header() {
  return (
    <>
      <div className="">
        <header className="bg-amber-900 py-5">
          <div className="flex justify-between items-center gap-2 max-w-7xl mx-auto">
            <div>
              <a className="text-white text-4xl font-extrabold" href="/">
                <span className="uppercase text-amber-400 font-extrabold">T</span>ecno
                <span className="uppercase text-amber-400 font-extrabold">C</span>
                are Solutions
              </a>
            </div>

            <div className="flex gap-6">
              <a href="#" className="text-white hover:text-amber-400">Servicios</a>
              <a href="#" className="text-white hover:text-amber-400">Soluciones</a>
              <a href="#" className="text-white hover:text-amber-400">Nosotros</a>
              <a href="#" className="text-white hover:text-amber-400">Contacto</a>
              <a href="#" className="text-white hover:text-amber-400">Agendar Cita</a>
            </div>
          </div>
        </header>

        <div className="relative overflow-hidden h-[40vh]  sm:h-[80vh] md:h-[50vh] xl:h-[80vh] w-full">
          <div className="absolute flex items-center mt-7 inset-6 md:inset-16 xl:inset-72">
            <div className="mt-0 mb-0 mr-auto ml-auto sm:w-[95%] sm:max-w-[120rem]    z-10">
              <h2 className="text-orange-400 uppercase font-extrabold m-0 text-lg md:text-4xl">Soluciones tecnológicas integrales para tu empresa y tu hogar</h2>
              <div className="bg-amber-50 bg-opacity-80 rounded-md max-w-[22rem] sm:max-w-max sm:max-h-24 md:max-h-36  text-orange-700 inline-block py-4 px-8 mt-8 font-bold text-2xl">
                <p className="mb-3 text-xs md:text-xl">Soporte, mantenimiento y optimización profesional de sistemas.</p>
                <p className="text-xs md:text-xl"> Diagnóstico y cotización sin <span className=" text-red-800 uppercase font-bold text-sm md:text-xl">ningun</span> tipo de costo</p>
              </div>
            </div>
          </div>

          <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover">
            <source src="./public/video-header.mp4" type="video/mp4" />
            <source src="./public/video-header.webm" type="video/webm" />
          </video>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="-mb-30 md:-mb-72 xl:-mb-56">
          <img src="./ActivityListTop.svg" alt="Diseño Separacion Header de ActivityList" className="block object-cover w-[2000vh] h-[10vh] sm:h-[8vh] md:h-[40vh]" />
        </div>
      </div>
    </>
  )
}
