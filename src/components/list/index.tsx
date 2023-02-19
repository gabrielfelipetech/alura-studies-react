import React from 'react'
import { Item } from './item';
import style from './style.module.scss';
export function List(){
    const tarefas = [{
        tarefa: 'Javascript', 
        tempo: '02:00:00'
    },
    {
        tarefa: 'React', 
        tempo: '04:00:00'
    }
]
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