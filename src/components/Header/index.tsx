
import { useState, useEffect, type ReactElement } from 'react';
import Neve from '../../assets/Logo/icon-neve.png';

import { AiFillHome } from "react-icons/ai";
import { BsBuildingsFill } from "react-icons/bs";
import { FaTools } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaHeadset } from "react-icons/fa";

const styleLiDesktop: React.CSSProperties = {
    margin: '0 auto',
    justifyContent: 'center',
    display: 'flex',
    gap: '100px',
    fontSize: '25px',
    alignItems: 'center'
}

const styleADesktop: React.CSSProperties = {
    fontSize: '25px',
    fontWeight: '400',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
}

const styleButton: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    padding: '15px',
    borderRadius: '1em',
    width: '150px',
    fontSize: '25px',
    background: 'linear-gradient(90deg, rgba(0, 183, 255, 1) 0%, rgba(25, 195, 230, 1) 48%, rgba(33, 149, 191, 1) 100%)'
}

export default function Header(): ReactElement {

    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);
    const [isDesktop, setIsDesktop] = useState<boolean>(screenWidth >= 1280);

    useEffect(() => {
        const handleResize = (): void => {
            setScreenWidth(window.innerWidth);
        }

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        setIsDesktop(screenWidth >= 1280);
    }, [screenWidth]);


    return (
        <header>
            {isDesktop ? (
                <>

                    <div className='barra-superior'>
                        <div className='content-header'>
                            <div className='shape-inc'>
                                <a href='/'><img src={Neve} height={35} className='img-neve'></img></a>
                                <a>LC Refrigeração</a>
                            </div>


                            <ul style={{ marginTop: '12px', justifyContent: 'space-between', gap: '55px', alignItems: 'center' }}>
                                <li className='ul-barra'><a href="https://wa.me/5511961399425" style={styleButton}>Contratar Agora</a></li>
                                <li className='ul-barra'><a href="#" style={{ width: '85px', display: 'flex', fontSize: '25px' }}>
                                    11 96139-9425
                                    11 91499-0605
                                    </a></li>
                            </ul>

                        </div>
                    </div>

                    <nav style={{ background: 'transparent' }}>
                        <div className="menu" >
                            <ul style={styleLiDesktop}>
                                <li style={{ textAlign: 'center', display: 'flex', alignItems: 'center'}}>
                                    <a href="" style={styleADesktop}><AiFillHome size={20}  style={{ marginRight: '10px' }}/>Pagina Inicial</a></li>
                                <li><a href="#about" style={styleADesktop}><BsBuildingsFill size={20}  style={{ marginRight: '10px' }} />Sobre a Empresa</a></li>
                                <li><a href="#servicos" style={styleADesktop}><FaTools size={20}  style={{ marginRight: '10px' }}/>O que consertamos?</a></li>
                                <li><a href="#contact" style={styleADesktop} ><MdEmail size={20} style={{ marginRight: '10px' }}/>Solicitar Orçamento</a></li>
                                <li><a href="#atendimento" style={styleADesktop}><FaHeadset size={20}  style={{ marginRight: '10px' }}/>Canais de Atendimento</a></li>
                            </ul>
                        </div>
                    </nav>
                </>
            ) : (
                <nav>
                    <div className="menu">
                        <div className='shape-inc'>
                            <a href='/'><img src={Neve} height={35} className='img-neve'></img></a>
                            <a>LC Refrigeração</a>


                            <div className="menu-contact">
                                <ul className="contact-shape">
                                    <li><a href="#" style={{ fontWeight: '200', fontSize: '14px', display: 'flex' }}>11 96139-9425</a></li>
                                </ul>
                            </div>
                        </div>

                        {menuOpen && (
                            <ul className="dropdown">
                                <li><a href="">Pagina Inicial</a></li>
                                <li><a href="#about">Sobre a Empresa</a></li>
                                <li><a href="#servicos">O que consertamos?</a></li>
                                <li><a href="#contact">Solicitar Orçamento</a></li>
                                <li><a href="#atendimento">Canais de Atendimento</a></li>
                            </ul>

                        )}

                        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} id="menu-toggle">
                            &#9776;
                        </div>
                    </div>
                </nav>
            )}
        </header>
    )
}