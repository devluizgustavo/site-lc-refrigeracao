import './style.css';

import { Swiper, SwiperSlide, } from 'swiper/react';
import { EffectFade, Autoplay } from 'swiper/modules';

import Motor from '../../img/motor.png'

import imgDanger from '../../img/test.jpg'


export default function Promocao() {
    const promocoes = [
        { id: 1, text: '<strong>ESTAMOS COM PROMOÇÃO!</strong>', style: { marginLeft: '20px'} },
        { id: 2, text: '<strong>10% de Desconto</strong> na troca do Motor ou Compressor' },
        { id: 3, text: 'A partir de <strong>R$950,00 á vista</strong>', style: { marginLeft: '18px'}  },
        { id: 4, text: 'Ou <strong>parcelamos</strong> em até <strong>10x de R$1200 S/Juros</strong>' },
        { id: 5, text: 'Trabalhamos somente com <strong>PEÇAS ORIGINAIS</strong>' },
    ]

    return (
        <section id='promocao'>
            <div className="container-promo">
                <Swiper
                    loop={true}
                    modules={[Autoplay]}
                    autoplay={{ delay: 3000 }}
                    spaceBetween={20}
                    slidesPerView={1}
                >

                    {promocoes.map((promo) => (
                        <SwiperSlide className='swiper-promo'>
                            <div>
                                <img src={Motor} height={75} alt="Foto do Motor" />
                            </div>
                            <div
                                key={promo.id}
                                className='text-promo'
                                dangerouslySetInnerHTML={{ __html: promo.text }}
                                style={promo.style && promo.style}
                            >
                            </div>
                        </SwiperSlide>
                    ))}

                </Swiper>
            </div>
        </section>
    )
}