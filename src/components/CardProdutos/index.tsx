import './style.scss';
import { memo } from 'react';
import { Button } from '../Button'; 

export function CardParceiros() {
    return (
        <div className="cardProdutos">
            <div className="conteudoProdutos">
                <div className="produtos">
                    <div className="card">
                        <div className="produto">
                            <h2>Produtos</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur</p>
                            <Button id="buttonCheckOut">CONFIRA</Button>
                            <div></div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export const ProductCard = memo(CardParceiros);