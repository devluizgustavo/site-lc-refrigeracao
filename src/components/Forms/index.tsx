import { useState, type CSSProperties, type ReactElement } from 'react';
import './style.css';

interface FormData {
    nome: string;
    email: string;
    celular: string;
    endereco: string;
    eletrodomestico: string;
    marca: string;
    defeito: string;
}

const styleSelect: CSSProperties = {
    padding: '10px 4px',
    border: '1px solid #ccc',
    color: '#666',
    textAlign: 'left',
    borderRadius: '7px',
    fontSize: '14px',
}

export default function Forms(): ReactElement {

    const [formData, setFormData] = useState<FormData>({
        nome: '',
        email: '',
        celular: '',
        endereco: '',
        eletrodomestico: '',
        marca: '',
        defeito: ''
    })

    const [status, setStatus] = useState<string>('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>): void => {

        const target = e.target as EventTarget & { name: string; value: string };
        const { name, value } = target;
        
        setFormData({ ...formData, [name]: value });
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const response = await fetch('https://formspree.io/f/xgvywybv', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            setStatus('Sua solicitação foi enviada. Por Gentileza, aguarde o retorno do técnico.');
            setFormData({
                nome: '',
                email: '',
                celular: '',
                endereco: '',
                eletrodomestico: '',
                marca: '',
                defeito: ''
            })
        } else {
            setStatus('Ocorreu algum erro ao enviar a sua solicitação. Tente Novamente!');
            return;
        }
    }

    return (
        <section id='contact'>
            <div className="contato-container">
                <h2 className="contato-title">Solicitar Orçamento</h2>
                <p className="contato-desc">
                    Se preferir, preencha os campos abaixo com o defeito apresentado e o seu endereço para uma possível visita.
                </p>

                <form
                    action="https://formspree.io/f/xgvywybv"
                    method="POST"
                    className="contato-form"
                    onSubmit={handleSubmit}
                >
                    <input type="text" name="nome" value={formData.nome} onChange={handleChange} placeholder="Seu nome" required />
                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Seu e-mail" required />
                    <input type="text" name="celular" value={formData.celular} onChange={handleChange} placeholder="(11) 91111-2222" required />
                    <input type="text" name="endereco" value={formData.endereco} onChange={handleChange} placeholder="Endereço para visita ( Rua e Cidade )" required />

                    <select name="eletrodomestico" id="" style={styleSelect} onChange={handleChange} value={formData.eletrodomestico} required >
                        <option value="default">Escolha o seu Eletrodoméstico</option>
                        <option value="maq">Máquina de Lavar</option>
                        <option value="gel">Geladeira</option>
                        <option value="micro">Micro-Ondas</option>
                        <option value="out">Outros</option>
                    </select>

                    <input type="text" name="marca" value={formData.marca} onChange={handleChange}  placeholder="Escolha a Marca" required />

                    <textarea name="defeito" style={{ maxWidth: '100%' }} value={formData.defeito} onChange={handleChange}  placeholder="Descreva o defeito" rows={4} required></textarea>
                    <button type="submit">Enviar</button>

                    {status && <p>{status}</p>}
                </form>
            </div>
        </section>
    )
}