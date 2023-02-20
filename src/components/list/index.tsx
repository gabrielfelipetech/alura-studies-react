import React, { useState } from 'react'
import { itemTask } from '../../types/task';
import { Item } from './item';
import style from './style.module.scss'
interface props{
    tarefas: itemTask[];
    selecionarTarefa: (tarefaSelecionada: itemTask) => void
}
export function List({tarefas, selecionarTarefa}: props){
    
    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map((tarefa) => (
                 <Item key={tarefa.id}  {...tarefa} selecionarTarefa={selecionarTarefa}/>
                ))}
            </ul>
        </aside>
    )
}