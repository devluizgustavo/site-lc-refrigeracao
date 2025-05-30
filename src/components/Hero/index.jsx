import './style.css';

import { Swiper, SwiperSlide } from 'swiper/react';

import { EffectFade, Autoplay } from 'swiper/modules';

import { FaTools } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";

import 'swiper/css';
import 'swiper/css/effect-fade';

import img1 from '../../img/1.jpg';
import img2 from '../../img/2.jpg';
import img3 from '../../img/3.jpg';
import img4 from '../../img/4.jpg';

import BtnGet from '../../components/BtnGet';

export default function Hero() {
    return (
        <section className='carrosel'>
            <div className="carrosel-container">
                <Swiper modules={[EffectFade, Autoplay]} autoplay={{ delay: 5000 }} effect='fade' slidesPerView={1} loop={true}>
                    <SwiperSlide>
                        <img src={img1} alt="Conserto Geladeira" className='carousel-image' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img2} alt="Maquina de Lavar" className='carousel-image' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img3} alt="Conserto Maquina de Lavar" className='carousel-image' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img4} alt="Geladeiras" className='carousel-image' />
                    </SwiperSlide>
                </Swiper>
            </div>

            <div className='hero-text-overlay'>
                <div className='content-text'>
                    <h2 className='hero-text'>Quebrou? <br />Nós consertamos!</h2>
                    <p className='hero-subtext'>Faça seu orçamento conosco, sem <b>compromisso</b> e sem enrolação.</p>
                    <div style={{ display: 'flex', gap: '25px' }}>
                        <h3 style={{ 
                            fontSize: 11, 
                            padding: '15px', 
                            background: 'rgba(0, 0, 0, 0.5)', 
                            width: '50%', textAlign: 'center',
                            borderRadius: '5em' }}>
                            <FaTools style={{ marginRight: '10px' }} size={11} />Garantia Completa</h3>

                        <h3 style={{ 
                            fontSize: 11, 
                            padding: '15px', 
                            background: 'rgba(0, 0, 0, 0.5)',
                            width: '35%', textAlign: 'center', 
                            borderRadius: '5em' }}>
                                <FaRegClock style={{ marginRight: '10px' }} size={11} />24 Horas</h3>
                    </div>
                </div>
                <BtnGet nameButton={'Fale Conosco'} className={'btnBase'} />
            </div>


        </section>
    )
}