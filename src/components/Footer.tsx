
export const Footer = () => {
  return (
    <footer className="bg-amber-900 py-5 mt-20">
      {/* <div className="flex justify-between items-center gap-2 max-w-4xl mx-auto"> */}
      <div className="sm:grid sm:grid-cols-1 md:grid md:grid-cols-3 md:justify-between md:gap-2 md:max-w-full md:mx-auto text-center items-center"> {/* text-center -> Alinear verticalmente  item-center -> Alinear Horizontalmente */}
        <div className="md:mb-0 mb-6">
          <a className="text-white font-extrabold text-4xl" href="/"> 
            <span className="uppercase text-amber-400 font-extrabold">T</span>ecno
            <span className="uppercase text-amber-400 font-extrabold">C</span>
            are Solutions
          </a>
        </div>

        <div className="flex justify-center mb-8 md:mb-0">
          <div>
            <h1 className="text-slate-300 font-bold text-lg">
               <span className="text-amber-400">Con</span>tacto
                <span className="text-amber-400"> Luis </span>
                Salinas
            </h1>
            <div className="flex justify-between items-center mt-4 gap-6">
              <a href="https://www.facebook.com/luisantonio.martinezsalinas?locale=es_LA" className="text-white">
                <img src="./facebook_logo.png" alt="Logo de Facebook" className="w-12" />
              </a>

              <a href=" https://www.instagram.com/luisantonio.martinezsalinas/" className="text-white">
                <img src="./logotipo-de-instagram.png" alt="Logo de Instagram" className="w-12" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div>
            <h1 className="text-slate-300 font-bold text-lg">
               <span className="text-amber-400">Con</span>tacto
                <span className="text-amber-400"> Luis </span>
                Vazquez
            </h1>
            <div className="flex justify-between items-center mt-4 gap-6">
              <a href="https://www.facebook.com/luisangel.alvarez.1428/?locale=es_LA" className="text-white">
                <img src="./facebook_logo.png" alt="Logo de Facebook" className="w-12" />
              </a>

              <a href="https://www.instagram.com/luis._.alvarezz/" className="text-white">
                <img src="./logotipo-de-instagram.png" alt="Logo de Instagram" className="w-12" />
              </a>

              <a href="https://www.linkedin.com/in/luis-angel-alvarez-vazquez/" className="text-white">
                <img src="./linkedin.png" alt="Logo de Linkedin" className="w-12" />
              </a>

              <a href="https://github.com/Luis-Alvarezz" className="text-white">
                <img src="./github.png" alt="Logo de Linkedin" className="w-12" />
              </a>
            </div>
          </div>
        </div>
      </div> {/* .grid grid-cols-3 justify-between */}
    </footer>
  )
}
