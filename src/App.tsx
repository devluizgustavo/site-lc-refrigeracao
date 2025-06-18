import Hero from './components/Hero/index.tsx';
import About from './components/About/index.tsx';
import Forms from './components/Forms/index.tsx';
import Header from './components/Header/index.tsx';
import Footer from './components/Footer/index.tsx';
import Marcas from './components/Marcas/index.tsx';
import Servicos from './components/Servicos/index.tsx';
import WhatsApp from './components/WhatsApp/index.tsx';
import Promocao from './components/Promocao/index.tsx';
import Atendimento from './components/Atendimento/index.tsx';
import Avalicoes from './components/Avaliacoes/index.tsx';

import './components/Header/style.css';

function App() {
  return (
    <>
      <WhatsApp />
      <Header />
      <Hero />
      <Promocao />
      <About />
      <Servicos />
      <Avalicoes />
      <Marcas />
      <Forms />
      <Atendimento />
      <Footer />
    </>
  )
}

export default App
