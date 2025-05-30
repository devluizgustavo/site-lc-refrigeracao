import './style.css';

import { FaWhatsapp } from "react-icons/fa";

export default function BtnGet({ nameButton, className, marginRight='28px' }) {
    
    return (
        <div>
            <a href="https://wa.me/5511961399425" className={className}><FaWhatsapp size={25} style={{ marginRight: marginRight }} />{nameButton}</a>
        </div>
    )
}