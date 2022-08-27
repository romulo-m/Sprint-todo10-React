import React from 'react'
import S from './Button.module.css'

const Button = ({onClick, conteudo, className}) => {
  return (
    <button onClick={onClick} className={className}>{conteudo}</button>
  )
}

export default Button