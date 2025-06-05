import { type ReactElement } from 'react';
import phoneRandom from '../../utils/phoneRandom';
import './style.css';

import { FaWhatsapp } from "react-icons/fa";

interface BtnGetProps {
    nameButton: string,
}

export default function BtnGet({ nameButton }: BtnGetProps): ReactElement {

    return (
        <div>
            <div className='container-button'>
                <a href={`https://wa.me/${phoneRandom()}`} className='btnBase'>
                    {nameButton}
                    <FaWhatsapp size={25} style={{ marginLeft: '25px' }} className='iconWhatsapp' />
                </a>
            </div>
        </div>
    )
}