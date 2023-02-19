import React from 'react'
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
                 <li key={tarefa.tarefa + tarefa.tempo} className={style.item}>
                    <h3>{tarefa.tarefa}</h3>
                    <span>{tarefa.tempo}</span>
                 </li>   
                ))}
            </ul>
        </aside>
    )
}