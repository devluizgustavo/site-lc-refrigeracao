import { type ReactElement } from "react";

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import './style.css';

import julianaLogo from '../../assets/Avaliações/juliana_logo.png';
import taniaLogo from '../../assets/Avaliações/tania_logo.png';
import deboraLogo from '../../assets/Avaliações/debora_logo.png';
import moniqueLogo from '../../assets/Avaliações/monique_logo.png';
import lisaLogo from '../../assets/Avaliações/lisa_logo.png';
import evelinLogo from '../../assets/Avaliações/evelin_logo.png';;
import nikeiraLogo from '../../assets/Avaliações/nikeira_logo.png';
import nildoLogo from '../../assets/Avaliações/nildo_logo.png';

interface Review {
    logo: string,
    author: string,
    stars: string,
    text: string
}


const reviews: Review[] = [
    {
        logo: julianaLogo,
        author: 'juliana rosadesousa',
        stars: '★★★★★',
        text: 'Nossa o atendimento,foi maravilhoso...O técnico Sr Luiz Carlos, muito atencioso e prestativo,fez vários testes na minha geladeira, até descobrir o problema exato....resolveu o problema da minha geladeira com excelência...Super recomendo!!!!!',
    },
    {
        logo: taniaLogo,
        author: 'Tania Bekesz',
        stars: '★★★★★',
        text: 'Profissional competente. Explica o que está fazendo  detalhando o problema encontrado na geladeira. Preço justo. Recomendo.',
    },
    {
        logo: deboraLogo,
        author: 'Débora Zanetti',
        stars: '★★★★★',
        text: 'Muito prestativo, veio 00:00 na minha casa e me salvou arrumando minha geladeira.... Nota 10....',
    },
    {
        logo: moniqueLogo,
        author: 'Monique Carvalho Diniz',
        stars: '★★★★★',
        text: 'Profissional honesto e muito dedicado. Explicou todos os defeitos da minha geladeira e cobrou um valor completamente justo. Sem contar com a rapidez e excelência. Recomendo!',
    },
    {
        logo: lisaLogo,
        author: 'Lisa Melo',
        stars: '★★★★★',
        text: 'Excelente técnico',
    },
    {
        logo: evelinLogo,
        author: 'Evelin Macedo',
        stars: '★★★★★',
        text: 'Muito bom profissional e boa pessoa, minha geladeira estava quebrada, arrumou em menos de 1h e ficou ótima.',
    },
    {
        logo: nikeiraLogo,
        author: 'MC Nikera',
        stars: '★★★★★',
        text: 'Ótimo profissional , resolveu o problema da minha geladeira com muita rapidez e eficiência, super recomendo.',
    },
    {
        logo: nildoLogo,
        author: 'Nildo Cassio',
        stars: '★★★★★',
        text: 'Ótimo atendimento.',
    },

]

const styleAuthor: React.CSSProperties = {
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '5px',
    display: 'flex',
    alignItems: 'center',
}

const styleStars: React.CSSProperties = {
    color: '#fbc02d',
    marginBottom: '10px'
}

const styleText: React.CSSProperties = {
    fontSize: '15px',
    color: '#555'
}

const styleLogo: React.CSSProperties = {
    height: '35px',
    marginRight: '10px'
}

const styleBoxSlide: React.CSSProperties = {
    boxShadow: '0px 10px 15px -3px rgba(0,0,0,0.1)',
    padding: '2em',
    borderRadius: '1em'
}

export default function Avaliacoes(): ReactElement {

    return (
        <section id="avaliacoes">
            <h3 style={{ color: '#00b7ff', margin: '30px auto', justifyContent: 'center', textAlign: 'center' }}>Nossas avaliações</h3>

            <div className="reviews-container">
                <Swiper
                    modules={[Autoplay]}
                    autoplay={{ delay: 4000 }}
                    loop={true}
                    spaceBetween={50}
                    grabCursor={true}
                    style={{ padding: '25px' }}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                        1280: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        },
                    }}
                >

                    {reviews.map((review, index) => (
                        <SwiperSlide key={index} style={styleBoxSlide}>
                            <div style={styleAuthor}>
                                <img src={review.logo} style={styleLogo} alt={`Foto de ${review.author}`} />
                                {review.author}
                            </div>

                            <div style={styleStars}>
                                {review.stars}
                            </div>

                            <div style={styleText}>
                                {review.text}
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}