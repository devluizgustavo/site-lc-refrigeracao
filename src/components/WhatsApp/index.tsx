import { useState, type ReactElement } from 'react';
import './style.css';

import { FaWhatsapp } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import logoTec from '../../assets/logo-tec.png';
import phoneRandom from '../../utils/phoneRandom';

export default function WhatsApp(): ReactElement {
    const [isClick, setIsClick] = useState<boolean>(false);

    const redirectFromWhatsapp = () => {
        window.location.href = `https://wa.me/${phoneRandom()}`
    }

    return (
        <div className='container-whatsapp'>
            {/* Balão de Mensagem */}
            <div className={`content-shape ${isClick ? 'moved' : 'notMoved'}`}>
                <div className='bg-[#25d366] p-3 flex items-center gap-3'>
                    <FaWhatsapp size={24} color='#fff'/>
                    <h1 className="text-white font-bold text-sm md:!text-lg">Atendimento no Whatsapp</h1>
                </div>

                <div className='p-4'>
                    <p className='md:!text-lg text-gray-600 leading-relaxed'>
                        Temos uma equipe pronta para atender você de <b>segunda a domingo a qualquer hora</b>!
                    </p>
                </div>

                <div className='p-3 bg-gray-50'>
                    <div className='flex items-center gap-3 p-2 bg-white rounded-lg border border-gray-200 cursor-pointer hover:bg-gray-100 transition-colors' 
                         onClick={redirectFromWhatsapp}>
                        <img src={logoTec} alt="Técnico" className='w-10 h-10 rounded-full object-cover' />
                        <span className='text-xs font-bold text-gray-800'>Falar com LC REFRIGERAÇÃO</span>
                    </div>
                </div>
            </div>

            {/* Botão Flutuante (O círculo) */}
            <div className='content-whatsapp' onClick={() => setIsClick(!isClick)}>
                {/* Removi o <a> para evitar conflitos, já que o clique é no div pai */}
                {!isClick ? (
                    <FaWhatsapp size={30} color='#fff' />
                ) : (
                    <IoIosClose size={45} color='#fff' />
                )}
            </div>
        </div>
    )
}