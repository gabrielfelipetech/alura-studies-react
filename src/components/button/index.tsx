import React from 'react';
import style from './style.module.scss';
interface btnTypes {
    textBtn: String
}
export function Button ({textBtn} : btnTypes) {
    return (
        <button className={style.botao}>{textBtn}</button>
    )
}