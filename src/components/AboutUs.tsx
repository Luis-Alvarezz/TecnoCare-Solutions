import type { InformationPersonal } from "../types"

type AboutUsProp = {
  informationPersonal: InformationPersonal[]
}

export const AboutUs = ({informationPersonal} : AboutUsProp) => {
  return (
    <div className="mt-16">
      <h2 className="text-5xl uppercase font-bold text-center text-orange-700 mb-16">Acerca de nosotros</h2>
      <div className="flex flex-col md:flex md:flex-row gap-8 justify-between lg:mx-80">
        { informationPersonal.map(person => (
          <div className="text-center bg-yellow-700 px-6 py-12 rounded-xl w-full max-w-md max-h-screen min-h-[28rem] transition-all duration-300 ease-out hover:scale-105">
            <h2 className="text-xl font-bold text-slate-200 mb-4">{ person.name }</h2>
            <div className="flex justify-center align-middle">
              <picture>
                <source srcSet={person.image.webp} type="image/webp" className="w-52 h-52 rounded-full" />
                <img src={person.image.png} alt={person.name} className="w-52 h-52 rounded-full" />
              </picture>
            </div>
            <p className="mt-8 text-center text-slate-200 font-semibold">
              { person.description }
            </p>
          </div>
        ))}
        </div>
    </div>
  )
}
