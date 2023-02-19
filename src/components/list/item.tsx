import React from 'react';
import style from './style.module.scss';

interface itemProps {
    tarefa: string;
    tempo: string
}
export function Item({tarefa, tempo} : itemProps){
    return (
        <li className={style.item}>
                    <h3>{tarefa}</h3>
                    <span>{tempo}</span>
                 </li>  
    )
}