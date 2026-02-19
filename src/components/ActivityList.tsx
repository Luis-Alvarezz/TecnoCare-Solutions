
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"

import 'swiper/css'
import 'swiper/css/navigation'
import "swiper/css/pagination"

export default function ActivityList() {

  return (
    <>
      <div>
        <h2 className="text-5xl uppercase font-bold text-center text-orange-700 mb-16">¿A qué nos dedicamos?</h2>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          navigation={{
            prevEl: '.swiper-button-prev-custom',
            nextEl: '.swiper-button-next-custom',
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 }
          }}
          className="relative h-[32rem]"
        >
          <SwiperSlide className="p-3 flex justify-center">
            <div className="bg-gray-100 rounded-lg shadow-xl p-3 transition-all duration-300 ease-out hover:scale-105 hover:shadow-2xl h-[28rem] overflow-hidden flex flex-col">
              <div>
                <img src="/activity1.jpg" className="rounded-lg mb-4" />
              </div>
              <div className="mt-3">
                <h3 className="text-xl font-bold text-amber-700 text-center">
                  Soporte a Equipos de Cómputo
                </h3>
                <p className="text-base text-gray-600 text-center mt-2">
                  Mantenimiento, optimización y reparación para que tus equipos trabajen al 100% sin interrupciones.
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="p-3 flex justify-center">
            <div className="bg-gray-100 rounded-lg shadow-xl p-3 transition-all duration-300 ease-out hover:scale-105 hover:shadow-2xl h-[28rem] overflow-hidden flex flex-col">
              <div>
                <img src="/activity2.jpeg" className="rounded-lg mb-4" />
              </div>
              <div className="mt-3">
                <h3 className="text-xl font-bold text-amber-700 text-center">
                  Mantenimiento Preventivo
                </h3>
                <p className="text-base text-gray-600 text-center mt-2">
                  Evita fallas, sobrecalentamientos y lentitud con limpieza y optimización profesional.
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="p-3 flex justify-center">
            <div className="bg-gray-100 rounded-lg shadow-xl p-3 transition-all duration-300 ease-out hover:scale-105 hover:shadow-2xl h-[28rem] overflow-hidden flex flex-col">
              <div>
                <img src="/activity3.jpeg" className="rounded-lg mb-4" />
              </div>
              <div className="mt-3">
                <h3 className="text-xl font-bold text-amber-700 text-center">
                  Mantenimiento Correctivo
                </h3>
                <p className="text-base text-gray-600 text-center mt-2">
                  Solucionamos fallas de hardware y software rápido y garantizado.
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="p-3 flex justify-center">
            <div className="bg-gray-100 rounded-lg shadow-xl p-3 transition-all duration-300 ease-out hover:scale-105 hover:shadow-2xl h-[28rem] overflow-hidden flex flex-col">
              <div>
                <img src="/activity4.jpeg" className="rounded-lg mb-4 w-full h-[26vh] object-cover" />
              </div>
              <div className="mt-3">
                <h3 className="text-xl font-bold text-amber-700 text-center">
                  Soporte Técnico
                </h3>
                <p className="text-base text-gray-600 text-center mt-2">
                  Asistencia remota y presencial para resolver cualquier problema tecnológico.
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="p-3 flex justify-center">
            <div className="bg-gray-100 rounded-lg shadow-xl p-3 transition-all duration-300 ease-out hover:scale-105 hover:shadow-2xl h-[28rem] overflow-hidden flex flex-col">
              <div>
                <img src="/activity5.webp" className="rounded-lg mb-4 w-full h-[26vh]" />
              </div>
              <div className="mt-3">
                <h3 className="text-xl font-bold text-amber-700 text-center">
                  Instalación de software
                </h3>
                <p className="text-base text-gray-600 text-center mt-2">
                  Instalamos y configuramos programas, sistemas operativos y licencias de forma segura.
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="p-3 flex justify-center">
            <div className="bg-gray-100 rounded-lg shadow-xl p-3 transition-all duration-300 ease-out hover:scale-105 hover:shadow-2xl h-[28rem] overflow-hidden flex flex-col">
              <div>
                <img src="/activity6.jpeg" className="rounded-lg mb-4 w-full h-[25vh]" />
              </div>
              <div className="mt-3">
                <h3 className="text-xl font-bold text-amber-700 text-center">
                  Instalación y Mantenimiento de Impresoras
                </h3>
                <p className="text-base text-gray-600 text-center mt-2">
                  Instalación, mantenimiento y reparación para impresiones sin interrupciones.
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="p-3 flex justify-center">
            <div className="bg-gray-100 rounded-lg shadow-xl p-3 transition-all duration-300 ease-out hover:scale-105 hover:shadow-2xl h-[28rem] overflow-hidden flex flex-col">
              <div>
                <img src="/activity7.jpeg" className="rounded-lg mb-4 w-full h-[26vh]" />
              </div>
              <div className="mt-3">
                <h3 className="text-xl font-bold text-amber-700 text-center">
                  CCTV
                </h3>
                <p className="text-base text-gray-600 text-center mt-2">
                  Instalación de cámaras de seguridad para protección 24/7 de tu hogar y negocio.
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="p-3 flex justify-center">
            <div className="bg-gray-100 rounded-lg shadow-xl p-3 transition-all duration-300 ease-out hover:scale-105 hover:shadow-2xl h-[28rem] overflow-hidden flex flex-col">
              <div>
                <img src="/activity9.jpeg" className="rounded-lg mb-4 w-full h-[26vh]" />
              </div>
              <div className="mt-3">
                <h3 className="text-xl font-bold text-amber-700 text-center">
                  Redes
                </h3>
                <p className="text-base text-gray-600 text-center mt-2">
                  Diseño e instalación de redes cableadas e inalámbricas rápidas, seguras y estables.
                </p>
              </div>
            </div>
          </SwiperSlide>

          {/* Flechas */}
          <button className="swiper-button-prev-custom absolute left-2 top-1/2 -translate-y-14 z-10 text-amber-500 p-3 rounded-full shadow-lg bg-amber-700 transition-all duration-200 ease-in hover:scale-105 text-lg">
            ◀
          </button>

          <button className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-14 z-10 text-amber-500 p-3 rounded-full shadow-lg bg-amber-700 transition-all duration-200 ease-in hover:scale-105 text-lg">
            ▶
          </button>

          {/* <div className="swiper-pagination"></div>
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div> */}

          {/* <div className="swiper-wrapper">
            <div className="swiper-slide">
              <img src="./activity1.jpg" alt="Activity 1" />
            </div>
            <div className="swiper-slide">
              <img src="/activity2.jpg" alt="Activity 2" />
            </div>
            <div className="swiper-slide">
              <img src="/activity3.jpg" alt="Activity 3" />
            </div>
          </div>
          <div className="swiper-pagination"></div>
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div> */}
        </Swiper>
      </div>
    </>
  )
}
