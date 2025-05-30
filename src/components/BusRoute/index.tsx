import './style.css';

import iconMap from '../../assets/BusRoute/icon-map.png';
import itinerario from '../../assets/BusRoute/itinerário-frontal.png';
import { useState } from 'react';

export default function BusRoute() {

    const [isOpen, setIsOpen] = useState(false);
    
    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
        <section className="bus-route-container" id='bus-route'>
            <img src={iconMap} height={75}/>

            <h1>Itinerário</h1>

            <p>A JCP Locações realiza o trajeto completo entre a <b>Zona Leste</b> e o <b>Centro</b> de São Paulo. A rota de ida parte do Terminal Cidade Tiradentes até a região do Brás, passando por avenidas principais como Aricanduva e Celso Garcia. Na volta, o caminho se inicia na Estação da Luz e retorna ao terminal, atendendo pontos estratégicos como Rua Cantareira, Avenida dos Estados e Rua Bresser.</p>

            <div className='container-map'>
                <div>
                    <img 
                    alt="demonstrativo-itinerário" 
                    src={itinerario} 
                    className='img-itinerario'
                    onClick={openModal}
                    style={{ cursor: 'pointer' }}
                    />
                </div>
            </div>

            {isOpen && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content">
                        <img src={itinerario} alt="mapa amplicado" />
                    </div>
                </div>
            )}
        </section>
    )
}