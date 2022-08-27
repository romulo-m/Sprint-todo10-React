import React, { useContext } from 'react'
import Button from '../../../components/Button/Button'
import { ClientesContext } from '../../../context/ClientesProvider'
import S from './Form.module.css'

const Form = () => {

  const {dadosForm, handleChange, handleClick} = useContext(ClientesContext)
  
  return (
    <div className={S.container}>
      <form className='forms'>
          <h2>Preencha seus dados:</h2>
          <fieldset className={S.fieldset}>
            <label htmlFor="">Nome</label>
            <input type="text" 
            value={dadosForm.nome}
            onChange={(e) => handleChange(e, 'nome')}
            /> 
            <label htmlFor="">Sobrenome</label>
            <input type="text"
            value={dadosForm.sobrenome}
            onChange={(e) => handleChange(e, 'sobrenome')}

            />
            <label htmlFor="">Email</label>
            <input type="email" 
            value={dadosForm.email}
            onChange={(e) => handleChange(e, 'email')}
            />
            <label htmlFor="">Telefone</label>
            <input type="tel" 
            value={dadosForm.telefone}
            onChange={(e) => handleChange(e, 'telefone')}
            />
          </fieldset>
          <div className={S.divBtn}>
            <Button onClick={handleClick} className={S.btn} conteudo={'Proximo'}/>
          </div>
          
      </form>
    </div>
  )
}

export default Form