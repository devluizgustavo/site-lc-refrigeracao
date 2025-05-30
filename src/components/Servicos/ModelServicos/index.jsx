import './style.css';

const styleLi = {
    display: 'flex', 
    fontSize: '11.5px',
    textAlign: 'left',
    justifyContent: 'left',
    alignItens: 'left',
    gap: '50px',
}

export default function ModelServicos({ NomeEletro, arrayDefeitos, imgEletro }) {

    return (
        <section className='servicos' id='servicos'>
            <div className='text-container'>
                    <div>
                        <img src={imgEletro} style={{ borderRadius: '50%', height: '250px', boxShadow: '1px 1px 15px rgba(0, 0, 0, 0.5)'}}/>
                    </div>

                    <h2>{NomeEletro}</h2>

                    <hr/>

                    <h2 style={{ fontSize: '17px', color: '#00b7ff'}}>Defeitos Comuns</h2>
                    
                    {arrayDefeitos.map((defeito, index) => (
                        <ul key={index} style={styleLi}>
                            <li>{defeito.def1}</li>
                            <li>{defeito.def2}</li>
                            <li>{defeito.def3}</li>
                        </ul>
                    ))}

                    {arrayDefeitos.map((defeito, index) => (
                        <ul key={index} style={styleLi}>
                            <li>{defeito.def4}</li>
                            <li>{defeito.def5}</li>
                            <li>{defeito.def6}</li>
                        </ul>
                    ))}
                    
                </div>
        </section>
    )
}