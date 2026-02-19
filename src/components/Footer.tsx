
export const Footer = () => {
  return (
    <footer className="bg-amber-900 py-5 mt-20">
      {/* <div className="flex justify-between items-center gap-2 max-w-4xl mx-auto"> */}
      <div className="grid grid-cols-3 justify-between items-center gap-2 max-w-7xl mx-auto">
        <div>
          <a className="text-white font-extrabold text-4xl" href="/"> 
            <span className="uppercase text-amber-400 font-extrabold">T</span>ecno
            <span className="uppercase text-amber-400 font-extrabold">C</span>
            are Solutions
          </a>
        </div>

        <div className="flex justify-between gap-4">
          <div>
            <h1>Contacto Luis Salinas</h1>
            <a href="https://www.facebook.com/luisantonio.martinezsalinas?locale=es_LA" className="text-white">
              <img src="./facebook_logo.png" alt="Logo de Facebook" className="w-12" />
            </a>

            <a href=" https://www.instagram.com/luisantonio.martinezsalinas/" className="text-white">
              <img src="./logotipo-de-instagram.png" alt="Logo de Instagram" className="w-12" />
            </a>
            <img src="./QR_Tony.svg" alt="QR de Contacto" className="w-12" />
          </div>
        </div>

        <div>
          <div className="">
            <h1 className="text-slate-300 font-bold">
               <span className="text-amber-400">Con</span>tacto
                <span className="text-amber-400"> Luis </span>
                Vazquez
            </h1>
            <a href="https://www.facebook.com/luisangel.alvarez.1428/?locale=es_LA" className="text-white">
              <img src="./facebook_logo.png" alt="Logo de Facebook" className="w-12" />
            </a>

            <a href="https://www.instagram.com/luis._.alvarezz/" className="text-white">
              <img src="./logotipo-de-instagram.png" alt="Logo de Instagram" className="w-12" />
            </a>
            <img src="./QR_Luis.svg" alt="QR de Contacto" className="w-12" />
          </div>
        </div>
      </div>
    </footer>
  )
}
