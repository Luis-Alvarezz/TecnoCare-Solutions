
export default function Header() {
  return (
    <>
      <header className="bg-amber-900 py-5">
        <div className="flex justify-between items-center gap-2 max-w-4xl mx-auto">
          <div>
            <h1 className="text-white font-bold text-lg"> 
              <span className="uppercase text-amber-400">T</span>ecno
              <span className="uppercase text-amber-400">C</span>
              are Solutions
            </h1>
          </div>

          <div className="flex gap-6">
            <a href="#" className="text-white">Nosotros</a>
            <a href="#" className="text-white">Agenda tu Cita</a>
            <a href="#" className="text-white">Dudas</a>
          </div>
        </div>
      </header>

      <div className="relative w-full h-fit">
        <video src="./public/video-header.mp4" autoPlay loop muted className="w-full h-full object-cover"></video>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
    </>
  )
}
