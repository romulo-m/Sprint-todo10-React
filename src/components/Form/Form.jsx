import React from 'react'
import Button from '../Button/Button'

const Form = () => {
  return (
    <form action="" className='forms'>
        <h2>Nova Tarefa</h2>
        <label>Titulo</label>
        <input type={text}></input>
        <label>Titulo</label>
        <input type={text}></input>
        <textarea rows={30} cols={10}></textarea>
        {/* <Button conteudo={'Proximo'}/> */}
    </form>
  )
}

export default Form