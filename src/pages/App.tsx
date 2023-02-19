
import { useState } from "react";
import { Button } from "../components/button"
import { Cronometro } from "../components/cronometro";
import { Form } from "../components/form"
import { List } from "../components/list"
import style from './style.module.scss';
function App() {
  const [tarefas, setTarefas] = useState([])
  return (
    <div className={style.AppStyle}>
      <Form setTarefas={setTarefas}/>
      <List tarefas={tarefas}/>
      <Cronometro/>
    </div>
  )
}

export default App
