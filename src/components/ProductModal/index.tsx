import React from "react";
import "./style.scss";
import { Button } from '../Button'; 
import { Product } from '../ProductList'; 

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product | null; 
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, product }) => {
  if (!isOpen || !product) {
    return null;
  }

  return (
    <div className="modalOverlay">
      <div className="modalContent">
        <div className="modalImage">
          <img src={product.photo} alt={product.productName} />
        </div>
        <div className="content">
          <h2>{product.productName}</h2> 
          <p className="priceModal">R$ {product.price.toFixed(2)}</p>
          <p className="descriptionModal">{product.descriptionShort}</p>
          <p className="seeMore">Veja mais detalhes do produto </p>
          <div className="addMore">
            <p>-</p>
            <p>1</p>
            <p>+</p>
          </div>
          <Button id='buttonBuy'>COMPRAR</Button>
        </div>
        <button className="buttonModal" onClick={onClose}>X</button>
      </div>
    </div>
  );
};

export default Modal;
