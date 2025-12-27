import { type ReactElement, type ReactNode } from 'react';
import phoneRandom from '../../utils/phoneRandom';
import './style.css';

import { FaWhatsapp } from "react-icons/fa";

interface BtnGetProps {
    nameButton: string,
    icon?: ReactNode
}

export default function BtnGet({ nameButton, icon }: BtnGetProps): ReactElement {

    return (
        <div>
            <div className='container-button'>
                <a href={`https://wa.me/${phoneRandom()}`} className='btnBase'>
                    {nameButton}
                    {icon ? icon : <FaWhatsapp size={25} style={{ marginLeft: '25px' }} className='iconWhatsapp' />}

                </a>
            </div>
        </div>
    )
}