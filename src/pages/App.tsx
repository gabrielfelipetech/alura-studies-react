
import { useState } from "react";
import { Button } from "../components/button"
import { Cronometro } from "../components/cronometro";
import { Form } from "../components/form"
import { List } from "../components/list"
import { itemTask } from "../types/task";
import style from './style.module.scss';
function App() {
  const [tarefas, setTarefas] = useState([])
  const [selecionado, setSelecionado] = useState<itemTask>()
  console.log(selecionado)
  const selecionarTarefa = (tarefaSelecionada: itemTask) => {
    setSelecionado(tarefaSelecionada)
    setTarefas((tarefasAnteriores: any) => tarefasAnteriores.map((tarefa: itemTask) => ({
      ...tarefa,
      selecionado: tarefa.id === tarefaSelecionada.id ? true : false
    })))
  }
  const finalizarTarefa = () => {
    if (selecionado) {
      setSelecionado(undefined)
      setTarefas((tarefasAnterioes: any) => tarefasAnterioes.map((tarefa: itemTask) => {
        if (tarefa.id === selecionado.id) {
          return {
            ...tarefa,
            selecionado: false,
            completado: true
          }
        }
        return tarefa
      }))
    }
  }
  return (
    <div className={style.AppStyle}>
      <Form setTarefas={setTarefas} />
      <List tarefas={tarefas} selecionarTarefa={selecionarTarefa} />
      <Cronometro selecionado={selecionado} finalizarTarefa={finalizarTarefa}/>
    </div>
  )
}

export default App
