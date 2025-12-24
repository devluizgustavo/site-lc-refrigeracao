
import { BiAward } from 'react-icons/bi';
import { LuUsers } from "react-icons/lu";
import './style.css'
import type { CSSProperties, ReactElement } from 'react';
import { CgLock } from 'react-icons/cg';
import { FiTrendingUp } from 'react-icons/fi';
import { FaCheckCircle } from "react-icons/fa";

import { IoFlashOutline } from "react-icons/io5";
import { FaShieldHalved } from "react-icons/fa6";
import { RiTimerFlashLine } from "react-icons/ri";

import tecnico_photo from '../../assets/tecnico-ia.jpg';

const iconStyle: CSSProperties = {
    background: '#c7fffc7c',
    padding: '15px',
    color: 'var(--button-primary)',
    borderRadius: '1em'
}



export default function About(): ReactElement {

    const resumeStat = [
        {
            icon: FiTrendingUp,
            number: '10+',
            label: 'Anos de Experiência',
            description: 'Uma década de excelência no mercado de reparos'
        },
        {
            icon: LuUsers,
            number: '500+',
            label: 'Clientes Satisfeitos',
            description: 'Centenas de famílias e empresas confiam em nossos serviços'
        },
        {
            icon: BiAward,
            number: '100%',
            label: 'Técnicos Certificados',
            description: 'Equipe altamente qualificada e certificada'
        },
        {
            icon: CgLock,
            number: '24/7',
            label: 'Atendimento Contínuo',
            description: 'Disponível todos os dias, a qualquer hora'
        }
    ];

    const resumeDifferentials = [
        {
            icon: IoFlashOutline,
            title: 'Resposta Rápida',
            description: 'Atendimento ágil e eficiente. Sabemos que problemas em eletros é urgente, por isso nos comprometemos com prazos curtos.'
        },
        {
            icon: FaShieldHalved,
            title: 'Garantia de Qualidade',
            description: 'Centenas de famílias e empresas confiam em nossos serviços. Oferecemos garantia prolongada.'
        },
    ]

    const resumeDifferentials2 = [
        {
            icon: BiAward,
            title: 'Expertise Técnica',
            description: 'Nossos profissionais possuem certificações e treinamento contínuo em equipamentos mais recentes.'
        },
        {
            icon: RiTimerFlashLine,
            title: 'Disponibilidade 24h',
            description: 'Emergências não esperam horário comercial. Estamos sempre prontos para resolver seu problema.'
        }
    ]

    const whyChoiceUs = [
        "Resposta rápida em emergências — atendimento em até 2 horas",
        "Equipe com certificações em reparos de eletrodomésticos",
        "Garantia prolongada de serviço",
        "Estamos disponíveis a qualquer momento, 24 horas, 7 dias por semana",
        "Mais de 500 clientes satisfeitos em São Paulo"
    ]

    return (
        <>
            <div className='back-about'>
                <section className='container-about' id='about'>


                    <div className='content-about'>
                        <h1 className='title-about'>Quem Somos</h1>

                        <p style={{ textAlign: 'center', color: '#383838ff' }}>A <span style={{ color: '#0EA5E9', fontWeight: '700' }}>LC Refrigeração</span> é
                            referência em climatização e serviços de refrigeração em São Paulo.
                            Com mais de uma década de mercado, consolidamos nossa reputação através de atendimento excepcional,
                            técnicos certificados e compromisso com a satisfação do cliente.
                        </p>
                    </div>

                    {/* Relatório Empresa */}
                    <div className='content-resume'>
                        {resumeStat.map((res, index) => {
                            const Icon = res.icon;

                            return (
                                <div key={index} className='box-resume'>
                                    <div className='effect-box'></div> {/* Efeito de Luz na Box */}

                                    {/* Icone */}
                                    <div className='icon-content'>
                                        <Icon size={60} style={iconStyle} />
                                    </div>

                                    {/* Titulo & Relatorio */}
                                    <div>
                                        {/* Estatística Numero */}
                                        <div className='static-content'>
                                            {res.number}
                                        </div>

                                        {/* Titulo simples */}
                                        <div className='label-content'>
                                            {res.label}
                                        </div>
                                    </div>

                                    {/* Descrição resumida */}
                                    <div style={{ marginTop: '50px', color: '#363636ff' }}>
                                        {res.description}

                                    </div>
                                </div>
                            )
                        })}
                    </div>

                    {/* Mais detalhes */}


                    <div className='container-col'>

                        {/* Imagem do Técnico */}
                        <div className='content-image'>
                            <img src={tecnico_photo} alt="" />
                        </div>

                        <div style={{ textAlign: 'left' }}>
                            <h1 style={{ width: '12em', color: '#1f1f1fe0' }}>Manutenção que dura  <b>Serviço que você confia!</b></h1>

                            <p style={{ fontSize: '17px', opacity: '90%', letterSpacing: '0.4px', lineHeight: '1.5em' }}>
                                Desde 2014, a LC Refrigeração trabalha com dedicação e transparência.
                                Trabalhamos somente com peças originais e de qualidade e utilizamos técnicas atualizadas
                                para garantir uma manutenção duradoura. Com experiência e responsabilidade, entregamos
                                serviços confiáveis para que seu eletro volte a funcionar no melhor desempenho —
                                sem surpresas e com total segurança.
                            </p>

                            <h2 style={{ color: '#1f1f1fe0', fontSize: '17px', fontWeight: '700', marginTop: '50px' }}>Por que escolher a LC Refrigeração?</h2>

                            <div>
                                {whyChoiceUs.map((r, i) => (
                                    <div key={i} style={{ marginTop: '20px', display: 'flex', gap: '10px', fontWeight: '480', fontSize: '14.5px', opacity: '80%' }}>
                                        <FaCheckCircle color="#69e06591" size={20} />
                                        {r}
                                    </div>
                                ))}
                            </div>

                            <hr style={{ marginTop: '40px', opacity: '50%' }} />

                            <p style={{ fontStyle: 'italic', opacity: '80%', fontSize: '15px' }}>
                                "Nosso objetivo é simples: ser a empresa de reparos em eletrodoméstico mais confiável e
                                responsiva de São Paulo. Cada cliente é importante para nós."
                            </p>
                        </div>


                    </div>

                    {/* Diferenciais */}
                    <div>
                        <h1 style={{ color: '#1f1f1fe0', textAlign: 'center' }}>Nossos diferenciais</h1>
                        <p style={{ color: '#1f1f1fe0', textAlign: 'center', fontSize: '15px' }}>O que nos torna a escolha certa para o reparo do seu eletrodoméstico</p>
                    </div>

                    {/* Box Diferenciais */}
                    <div style={{ display: 'flex', gap: '50px', marginTop: '50px' }}>
                        {resumeDifferentials.map((res, index) => {
                            const Icon = res.icon;

                            return (
                                <div key={index} className='box-resume' style={{ padding: '3em', textAlign: 'left' }}>
                                    <div className='effect-box'></div> {/* Efeito d e Luz na Box */}

                                    {/* Icone */}
                                    <div className='icon-content'>
                                        <Icon size={60} style={iconStyle} />
                                    </div>

                                    {/* Titulo & Relatorio */}
                                    <div>
                                        {/* Estatística Numero */}
                                        <div className='static-content' style={{ fontSize: '17px', color: '#3b3b3bff' }}>
                                            {res.title}
                                        </div>
                                    </div>

                                    {/* Descrição resumida */}
                                    <div style={{ marginTop: '10px', color: '#363636ff' }}>
                                        {res.description}

                                    </div>
                                </div>
                            )
                        })}
                    </div>

                    {/* Box Diferenciais */}
                    <div style={{ display: 'flex', marginTop: '50px', gap: '50px' }}>
                        {resumeDifferentials2.map((res, index) => {
                            const Icon = res.icon;

                            return (
                                <div key={index} className='box-resume' style={{ padding: '3em', textAlign: 'left', gap: '5em' }}>
                                    <div className='effect-box'></div> {/* Efeito d e Luz na Box */}

                                    {/* Icone */}
                                    <div className='icon-content'>
                                        <Icon size={60} style={iconStyle} />
                                    </div>

                                    {/* Titulo & Relatorio */}
                                    <div>
                                        {/* Estatística Numero */}
                                        <div className='static-content' style={{ fontSize: '17px', color: '#3b3b3bff' }}>
                                            {res.title}
                                        </div>
                                    </div>

                                    {/* Descrição resumida */}
                                    <div style={{ marginTop: '10px', color: '#363636ff' }}>
                                        {res.description}

                                    </div>
                                </div>
                            )
                        })}
                    </div>

                </section >
            </div>
        </>
    )
}