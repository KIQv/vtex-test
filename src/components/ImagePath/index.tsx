import './style.scss';
import { memo } from 'react';
import React, { useState } from 'react';

import technology from '../../assets/image/technology.png';
import store from '../../assets/image/store.png';
import drink from '../../assets/image/drink.png';
import tool from '../../assets/image/tool.png';
import health from '../../assets/image/health.png';
import sport from '../../assets/image/sport.png';
import fashion from '../../assets/image/fashion.png';

const arrayDeItens = [
    { titulo: "Tecnologia", icon: technology },
    { titulo: "Supermercado", icon: store },
    { titulo: "Bebidas", icon: drink },
    { titulo: "Ferramentas", icon: tool },
    { titulo: "Saúde", icon: health },
    { titulo: "Esporte e Fitness", icon: sport },
    { titulo: "Moda", icon: fashion },
  ];

export function ImagePath() {

    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    const handleClick = (index: number) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

  return (
    <div className='subCategorys'>
        <div className='innerWidth'>
            <ul>
            {arrayDeItens.map((item, index) => (
                <li
                    className={`subCategory ${activeIndex === index ? 'active' : ''}`}
                    key={index}
                    onClick={() => handleClick(index)}
                >
                    <img
                        className={`subCategoryImage ${activeIndex === index ? 'active' : ''}`}
                        src={item.icon}
                        alt=""
                    />
                    <h3
                        className={`subCategoryTitle ${activeIndex === index ? 'active' : ''}`}
                        onClick={() => handleClick(index)}
                    >
                        {item.titulo}
                    </h3>
                </li>
            ))}
            </ul>
        </div>
    </div>
  );
}
