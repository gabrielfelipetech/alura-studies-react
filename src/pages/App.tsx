
import { Button } from "../components/button"
import { Cronometro } from "../components/cronometro";
import { Form } from "../components/form"
import { List } from "../components/list"
import style from './style.module.scss';
function App() {

  return (
    <div className={style.AppStyle}>
      <Form/>
      <List/>
      <Cronometro/>
    </div>
  )
}

export default App
