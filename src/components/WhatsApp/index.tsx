import { useState, type ReactElement } from 'react';
import './style.css';

import { FaWhatsapp } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import logoTec from '../../assets/logo-tec.png';
import phoneRandom from '../../utils/phoneRandom';

export default function WhatsApp(): ReactElement {
    const [isClick, setIsClick] = useState<boolean>(false);

    // Get Click
    const redirectFromWhatsapp = () => {
        window.location.href = `https://wa.me/${phoneRandom()}`
    }

    const whatsappClass = `${isClick ? 'rotated' : ''}`;
    const contentShape = `content-shape ${isClick ? 'moved' : 'notMoved'}`

    return (


        <div className='container-whatsapp'>

            <div className={contentShape}>
                <div className='box-content'>
                    <div style={{ display: 'flex', alignItems: 'center', padding: '15px' }}>

                        <FaWhatsapp size={20} color='#fff' style={{ padding: '0px' }} />
                        <h1 style={{ padding: '15px', fontSize: '17px', color: '#fff' }}>Atendimento no Whatsapp</h1>
                    </div>
                </div>

                <div style={{ padding: '5px 20px' }} className='mt-5'>
                    <p style={{ fontSize: '14px' }}>Temos uma equipe pronta para atender você de <b>segunda a domingo a qualquer hora</b>, incluindo feriados!</p>
                </div>

                <div className='content-contact'>
                    <div className='box-contact' onClick={() => redirectFromWhatsapp()}>
                        <img src={logoTec} alt="Foto-Técnico" height={20} style={{ borderRadius: '5em' }} className='h-10' />
                        <p style={{ fontSize: '15px', color: '#000000bb' }}>LC | REFRIGERAÇÃO</p>
                    </div>
                </div>
            </div>

            <div
                className='content-whatsapp'
                onClick={() => setIsClick(!isClick)}
            >
                <a
                    className={whatsappClass}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Fale conosco no WhatsApp"
                >
                    {!isClick ? <FaWhatsapp size={20} color='#fff' style={{ padding: '0px' }} /> : <IoIosClose size={20} style={{ padding: '0px' }} />}
                </a>
            </div>
        </div >
    )
}