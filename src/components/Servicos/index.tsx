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
        <section className='servicos' id='servicos'>


            <div className="container">
                <div className="content">
                    <h2 style={{ fontWeight: 350 }} id='title-defs-content'>Para quais <strong>eletrodomésticos</strong> devo <strong>solicitar</strong> a LC?</h2>

                    <ModelServicos NomeEletro={"Manutenção da Máquina de Lavar"} arrayDefeitos={defMaquina} imgEletro={maqLavar} />
                    <ModelServicos NomeEletro={"Manutenção de Geladeira"} arrayDefeitos={defGeladeira} imgEletro={Geladeira} />
                    <ModelServicos NomeEletro={"Manutenção de Micro-Ondas"} arrayDefeitos={defMicroOndas} imgEletro={microOndas} />
                    <BtnGet nameButton={'Solicitar Agora'} />
                </div>
            </div>
        </section>
    )
}