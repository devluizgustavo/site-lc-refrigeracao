import './style.css'

import type { ReactElement } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'

import electrolux from '../../assets/Marcas/electrolux.png';
import brastemp from '../../assets/Marcas/brastemp.png';
import samsung from '../../assets/Marcas/samsung.png';
import consul from '../../assets/Marcas/consul.png';
import midea from '../../assets/Marcas/midea.png';
import lg from '../../assets/Marcas/lg.png';

const marcaStyle: React.CSSProperties = {
    width: '100%',
    display: 'flex',
    height: '50px',
    objectFit: 'contain',
    justifyContent: 'space-between',
    gap: '50px'
}

export default function Marcas(): ReactElement {

    const logos: string[] = [
        electrolux, 
        brastemp,
        samsung,
        consul,
        midea,
        lg
    ]

    return (
        <section id='marcas'>
            <div className="container">
                <h3 style={{ color: '#00b7ff' }}>Principais Marcas</h3>

                <div className="content-marcas">
                    <Swiper
                        modules={[Autoplay]} 
                        autoplay={{ delay: 3000 }} 
                        slidesPerView={3} 
                        spaceBetween={50}
                        loop={true}
                        grabCursor={true}
                        style={{ padding: '35px'  }}
                        breakpoints={{
                        706: {
                            slidesPerView: 3,
                            spaceBetween: 100,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 20,
                        },
                        1280: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        },
                    }}
                    >
                        {logos.map((srcMarca, index) => (
                        <SwiperSlide
                            key={index}                                                    
                        >
                            <img src={srcMarca} style={marcaStyle} />
                        </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

            <p>Trabalhamos com <strong>diversas marcas</strong>, acima estão <strong>listados as principais.</strong> Se a sua não estiver listada, <strong>entre em contato</strong> mesmo assim.</p>

        </section>
    )
}