
import foto_luiz from '../../img/tecnico_luiz.jpg'
import foto_gustavo from '../../img/tecnico_gustavo.jpg'
import foto_alef from '../../img/tecnico_alef.jpg'
import foto_estefani from '../../img/atendente_estefani.jpg'

const _tecnicos = [
    {
        nome: 'Alef Dias',
        funcao: 'Técnico',
        descricao: 'Com certificação técnica nas principais marcas do mercado, Alef domina o funcionamento interno de cada aparelho. Sua abordagem focada na solução de problemas garante reparos eficazes e duradouros.',
        foto_url: foto_alef,
        alt: 'Técnico Alef'
    },
    {
        nome: 'Luiz Carlos',
        funcao: 'Fundador e Técnico Principal',
        descricao: 'Dono e fundador da empresa, Luiz Carlos é técnico certificado com 15 anos de experiência comprovada. Especialista em soluções para eletrodomésticos, ele aplica todo o seu conhecimento técnico e liderança para assegurar que a LC Refrigeração entregue sempre o melhor resultado e a máxima durabilidade para o seu patrimônio.',
        foto_url: foto_luiz,
        alt: 'Técnico Luiz Carlos'
    },
    {
        nome: 'Luiz Gustavo',
        funcao: 'Técnico',
        descricao: 'Técnico certificado com domínio completo em consertos de eletrodoméstico. Luiz Gustavo foca em soluções precisas, agilidade e total transparência no atendimento.',
        foto_url: foto_gustavo,
        alt: 'Técnico Luiz Gustavo'
    },
]

const _atendentes = [
    {
        nome: 'Estefani Bonke',
        funcao: 'Atendente de agendamento',
        descricao: 'Responsável pela organização e suporte ao cliente, Estefani garante um atendimento ágil e humanizado. Com foco na eficiência, ela coordena as visitas técnicas para garantir que sua solicitação seja atendida com a máxima rapidez e pontualidade.',        foto_url: foto_estefani,
        alt: 'Atendente Estefani'
    },
]

export default function Tecnicos() {
    return (
        <section className="flex justify-center" id="tecnicos">

            <div className='justify-center flex-col flex gap-8 px-4 mt-8 p-10'>
                <div className='flex-col flex justify-center items-center'>
                    <h1 className="text-3xl font-semibold text-gray-800">Nossos Técnicos</h1>
                    <p className='!text-center p-2 flex !text-lg text-gray-600'>Conheça nossos profissionais treinados e prontos para oferecer o melhor suporte técnico, com a garantia e a qualidade que você procura.</p>
                </div>

                {/* Grid Container */}
               {/* Grid Container */}
                <div className={`p-10 text-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${_tecnicos.length} gap-8`}>

                    {_tecnicos.map((tecnico, index) => (
                        <div 
                            key={index} 
                            className={`w-full max-w-md mx-auto justify-center flex-col flex items-center mt-8 shadow-lg rounded-lg p-10 
                            ${tecnico.nome === 'Luiz Carlos' ? 'order-first lg:order-none' : 'order-none'}`}
                        >
                            <img
                                draggable="false"
                                className="p-1 mt-5 w-70 h-70 object-cover object-top shadow-2xl rounded-full border-2 border-gray-100 select-none pointer-events-none"
                                src={tecnico.foto_url} alt={tecnico.alt}
                            />

                            <div className='flex-col flex justify-center items-center'>
                                <h2 className="text-2xl font-semibold mt-4">{tecnico.nome}</h2>
                                <p className='!text-center p-2 flex !text-lg text-sky-500 font-semibold'>{tecnico.funcao}</p>
                                <p className='!text-center p-2 flex !text-lg text-gray-800'>{tecnico.descricao}</p>
                            </div>
                        </div>
                    ))}

                </div>

                {/* Seção de Atendimento (Sem alterações necessárias aqui) */}
                <div className='flex-col flex justify-center items-center'>
                    <h1 className="text-3xl font-semibold text-gray-800">Nosso time de atendimento</h1>
                    <p className='!text-center p-2 flex !text-lg text-gray-600'>Conheça os profissionais que irão fazer o seu atendimento.</p>
                
                    <div className={`p-10 text-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${_atendentes.length} gap-8`}>
                        {_atendentes.map((atendente, index) => (
                            <div key={index} className='w-full max-w-md mx-auto justify-center flex-col flex items-center mt-8 shadow-lg rounded-lg p-10 '>
                                <img
                                    draggable="false"
                                    className="p-1 mt-5 w-70 h-70 object-cover object-center shadow-2xl rounded-full border-2 border-gray-100 select-none pointer-events-none"
                                    src={atendente.foto_url} alt={atendente.alt}
                                />
                                <div className='flex-col flex justify-center items-center'>
                                    <h2 className="text-2xl font-semibold mt-4">{atendente.nome}</h2>
                                    <p className='!text-center p-2 flex !text-lg text-sky-500 font-semibold'>{atendente.funcao}</p>
                                    <p className='!text-center p-2 flex !text-lg text-gray-800'>{atendente.descricao}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}