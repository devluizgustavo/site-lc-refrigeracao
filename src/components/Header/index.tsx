
import { useState } from 'react';
import Neve from '../../assets/Logo/icon-neve.png';

export default function Header() {

    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    return (
        <header>
            <nav>
                <div className='content-header'>
                    <div className='shape-inc'>
                        <a href='/'><img src={Neve} height={35}></img></a>
                        <a>LC Refrigeração</a>
                    </div>

                    <div className="menu-contact">
                            <ul className="dropdown">
                                <li><a href="#">11 96139-9425</a></li>
                                <li><a href="#" className='contato'>Fale Conosco 2</a></li>
                            </ul>
                    </div>

                    <div className="menu">
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
                </div>
            </nav>

        </header>
    )
}