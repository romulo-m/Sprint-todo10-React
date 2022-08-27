import React, { useContext } from 'react'
import Button from '../../../components/Button/Button'
import { ClientesContext } from '../../../context/ClientesProvider'
import S from './Form2.module.css'

const Form2 = () => {

  const {dadosForm, handleChange, handleClick, handleBack} = useContext(ClientesContext)

  return (

    <div className={S.container}>
      <form className='forms'>
          <h2>Preencha seus dados:</h2>
          <fieldset className={S.fieldset}>
            <label htmlFor="">CEP</label>
            <input type="text" 
            value={dadosForm.cep}
            onChange={(e) => handleChange(e, 'cep')}
            /> 
            <label htmlFor="">Endereço 1:</label>
            <input type="text"
            value={dadosForm.end1} 
            onChange={(e) => handleChange(e, 'end1')}
            />
            <label htmlFor="">Endereço 2:</label>
            <input type="text" 
            value={dadosForm.end2} 
            onChange={(e) => handleChange(e, 'end2')}
            />
          </fieldset>
          <div className={S.divBtn}>
            <Button onClick={handleBack} className={S.btn} conteudo={'Anterior'}/>
            <Button onClick={handleClick} className={S.btn} conteudo={'Proximo'}/>
          </div>
          
      </form>
    </div>
  )
}

export default Form2