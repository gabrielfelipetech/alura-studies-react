import React, { useState } from 'react'
import { Item } from './item';
import style from './style.module.scss';
interface tarefasProps {
    tarefa: string;
    tempo: string;
    selecionado: string;
    completado: string;
    id: string;
}
export function List({tarefas}: {tarefas: tarefasProps[]}){
    
    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map((tarefa) => (
                 <Item key={tarefa.tarefa + tarefa.tempo}  {...tarefa}/>
                ))}
            </ul>
        </aside>
    )
}