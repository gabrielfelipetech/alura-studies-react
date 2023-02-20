import React from 'react';
import style from './style.module.scss';
interface btnTypes {
    textBtn: String;
    typeBtn?: 'button' | 'submit';
    onClick?: () => void
}
export function Button ({textBtn, typeBtn = 'button', onClick} : btnTypes) {
    return (
        <button onClick={onClick} type={typeBtn} className={style.botao}>{textBtn}</button>
    )
}