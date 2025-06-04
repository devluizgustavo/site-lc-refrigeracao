import type { ReactElement } from 'react';
import './style.css';
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsApp(): ReactElement {
    return (
        <div className='container-whatsapp'>
            <div className='content-whatsapp'>
                <a
                    href="https://wa.me/5511961399425"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Fale conosco no WhatsApp"
                >
                    <FaWhatsapp size={25} color='#fff' style={{ padding: '0px' }}/>
                </a>
            </div>
        </div>
    )
}