
import type { ReactElement } from 'react';
import './style.css'

import { FaPhoneAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

export default function Atendimento(): ReactElement {
    return (
        <section id="atendimento">

            <h3 style={{ color: '#00b7ff', justifyContent: 'center', margin: '0 auto', display: 'flex' }} className='canal-atendimento-h3'>Canais de Atendimento</h3>
                
            <div className="container flexContainer">

                <div className="box-atend">
                    <div className="overlay"></div>
                    <div className="ligacao-button">
                        <FaPhoneAlt size={50} color="#fff" style={{ padding: '0px'}} className='icon-atend'/>

                        <div style={{ margin: '25px', fontSize: '10x', fontWeight: '700' }} className='number-phone'>
                            11 96139-9425
                        </div>

                        <a href="tel:+5511961399425" className='btn-mensagem'>
                            Ligar agora
                        </a>
                            
                    </div>
                </div>
 
                <div className="box-atend two">
                    <div className="overlay"></div>
                    <div className="ligacao-button">
                        <FaWhatsapp size={55} color="#fff" style={{ padding: '0px'}} className='icon-atend'/>

                        <div style={{ margin: '25px', fontSize: '10x', fontWeight: '700' }} className='number-phone'>
                            11 96139-9425
                        </div>

                        <a href="https://wa.me/5511961399425" className='btn-mensagem'>
                            Mandar Mensagem
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}