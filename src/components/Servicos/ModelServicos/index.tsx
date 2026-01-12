import './style.css';

interface Defeitos {
  def1: string;
  def2: string;
  def3: string;
  def4: string;
  def5: string;
  def6: string;
}

interface ModeloServicos {
    NomeEletro: string;
    arrayDefeitos: Defeitos[];
    imgEletro: string;
}

export default function ModelServicos({ NomeEletro, arrayDefeitos, imgEletro }: ModeloServicos) {
    return (
        <div className='bg-white rounded-2xl border border-gray-200 shadow-lg 
                        hover:shadow-2xl transition-all duration-300 flex flex-col h-full'>
            
            {/* Cabeçalho do Card */}
            <div className='p-6 text-center border-b border-gray-100'>
                <h2 className='text-2xl font-bold text-gray-700'>{NomeEletro}</h2>
            </div>
            
            {/* Imagem do Eletrodoméstico */}
            <div className='flex justify-center p-8'>
                <img src={imgEletro} className='h-48 w-auto object-contain' alt={NomeEletro} />
            </div>

               <hr className='opacity-20 mt-10'/>

            {/* Conteúdo de Defeitos */}
            <div className='p-6 flex-grow'>
                <h3 className='text-sky-500 font-bold text-lg mb-4 text-center md:text-left'>
                    Defeitos Comuns
                </h3>

                {arrayDefeitos.map((defeito, index) => (
                    <ul key={index} className='space-y-2'>
                        <li className="flex items-start gap-2 text-gray-600">
                            <span className="text-sky-500">•</span> {defeito.def1}
                        </li>
                        <li className="flex items-start gap-2 text-gray-600">
                            <span className="text-sky-500">•</span> {defeito.def2}
                        </li>
                        <li className="flex items-start gap-2 text-gray-600">
                            <span className="text-sky-500">•</span> {defeito.def3}
                        </li>
                        <li className="flex items-start gap-2 text-gray-600">
                            <span className="text-sky-500">•</span> {defeito.def4}
                        </li>
                        <li className="flex items-start gap-2 text-gray-600">
                            <span className="text-sky-500">•</span> {defeito.def5}
                        </li>
                        <li className="flex items-start gap-2 text-gray-600">
                            <span className="text-sky-500">•</span> {defeito.def6}
                        </li>
                    </ul>
                ))}
            </div>
        </div>
    );
}