import React, { useState } from 'react'
import { Button } from '../button'
import style from './style.module.scss';
import { v4 as uuidv4 } from 'uuid'
import { itemTask } from '../../types/task';
export function Form({ setTarefas }: any) {
  const [tarefa, setTarefa] = useState('')
  const [tempo, setTempo] = useState('')
  const submitTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setTarefas((tarefas: itemTask[]) => [...tarefas, { tarefa: tarefa, tempo: tempo, selecionado: false, completado: false, id: uuidv4() }])
    setTarefa('')
    setTempo('')
  }
  return (
    <form className={style.novaTarefa} onSubmit={submitTask}>
      <div className={style.inputContainer}>
        <label htmlFor="tarefa">
          Adicione um novo estudo
        </label>
        <input
          type="text"
          name="tarefa"
          id="tarefa"
          value={tarefa}
          onChange={({ target }) => setTarefa(target.value)}
          placeholder="O que você quer estudar"
          required
        />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor="tempo">
          Tempo
        </label>
        <input
          type="time"
          step="1"
          name="tempo"
          value={tempo}
          onChange={({ target }) => setTempo(target.value)}
          id="tempo"
          min="00:00:00"
          max="01:30:00"
          required
        />
      </div>
      <Button typeBtn={'submit'} textBtn={'Adicionar'} />
    </form>
  )
}