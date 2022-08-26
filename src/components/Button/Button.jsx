import React from 'react'
import S from './Button.module.css'

const Button = ({onClick, conteudo}) => {
  return (
    <button onClick={onClick} className={S.button}>{conteudo}</button>
  )
}

export default Button