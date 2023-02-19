import React from 'react';
import style from './style.module.scss';
interface btnTypes {
    textBtn: String;
    typeBtn: 'button' | 'submit';
}
export function Button ({textBtn, typeBtn} : btnTypes) {
    return (
        <button type={typeBtn} className={style.botao}>{textBtn}</button>
    )
}