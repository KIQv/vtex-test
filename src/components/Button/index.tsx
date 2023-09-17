import './style.scss';
import { memo } from 'react';

/* export function ButtonComponent() {
    return (
        <button></button>
    );
} */
type Props = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {}

const ButtonComponent = (props: Props) => {
    return (
        <button {...props}/>
    )
};

export const Button = memo(ButtonComponent);