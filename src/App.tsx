import './styles/global.scss';
import { Header } from './components/Header'; 
import { Banner } from './components/Banner'; 
import ProductList from './components/ProductList';
import {ImagePath} from './components/ImagePath';
import { CardParc } from './components/CardParceiros';
import { ProductCard } from './components/CardProdutos';
import { MarcasC } from './components/Marcas';
import { FooterSite } from './components/Footer';


function App() {
  return (
    <div className='App'>
      <Header/>
      <Banner/>
      <ImagePath/>
      <ProductList/>
      <div className='parceirosContent'>
        <div className='innerWidth'>
          <div className='cards'>
            <CardParc/>
            <CardParc/>
          </div>
        </div>
      </div>
      <div className='produtosContent'>
        <div className='innerWidth'>
        <div className='productsCardTitle'>
          <hr></hr>
          <div className='text'>
            <h1>Produtos relacionados</h1>
            <p>Ver todos</p>
          </div>
          <hr></hr>
        </div>
          <div className='cards'>
            <ProductCard/>
            <ProductCard/>
          </div>
        </div>
      </div>
      <MarcasC></MarcasC>
      <FooterSite></FooterSite>
    </div>
  );
}

export default App;
