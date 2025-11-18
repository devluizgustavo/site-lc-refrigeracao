
import './style.css'

import BtnGet from '../BtnGet';

import type { ReactElement } from 'react';
import { FaPeoplePulling } from "react-icons/fa6";
import { MdRealEstateAgent } from "react-icons/md";
import { FaDollarSign } from "react-icons/fa";

import img4 from '../../img/3.jpg'
import logo from '../../assets/logo.jpg'

export default function About(): ReactElement {

    return (
        <section className='container-about' id='about'>

            <div className='text-about'>

                <div>
                    <img src={logo} alt="" height={250} style={{ borderRadius: '50%' }} className='img-logo' />
                </div>

                <div className='about-us'>
                    <h1>Sobre Nós</h1>

                    <h2>Com mais de 10 anos de experiência no mercado</h2>
                    <p>
                        A <strong>LC Refrigeração</strong> se tornou referência em
                        <strong> manutenção e conserto de geladeiras, maquinas de lavar e micro-ondas</strong> em toda a região de São Paulo. Nossa missão é clara:<br /><br />
                        <i style={{ opacity: "75%", fontWeight: 200 }}>”Oferecer <strong>serviços rápidos, acessíveis e com qualidade de excelência</strong>, sempre com um toque humano no atendimento.”</i>
                    </p>
                </div>

            </div>


            <BtnGet nameButton="Quero fazer o orçamento" />

            <h3 style={{ color: '#000', textAlign: 'center' }} className='h2-title-about'>Por que escolher a LC Refrigeração?</h3>

            <div className="content-box">
                <div className="box">
                    <div>
                        <FaPeoplePulling size={35} />
                    </div>
                    Atendimento humanizado e transparente.
                </div>

                <div className="box" style={{
                    background: 'linear-gradient(90deg, rgb(61, 200, 255) 0%, rgb(69, 207, 235) 48%, rgb(77, 165, 197) 100%)'
                }}>
                    <div>
                        <MdRealEstateAgent size={35} />
                    </div>
                    Cobertura a domicílio em toda a cidade de São Paulo.
                </div>

                <div className="box">
                    <div>
                        <FaDollarSign size={35} />
                    </div>
                    Preço justo e serviço de confiança, do jeitinho que você merece.
                </div>

            </div>
            <div style={{ textAlign: 'center', margin: '0 auto', justifyContent: 'center' }} className='container-diferencial'>
                <h3 style={{ textAlign: 'center', color: '#00b7ff' }}>E temos um diferencial</h3>
                <p style={{ textAlign: 'center', fontSize: '14px' }} className='p-diferencial'>
                    Precisou, chegou! Oferecemos <strong>atendimento técnico a domicílio</strong> 24 horas por dia.
                    Com <strong>rapidez</strong> e <strong>confiança</strong>, estamos sempre prontos para te atender
                    a qualquer hora, inclusive nos <strong>finais de semana</strong> e <strong>feriados</strong>.
                </p>

            </div>

            <div className='img-container'>
                <img src={img4} alt="Geladeiras" className='img-bottom' />
            </div>

        </section>
    )
}