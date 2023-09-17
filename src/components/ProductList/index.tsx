import './style.scss';
import { Button } from '../Button'; 
import React, { useEffect, useState } from "react";
import Modal from "../ProductModal";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider, { CustomArrowProps } from "react-slick";
import forward from '../../assets/svg/forward.svg'
import next from '../../assets/svg/next.svg'

interface Product {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
}

export type { Product };

const subCategorySelection = ['CELULAR', 'ACESSÓRIOS', 'TABLETS', 'NOTEBOOKS', 'TVs', 'VER TODOS'];

function SampleNextArrow(props: CustomArrowProps) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", width: "20px", height: "34px" }}
      onClick={onClick}
      >
        <img src={next} alt="" />
    </div>
  );
}

function SamplePrevArrow(props: CustomArrowProps) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", width: "20px", height: "34px" }}
      onClick={onClick}
      >
        <img src={forward} alt="" />
    </div>
  );
}

const settings = {
  dots: false,
  infinite: false,
  speed: 1500,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />
}

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleBuyClick = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };
  

  

  useEffect(() => {
    // Função para buscar os dados da API
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json"
        );

        if (!response.ok) {
          throw new Error("Erro ao buscar os produtos");
        }

        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    
    <div className='products'>
      <div className='innerWidth'>
        <div className='productsTitle'>
          <hr></hr>
          <h1>Produtos relacionados</h1>
          <hr></hr>
        </div>
        <ul className='subCategorysContent'>
          { subCategorySelection.map( (subsCategory) => (
              <li className='subCategory'><p>{subsCategory}</p></li>
          )  ) }
        </ul>
        <div className='productsList'>
          <div className='carroselProducts'>
            <Slider {...settings}>
              {products.map((product, index) => (
                <div className='product' key={index}>
                    <img src={product.photo} alt={product.productName} />
                  <p className='productDescription'>{product.descriptionShort}</p>
                  <p className='productDiscount'>R$ 30,90</p>
                  <p className='productPrice'>R$ {product.price.toFixed(2)}</p>
                  <p className='productPaymentOptions'>ou 2x de R$ 49,95 sem juros</p>
                  <p className='productDelivery'>Frete grátis</p>
                  <Button id="buttonBuy" onClick={() => handleBuyClick(product)}>
                  COMPRAR
                  </Button>

                </div>
              ))}
            </Slider>
          </div>
        </div>
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} product={selectedProduct} />

      </div>
    </div>
  );
  
};


export default ProductList;
