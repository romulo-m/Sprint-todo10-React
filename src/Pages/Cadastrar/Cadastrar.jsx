import { useContext } from 'react'
import { ClientesContext } from '../../context/ClientesProvider'
import Form from './Form/Form'
import Form2 from './Form2/Form2'
import Form3 from './Form3/Form3'
import S from './Cadastrar.module.css'

const Cadastrar = () => {

  const {page} = useContext(ClientesContext)
  
  
  return (
    <section className={S.container}>
        {page === 0 && (<Form />)}
        {page === 1 && (<Form2 />)}
        {page === 2 && (<Form3 />)}
    </section>
  )
}

export default Cadastrar