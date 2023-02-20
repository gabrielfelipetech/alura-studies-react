import React from 'react';
import { itemTask } from '../../../types/task';
import style from './item.module.scss';

interface props extends itemTask {
    selecionarTarefa: (tarefaSelecionada: itemTask) => void
}
export function Item({ tarefa, tempo, selecionado, completado, id, selecionarTarefa }: props) {

    return (
        <li className={`${style.item} ${selecionado ? style.itemSelecionado: ''} ${completado ? style.itemCompletado: ''}`} onClick={() => !completado && !selecionado && selecionarTarefa({ tarefa, tempo, selecionado, completado, id })}>
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
        </li>
    )
}