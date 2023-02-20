import React, { useEffect, useState } from 'react'
import { convertTimeToSeconds } from '../../common/utils/time'
import { itemTask } from '../../types/task'
import { Button } from '../button'
import { Relogio } from './relogio'
import style from './style.module.scss'
interface props {
  selecionado: itemTask | undefined
  finalizarTarefa: () => void
}
export function Cronometro({ selecionado, finalizarTarefa }: props) {
  const [time, setTime] = useState<number>();
  useEffect(()=>{
    if(selecionado?.tempo){
      setTime(convertTimeToSeconds(selecionado.tempo))
    }
  },[selecionado])
  const descreaseTime = (time : number = 0) =>{
    setTimeout(() => {
      if(time > 0){
        setTime(time - 1)
        document.title = String(time)
        return descreaseTime(time - 1)
      }
      finalizarTarefa()
    }, 1000)
  }
  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o Cronômetro</p>
      <h1 className={style.task}>Voce está atuando na tarefa: {selecionado?.tarefa}</h1>
      <div className={style.relogioWrapper}>
        <Relogio time={time}/>
      </div>
      <Button textBtn={'Começar'} onClick={() => descreaseTime(time)}/>
    </div>
  )
}