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
        <section className="relative w-full h-screen min-h-[600px] overflow-hidden flex items-center justify-center">
            
            {/* Overlay de Gradiente */}
           <div className="absolute inset-0 z-10 pointer-events-none">
    {/* Camada 1: O desfoque real (vazio, apenas para processar o fundo) */}
    <div className="absolute inset-0 backdrop-blur-[2px]"></div>

    {/* Camada 2: O Gradiente de cor Dinâmico */}
    <div 
        className="absolute inset-0"
        style={{
            background: `
                radial-gradient(circle at 70% 10%, rgba(215, 243, 255, 0.56) 0%, transparent 40%),
                radial-gradient(circle at 0% 100%, rgba(10, 31, 32, 0.95) 0%, rgba(10, 31, 32, 0.7) 50%, transparent 100%)
            `
        }}
    ></div>

    {/* Camada 3: Feixe de luz sutil (O detalhe que faz a diferença) */}
    <div className="absolute top-0 right-0 w-full h-full opacity-30"
        style={{
            background: 'conic-gradient(from 220deg at 90% 0%, transparent 0deg, rgba(255, 255, 255, 0.62) 10deg, transparent 40deg)'
        }}
    ></div>
</div>

            {/* Container do Carrossel (Fundo) */}
            <div className="absolute inset-0 w-full h-full">
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

            {/* Conteúdo Centralizado Responsivo */}
            <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12">
                <div className="text-white mt-20 flex flex-col items-center md:items-start max-w-2xl text-center md:text-left">

                    {/* Badge */}
                    <div className="flex items-center gap-2 bg-cyan-500/20 border border-cyan-500/50 px-4 py-1 rounded-full text-xs md:text-sm font-bold mb-6 w-fit">
                        <FaStar className="text-cyan-400" />
                        ESPECIALISTAS EM CONSERTOS
                    </div>

                    {/* Título com clamp para não sumir no zoom out */}
                    <h1 className="text-4xl md:!text-5xl lg:text-7xl font-extrabold leading-[1.1] mb-6 drop-shadow-lg">
                        Solução Definitiva <br />
                        para o seu <span className="text-sky-400">Eletrodoméstico</span>
                    </h1>

                    {/* Subtexto ajustado */}
                    <p className="!text-[16px] !text-center md:!text-lg mt-5 text-gray-200 mb-8 md:!text-left max-w-lg">
                        Repare sua geladeira, máquina de lavar ou micro-ondas com quem entende do assunto.
                        Técnicos qualificados e peças originais.
                    </p>

                    {/* Benefícios */}
                    <div className="flex flex-col md:flex-row flex-wrap gap-3 mb-10 justify-center md:justify-start">
                        <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10 shadow-lg">
                            <CiCircleCheck className="text-green-400" size={20} />
                            <span className="text-sm font-semibold">Técnicos Certificados</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10 shadow-lg">
                            <CiCircleCheck className="text-green-400" size={20} />
                            <span className="text-sm font-semibold">Garantia no serviço</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10 shadow-lg">
                            <CiCircleCheck className="text-green-400" size={20} />
                            <span className="text-sm font-semibold">Atendimento Ágil</span>
                        </div>
                    </div>

                    {/* Botão */}
                    <div className="w-full flex justify-center md:justify-start">
                        <BtnGet
                            nameButton="Solicitar orçamento"
                            icon={<HiArrowLongRight className="transition-transform group-hover:translate-x-2" size={20} />}
                        />
                    </div>
                </div>
            </div>
        </section >
    );
}