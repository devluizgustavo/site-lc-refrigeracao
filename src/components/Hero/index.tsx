import { Swiper, SwiperSlide } from 'swiper/react';

import { EffectFade, Autoplay } from 'swiper/modules';

import { CiCircleCheck } from "react-icons/ci";
import { HiArrowLongRight } from "react-icons/hi2";
import { FaStar } from "react-icons/fa6";


declare module '*.css';
import 'swiper/css';
import 'swiper/css/effect-fade';

import img1 from '../../img/1.jpg';
import img2 from '../../img/2.jpg';
import img3 from '../../img/3.jpg';
import img4 from '../../img/4.jpg';
import img5 from '../../img/5.jpg';

import BtnGet from '../BtnGet';
import type { ReactElement } from 'react';

export default function Hero(): ReactElement {
    const images = [
        { src: img1, alt: "Conserto Geladeira" },
        { src: img4, alt: "Maquina de Lavar" },
        { src: img5, alt: "Conserto Maquina de Lavar" },
        { src: img2, alt: "Geladeiras" },
        { src: img3, alt: "Geladeiras" },
    ];

    return (
        <section className="relative w-full h-[105vh] overflow-hidden">
            {/* Swiper Overlay (Escurecimento da imagem para leitura) */}
            <div
                style={{ background: 'linear-gradient(to left, rgba(255, 255, 255, 0.86) 10%, rgba(41, 116, 146, 0.51) 40%, #194647e3 100%)' }}
                className="absolute inset-0 z-10 pointer-events-none opacity-50"></div>

            {/* Container do Carrossel */}
            <div className="absolute inset-0 w-full h-full blur-xs">
                <Swiper
                    modules={[EffectFade, Autoplay]}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    effect="fade"

                    slidesPerView={1}
                    loop={true}
                    className="h-full w-full"
                >
                    {images.map((img, index) => (
                        <SwiperSlide key={index}>
                            <img
                                src={img.src}
                                alt={img.alt}
                                className="w-full h-full object-cover"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Overlay de Texto e Conteúdo */}
            <div className="relative z-20 flex items-center justify-left m-10 w-full h-full px-4 md:px-8">
                <div className="text-white flex flex-col items-center md:items-start text-center md:text-left">

                    {/* Badge de Insight */}
                    <div className="flex items-center gap-2 bg-cyan-500/20 border border-cyan-500/50 text-white-500 px-4 py-1 rounded-full text-xs md:text-sm font-bold mb-6">
                        <FaStar />
                        ESPECIALISTAS EM CONSERTOS
                    </div>

                    {/* Título Principal */}
                    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 drop-shadow-[2px_2px_10px_rgba(0,0,0,0.4)]">
                        Solução Definitiva <br />
                        para o seu <span className="text-sky-500">Eletrodoméstico</span>
                    </h1>

                    {/* Subtexto */}
                    <p className="!text-xl md:text-2xl max-w-3xl mb-8 mt-5">
                        Repare sua geladeira, máquina de lavar ou micro-ondas com quem entende do assunto.
                        Solução rápida e definitiva para seu eletrodoméstico com técnicos qualificados
                        e peças originais.
                    </p>

                    {/* Balões de Benefícios */}
                    <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-10">
                        <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl border border-white/20 shadow-lg">
                            <CiCircleCheck className="text-green-400" size={24} />
                            <p className="text-sm font-semibold">Técnicos Certificados</p>
                        </div>

                        <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl border border-white/20 shadow-lg">
                            <CiCircleCheck className="text-green-400" size={24} />
                            <p className="text-sm font-semibold">Garantia no serviço</p>
                        </div>

                        <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl border border-white/20 shadow-lg">
                            <CiCircleCheck className="text-green-400" size={24} />
                            <p className="text-sm font-semibold">Atendimento Ágil</p>
                        </div>
                    </div>

                    {/* Botão de Ação */}
                    <div className="flex items-center justify-center md:justify-start w-full">
                        <BtnGet
                            nameButton="Solicitar orçamento"
                            icon={<HiArrowLongRight className="ml-4 transition-transform group-hover:translate-x-2" size={25} />}
                        />
                    </div>
                </div>
            </div>
        </section >
    );
}