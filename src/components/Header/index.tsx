import { useState, useEffect } from 'react';
import { CgMenu, CgClose, CgHomeAlt } from "react-icons/cg";
import { PiBuildingsBold } from "react-icons/pi";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import { MdEmail } from "react-icons/md";
import { FaHeadset } from "react-icons/fa";
import LogoImg from '../../assets/Logo/icon-neve.png';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Página Inicial', href: '#', icon: <CgHomeAlt /> },
        { name: 'Sobre a empresa', href: '#about', icon: <PiBuildingsBold /> },
        { name: 'Serviços', href: '#servicos', icon: <HiOutlineWrenchScrewdriver /> },
        { name: 'Orçamento', href: '#contact', icon: <MdEmail /> },
        { name: 'Atendimento', href: '#atendimento', icon: <FaHeadset /> },
    ];

    return (
        <header className={`fixed top-0 left-0 w-full z-[9999] transition-all duration-300
            ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-2' : 'bg-white py-4'}`}>

            <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">

                {/* Logo Area */}
                <div className="flex items-center gap-3">
                    <div className="bg-gray-100 p-1.5 rounded-full shadow-sm">
                        <img src={LogoImg} alt="Logo" className="h-8 w-8 object-contain" />
                    </div>
                    <div className="flex flex-col">
                        <h1 className="text-lg font-bold text-gray-800 leading-tight">LC Refrigeração</h1>
                        <span className="text-[10px] font-extrabold text-sky-500 uppercase tracking-wider">
                            Reparos Especializados
                        </span>
                    </div>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden lg:block shadow p-5 rounded-full">
                    <ul className="flex items-center gap-6 font-semibold">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a href={link.href} className="flex font-semibold items-center gap-2 text-sm text-gray-600 hover:text-sky-500 transition-colors">
                                    <span className="text-sky-500 text-lg">{link.icon}</span>
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden p-2 text-sky-500 focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <CgClose size={32} /> : <CgMenu size={32} />}
                </button>

            </div>

            {/* Mobile Sidebar/Menu */}
            <div className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-xl transition-all duration-300 overflow-hidden
                ${isOpen ? 'max-h-[500px] border-t border-gray-100' : 'max-h-0'}`}>

                <ul className="p-4 space-y-1">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="flex items-center gap-4 p-4 text-gray-700 hover:bg-sky-50 rounded-xl transition-all active:scale-95"
                            >
                                <span className="text-sky-500 text-xl">{link.icon}</span>
                                <span className="font-semibold">{link.name}</span>
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="p-4 pt-0">
                    <a href="tel:11961399425" className="flex justify-center items-center w-full bg-sky-500 text-white py-4 rounded-xl font-bold shadow-lg shadow-sky-200">
                        Ligar Agora
                    </a>
                </div>
            </div>
        </header>
    );
}