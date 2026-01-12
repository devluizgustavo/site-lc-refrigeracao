import './style.css';

import maqLavar from '../../img/maquina-de-lavar.jpg';
import Geladeira from '../../img/geladeira.jpg';
import microOndas from '../../img/microondas.jpg'

import ModelServicos from './ModelServicos';
import BtnGet from '../BtnGet';
import type { ReactElement } from 'react';

interface ListDefeitos {
    def1: string;
    def2: string;
    def3: string;
    def4: string;
    def5: string;
    def6: string;
}

export default function Servicos(): ReactElement {
    const defMaquina: ListDefeitos[] = [
        { 
            def1: "Não Funciona", 
            def2: "Não Centrifuga", 
            def3: "Não Seca",
            def4: "Não Liga", 
            def5: "Não Bate", 
            def6: "Não Solta Água" 
        }
    ]

    const defGeladeira: ListDefeitos[] = [
        {
            def1: "Não Gela", 
            def2: "Motor Não Liga", 
            def3: "Gela Apenas em Cima",
            def4: "Vazamentos", 
            def5: "Acumulo de Gelo", 
            def6: "Falta de Resfriamento" 
        }
    ]

    const defMicroOndas: ListDefeitos[] = [
        {
            def1: "Não Liga", 
            def2: "Liga e Não Esquenta", 
            def3: "Prato Não Gira",
            def4: "Botões Não Funciona", 
            def5: "Luz Queimada", 
            def6: "Vazamento Radiação", 
        }
    ]


    return (
     <section className='servicos p-10' id='servicos'>
    
    {/* O segredo: max-w + mx-auto sem o !important no m-auto */}
    <div className="w-full max-w-6xl mx-auto px-4 flex flex-col items-center">
        
        {/* Título Centralizado */}
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-white" id='title-defs-content'>
                Para quais <strong className="font-bold">eletrodomésticos</strong> devo <strong className="font-bold">solicitar</strong> a LC?
            </h2>
        </div>

        {/* Grid ou Coluna de Conteúdo */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl mx-auto px-4">
            <ModelServicos NomeEletro={"Manutenção de Geladeiras"} arrayDefeitos={defGeladeira} imgEletro={Geladeira} />
            <ModelServicos NomeEletro={"Manutenção da Máquina de Lavar"} arrayDefeitos={defMaquina} imgEletro={maqLavar} />
            <ModelServicos NomeEletro={"Manutenção de Micro-Ondas"} arrayDefeitos={defMicroOndas} imgEletro={microOndas} />
            
            <div className="mt-8">
                <BtnGet nameButton={'Solicitar Agora'} />
            </div>
        </div>

    </div>
</section>
    )
}