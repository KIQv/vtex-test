import './style.scss';
import { memo } from 'react';

export function SearchBarComponent() {
    return (
        <div className='searchBar'>
            <input placeholder='O que você está buscando?'/>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.6875 19.875C15.7616 19.875 19.875 15.7616 19.875 10.6875C19.875 5.61338 15.7616 1.5 10.6875 1.5C5.61338 1.5 1.5 5.61338 1.5 10.6875C1.5 15.7616 5.61338 19.875 10.6875 19.875Z" stroke="#9F9F9F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M17.1837 17.1843L22.4994 22.5" stroke="#9F9F9F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
    );
}

export const SearchBar = memo(SearchBarComponent);