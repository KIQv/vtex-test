import './style.scss';
import { Button } from '../Button'; 
import { memo } from 'react';

export function BannerComponent() {
    return (
        <div className="banner">     
            <span id="linear"></span>
            {/* <!-- <span id="filtro"></span> --> */}
            <div className="mainBanner">
                <div className="imageBanner" id="image">
                    <div className="bannerContent innerWidth">
                        <h2>Venha conhecer nossas promoções</h2>
                        <h3>50% Off nos produtos </h3>
                        <Button id='buttonBanner'>Ver produto</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export const Banner = memo(BannerComponent);