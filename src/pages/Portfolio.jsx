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
    <div id="portfolio" className="h-screen pt-16 p-4 pb-6 flex flex-col items-center justify-center bg-teal-100">
      <p className="text-2xl font-extrabold font-serif md:text-3xl text-teal-500">Portafolio</p>

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
        className="w-full h-full"
      >
        {imgPortfolio.map((port, index) => (
          <SwiperSlide key={index} className="relative flex items-center justify-center h-full">
            <a href={port.web} target="_blank">

              {/* Imagen de fondo desenfocada */}
              <img
                src={port.img}
                alt={port.title || 'Imagen del portafolio'}
                className="absolute inset-0 w-full h-full object-cover blur-sm"
              />

              {/* Imagen en primer plano */}
              <div className="relative z-10 flex items-center justify-center h-full">
                <img
                  src={port.img}
                  alt={port.title || 'Imagen del portafolio'}
                  className="w-60 rounded-lg shadow-lg"
                />
              </div>
              <div>Hola</div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
