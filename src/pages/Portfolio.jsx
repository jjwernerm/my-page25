import {
  Swiper,
  SwiperSlide
} from 'swiper/react';

import {
  Pagination,
  Autoplay
} from 'swiper/modules';

import 'swiper/css';

import 'swiper/css/pagination';

import {
  imgPortfolio
} from '../data/DataPortfolio.jsx';

export default function Portfolio() {

  return (
    <div id="portfolio" className="h-screen pt-16 p-4 pb-6 flex flex-col items-center justify-center bg-yellow-50">
      <p className="text-2xl font-extrabold font-serif md:text-5xl text-yellow-500">Portafolio</p>

      <p
        className="text-center text-zinc-700 my-4">
        Haz clic en la imagen para visitar el sitio web que he creado para los emprendedores.
      </p>

      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="w-full"
      >
        {imgPortfolio.map((port, index) => (
          <SwiperSlide key={index} className="relative flex items-center justify-center w-full p-5 md:p-10 lg:p-16">
            <a href={port.web} target="_blank">

              {/* Imagen de fondo desenfocada */}
              <img
                src={port.img}
                alt={port.title || 'Imagen del portafolio'}
                className="absolute inset-0 object-cover blur-sm w-full"
              />

              {/* Imagen en primer plano */}
              <div className="relative z-10 flex items-center justify-center w-full">
                <img
                  src={port.img}
                  alt={port.title || 'Imagen del portafolio'}
                  className=""
                />
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
