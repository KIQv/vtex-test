import './style.scss';
import { memo } from 'react';
import { Button } from '../Button'; 

import econverse from '../../assets/svg/econverseLogo.svg'
import vtex from '../../assets/svg/vtexLogo.svg'
import youtube from '../../assets/svg/youtube.svg'
import instagram from '../../assets/svg/instagram.svg'
import facebook from '../../assets/svg/facebook.svg'
import payments from '../../assets/image/formasPagamento.png'

export function Footer() {
    return (
        <div className='footer'>
            <div className='innerWidth'>
                <div className='contentFooter'>
                <div className='content'>
                    <div className='aboutFooter'>
                        <div className='aboutTitle'>
                            <p>Sobre nós</p>
                        </div>
                        <div className='navFooter'>
                            <ul>
                                <li>CONHEÇA</li>
                                <li>COMO COMPRAR</li>
                                <li>Indicação e Desconto</li>
                            </ul>
                        </div>
                        <div className='navFooterSocials'>
                            <img src={facebook} alt="Facebook VTEX" />
                            <img src={instagram} alt="Instagram VTEX" />
                            <img src={youtube} alt="Youtube VTEX" />
                        </div>
                    </div>
                    <div className='infoFooter'>
                        <div className='infoFooterTitle'>
                            <p>INFORMAÇÕES ÚTEIS</p>
                        </div>
                        <div className='navInfoFooter'>
                            <ul>
                                <li>FALE CONOSCO</li>
                                <li>DÚVIDAS</li>
                                <li>Prazos de Entrega</li>
                                <li>FORMAS DE PAGAMENTO</li>
                                <li>Política de privacidade</li>
                                <li>Trocas e Devoluções</li>
                            </ul>
                        </div>
                    </div>
                    <div className='paymentFooter'>
                        <div className='paymentFooterTitle'>
                            <p>FORMAS DE PAGAMENTO</p>
                        </div>
                        <div className='paymentsMethod'>
                            <div className='payments'>
                                <img src={payments} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='newsletter'>
                    <div className='contentNewsletter'>
                        <h4>Cadastre-se e Receba nossas
                            <br/><span>novidades e promoções</span></h4>
                        <p>Excepteur sint occaecat cudatat non ent, sunt in culpa qui officia lorem ipsum</p>
                    </div>
                    <div className='inputNewsletter'>
                        <input
                        className='input'
                        type="text" 
                        placeholder='Seu e-mail'
                        id="email" name="email"/>
                        <Button id="buttonNewsletter">OK</Button>
                    </div>
                </div>
                </div>
            </div>
            <hr />
            <div className='innerWidth'>
                <div className='copyright'>
                    <div className='copyrightText'>
                        <p>Copyright © 2019. Todos os direitos reservados. Todas as marcas e suas imagens são de propriedade de seus respectivos donos. É vedada a reprodução, total ou parcial, de qualquer conteúdo sem expressa autorização.</p>
                    </div>
                    <div className='copyrightLogo'>
                        <img src={econverse} alt="" />
                        <img src={vtex} alt="" />
                    </div>
                </div>
            </div>
        </div>

    );
}

export const FooterSite = memo(Footer);