import './style.scss';
import { memo } from 'react';
import { Button } from '../Button'; 

export function CardParceiros() {
    return (
        <div className="parceirosAssinatura">
            <div className="conteudoParceiros">
                <div className="parceiros">
                    <div className="card">
                        <div className="cardParceiros">
                            <h2>Parceiros</h2>
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

export const CardParc = memo(CardParceiros);