import React, { useContext } from 'react'
import Button from '../../../components/Button/Button'
import { ClientesContext } from '../../../context/ClientesProvider'
import S from './Form3.module.css'

const Form3 = () => {

  const {dadosForm, handleChange, handleFinalClick, handleBack, clientes, setClientes} = useContext(ClientesContext)


  return (
    <div className={S.container}>
      <form className='forms'>
          <h2>Preencha seus dados:</h2>
          <fieldset className={S.fieldset}>
            <label htmlFor="">Data de Nascimento</label>
            <input type="date" 
            value={dadosForm.nasc}
            onChange={(e) => handleChange(e, 'nasc')}
            /> 
            <label htmlFor="">CPF</label>
            <input type="text" 
            value={dadosForm.cpf}
            onChange={(e) => handleChange(e, 'cpf')}
            />
            <label htmlFor="">Renda Mensal</label>
            <input type="text" 
            value={dadosForm.renda}
            onChange={(e) => handleChange(e, 'renda')}
            />
          </fieldset>
          <div className={S.divBtn}>
            <Button onClick={handleBack} className={S.btn} conteudo={'Anterior'}/>
            <Button onClick={handleFinalClick} className={S.btn} conteudo={'Salvar'}/>
          </div>
          
      </form>
    </div>
  )
}

export default Form3