import './style.css';

import iconFacebook from '../../assets/icons8-facebook.svg';
import iconWhatsapp from '../../assets/icons8-whatsapp.svg';

export default function Footer() {
    return (
    <footer className="site-footer">
      <div className="footer-content">
        <p className="footer-title">LC Refrigerações LTDA</p>

        <div className="footer-socials">
          <a href="https://www.facebook.com/share/18ZzWehK6v/" target="_blank" rel="noopener noreferrer">
            <img src={iconFacebook} alt="Facebook" />
          </a>
          <a href="https://wa.me/5511961399425" target="_blank" rel="noopener noreferrer">
            <img src={iconWhatsapp} alt="WhatsApp" />
          </a>
        </div>

        <p className="footer-copy" style={{ textAlign: 'center' }}>
          © {new Date().getFullYear()} LC Refrigerações LTDA. Todos os direitos reservados.<br/>
          58.325.508/0001-40
        </p>
      </div>
    </footer>
    )
}