import './style.scss';
import { memo } from 'react';
import marcaImg from '../../assets/image/marcaImg.png'

export function Marcas() {
    return (
        <div className='marcasParceiras'>
            <div className='innerWidth'>
                <h3>Navegue por marcas</h3>
                <div className='marcas'>
                    <div className='marca'>
                        <img src={marcaImg} alt="" />
                    </div>
                    <div className='marca'>
                        <img src={marcaImg} alt="" />
                    </div>
                    <div className='marca'>
                        <img src={marcaImg} alt="" />
                    </div>
                    <div className='marca'>
                        <img src={marcaImg} alt="" />
                    </div>
                    <div className='marca'>
                        <img src={marcaImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export const MarcasC = memo(Marcas);