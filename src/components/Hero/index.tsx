import './style.css';

import { Swiper, SwiperSlide } from 'swiper/react';

import { EffectFade, Autoplay } from 'swiper/modules';

import { FaTools } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";

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
    return (
        <section className='carrosel'>
            <div className="effect"></div>
            <div className="carrosel-container">
                <Swiper modules={[EffectFade, Autoplay]} autoplay={{ delay: 5000 }} effect='fade' slidesPerView={1} loop={true}>
                    <SwiperSlide>
                        <img src={img1} alt="Conserto Geladeira" className='carousel-image' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img4} alt="Maquina de Lavar" className='carousel-image' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img5} alt="Conserto Maquina de Lavar" className='carousel-image' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img2} alt="Geladeiras" className='carousel-image' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img3} alt="Geladeiras" className='carousel-image' />
                    </SwiperSlide>
                </Swiper>
            </div>

            <div className='hero-text-overlay'>
                <div className='content-text'>
                    <h2 className='hero-text'>Quebrou? <br />Nós consertamos!</h2>
                    <p className='hero-subtext'>Reparos de eletrodomésticos, orçamento sem <b>compromisso</b> e sem enrolação.</p>
                    <div className='container-ballon'>
                        <div className="back-ballon">
                            <p><FaTools style={{ marginRight: '10px' }} size={11} />Serviços com garantia</p>
                        </div>

                        <div className="back-ballon">
                            <p><FaRegClock style={{ marginRight: '10px' }} size={11} />Atendimento 24 Horas</p>
                        </div>
                    </div>
                    <BtnGet nameButton={'Fale Conosco'} />
                </div>
            </div>
        </section>
    )
}