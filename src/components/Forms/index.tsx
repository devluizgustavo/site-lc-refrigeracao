import { useState, type CSSProperties, type ReactElement } from 'react';
import './style.css';
import { maskPhone } from '../../utils/maskPhone';

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
    fontSize: '22px',
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
    const [errors, setErrors] = useState<string[]>([]);
    const [isSending, setIsSending] = useState<boolean>(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>): void => {

        const target = e.target as EventTarget & { name: string; value: string };
        const { name, value } = target;

        let newValue = value;

        if (name === "celular") {
            if (newValue.length > 15) return;
            newValue = maskPhone(value);
        }

        setFormData({ ...formData, [name]: newValue });
    }

    const validation = (): void => {
        // Validar campos no input
        if (!formData) errors.push("Preencha todo o formulário.")
        if (!/^[A-Za-zÀ-ÿ\s]{2,}$/.test(formData.nome)) errors.push("Por favor, digite um nome válido.");
        if (!/^[0-9()\-\s]*$/.test(formData.celular)) errors.push("Numero de celular inválido.")
        if (!/^[A-Za-zÀ-ÿ\s]{2,}$/.test(formData.marca)) errors.push("Por favor, digite uma marca válida.");
        if (!formData.eletrodomestico || formData.eletrodomestico === "Default") errors.push("Por favor, escolha um eletrodoméstico.")
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errors.push("Por favor, digite um email válido.");
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setErrors([]);
        validation();

        if (errors.length > 0) {
            errors.forEach(error => alert(error));
            return;
        }

        if (isSending) {
            alert("Aguarde antes de enviar novamente.");
            return;
        }

        setIsSending(true);

        try {
            const response = await fetch('https://api-email-one.vercel.app/send-form', {
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
                console.log(response.body)
                return;
            }
        } catch (err) {
            console.log(err);
            setStatus("Erro de conexão. Tente novamente.");
        }

        setTimeout(() => setIsSending(false), 10000);
    }

    return (
        <section id='contact'>
            <div className="contato-container">
                <h2 className="contato-title">Solicitar Orçamento</h2>
                <p className="contato-desc">
                    Se preferir, preencha os campos abaixo com o defeito apresentado e o seu endereço para uma possível visita.
                </p>

                <form
                    action="https://api-email-one.vercel.app/send-form"
                    method="POST"
                    className="contato-form"
                    onSubmit={handleSubmit}
                >
                    <input type="text" name="nome" value={formData.nome} onChange={handleChange} placeholder="Seu nome" required />
                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Seu e-mail" required />
                    <input type="text" name="celular" value={formData.celular} onChange={handleChange} placeholder="(11) 91111-2222" required />
                    <input type="text" name="endereco" value={formData.endereco} onChange={handleChange} placeholder="Endereço para visita ( Rua e Numero da Casa )" required />

                    <select name="eletrodomestico" id="eletro" style={styleSelect} onChange={handleChange} value={formData.eletrodomestico} required >
                        <option value="Default">Escolha o seu Eletrodoméstico</option>
                        <option value="Maquina de Lavar">Máquina de Lavar</option>
                        <option value="Geladeira">Geladeira</option>
                        <option value="Micro Ondas">Micro-Ondas</option>
                        <option value="Outros">Outros</option>
                    </select>

                    <input type="text" name="marca" value={formData.marca} onChange={handleChange} placeholder="Escolha a Marca" required />

                    <textarea name="defeito" style={{ maxWidth: '100%' }} value={formData.defeito} onChange={handleChange} placeholder="Descreva o defeito" rows={4} required></textarea>
                    <button type="submit">Enviar</button>

                    {status && isSending && <p>{status}</p>}
                </form>
            </div>
        </section>
    )
}