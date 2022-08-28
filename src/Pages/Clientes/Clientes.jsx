import React, { useContext } from 'react'
import { ClientesContext } from '../../context/ClientesProvider'
import ClienteIndividual from './ClienteIndividual/ClienteIndividual'
import S from './Clientes.module.css'

const Clientes = () => {

  const {clientes} = useContext(ClientesContext)

  return (
    <div className={S.container}>
      <h2>Lista de Clientes</h2>
      <div className={S.cards}>
        { clientes.length > 0 ?
        clientes.map((cliente, index) => {
          return (
            <ClienteIndividual
            key={index}
            nome={cliente.nome}
            sobrenome={cliente.sobrenome}
            email={cliente.email}
            telefone={cliente.telefone}
            cep={cliente.cep}
            end1={cliente.end1}
            end2={cliente.end2}
            nasc={cliente.nasc}
            cpf={cliente.cpf}
            renda={cliente.renda}
            />
          ) 
        }): <h3>Ainda não tem nada aqui...</h3>} 
      </div>      
    </div>
  )
}

export default Clientes