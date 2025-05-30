import Hero from './components/Hero';
import About from './components/About';
import Forms from './components/Forms';
import Header from './components/Header';
import Footer from './components/Footer';
import Marcas from './components/Marcas';
import Servicos from './components/Servicos';
import Promocao from './components/Promocao';
import WhatsApp from './components/WhatsApp';
import Atendimento from './components/Atendimento';
import Avalicaoes from './components/Avaliacoes';

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
      <Avalicaoes />
      <Marcas />
      <Forms />
      <Atendimento />
      <Footer />
    </>
  )
}

export default App
