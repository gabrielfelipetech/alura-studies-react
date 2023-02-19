import React from 'react'
import { Button } from '../button'
import { Relogio } from './relogio'
import style from './style.module.scss'
export function Cronometro(){
    return (
        <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o Cronômetro</p>
      <div className={style.relogioWrapper}>
        <Relogio />
      </div>
      <Button textBtn={'Começar'}/>
    </div>
    )
}