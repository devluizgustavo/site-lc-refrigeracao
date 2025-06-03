import './style.css';

import { FaWhatsapp } from "react-icons/fa";

const styleBase = {
  fontSize: '13px',
  padding: '20px',
  width: '25%',
  justifyContent: 'space-between',
  textAlign: 'center',
  alignItems: 'center',
  display: 'flex',
  background: 'linear-gradient(90deg, rgba(0, 183, 255, 1) 0%, rgba(25, 195, 230, 1) 48%, rgba(33, 149, 191, 1) 100%)',
  textDecoration: 'none',
  border: 'none',
  cursor: 'pointer',
  borderRadius: '5px',
  fontWeight: '700',
  color: '#000',
  marginTop: '25px',
  opacity: '75%',
}

export default function BtnGet({ nameButton, Side }) {

    const setStyle = () => {
        let style = { ...styleBase }

        if (Side === 'left') {
            style.marginLeft = 'auto';
        } else if (Side === 'right') {
            style.margin = '25px',
            style.marginRight = 'auto',
            style.float = 'right'
        } else if (Side === 'center') {
            style.margin = '0 auto',
            style.justifyContent = 'center'
            style.marginBottom = '50px'
        } else {
            style.width = 'auto'
        }

        return style;
    }
    
    return (
        <div>
            <div className='container-button'>
                  <a href="https://wa.me/5511961399425" className='btnBase'>
                  {nameButton}
                  <FaWhatsapp size={25} style={{ marginLeft: '25px' }} className='iconWhatsapp'/>
                  </a>
            </div>
        </div>
    )
}