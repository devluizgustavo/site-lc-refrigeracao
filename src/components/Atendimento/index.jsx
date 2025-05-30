
import './style.css'

import { FaPhoneAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

export default function Atendimento() {
    return (
        <section id="atendimento">
            <div className="container">
                <h3 style={{ color: '#00b7ff' }}>Canais de Atendimento</h3>

                <div className="box-atend">
                    <div className="overlay"></div>
                    <div className="ligacao-button">
                        <FaPhoneAlt size={50} color="#fff" style={{ padding: '0px'}} />

                        <div style={{ margin: '25px', fontSize: '18px', fontWeight: '700' }}>
                            11 96139-9425
                        </div>

                        <a href="tel:+5511961399425">
                            Ligar agora
                        </a>
                            
                    </div>
                </div>
 
                <div className="box-atend two">
                    <div className="overlay"></div>
                    <div className="ligacao-button">
                        <FaWhatsapp size={55} color="#fff" style={{ padding: '0px'}} />

                        <div style={{ margin: '25px', fontSize: '18px', fontWeight: '700' }}>
                            11 96139-9425
                        </div>

                        <a href="https://wa.me/5511961399425">
                            Mandar Mensagem
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}