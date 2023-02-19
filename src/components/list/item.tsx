import React from 'react';
import style from './style.module.scss';

interface itemProps {
    tarefa: string;
    tempo: string;
    selecionado: string;
    completado: string;
    id: string;
}
export function Item({ tarefa, tempo, selecionado, completado, id }: itemProps) {
    console.log('item atual', { tarefa, tempo, selecionado, completado, id })
    return (
        <li className={style.item}>
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
        </li>
    )
}