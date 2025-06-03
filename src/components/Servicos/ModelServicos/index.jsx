import './style.css';

export default function ModelServicos({ NomeEletro, arrayDefeitos, imgEletro }) {

    return (
        <section className='servicos' id='servicos'>
            <div className='text-container'>

                <div className='content-img-equip'>
                    <img src={imgEletro} className='img-style-servs' />
                <h2 className='name-equip'>{NomeEletro}</h2>
                </div>

                <hr />

                <div className='content-defs'>
                    <h2 className='title-defs'>Defeitos Comuns</h2>

                    {arrayDefeitos.map((defeito, index) => (
                        <ul key={index} className='styleLi'>
                            <li>{defeito.def1}</li>
                            <li>{defeito.def2}</li>
                            <li>{defeito.def3}</li>
                            <li>{defeito.def4}</li>
                            <li>{defeito.def5}</li>
                            <li>{defeito.def6}</li>
                        </ul>
                    ))}
                </div>


            </div>
        </section>
    )
}