import React, { useContext } from 'react'
import S from './ClienteIndividual.module.css'


const ClienteIndividual = ({ nome, sobrenome, email, telefone, cep, end1, end2, nasc, cpf, renda }) => {
   
  return (
    <div className={S.card}>
      <section className={S.section}>
        <p><b>Nome:</b> {nome}</p>
        <p><b>Sobrenome:</b> {sobrenome}</p>
        <p><b>Email:</b> {email}</p>
        <p><b>Telefone:</b> {telefone}</p>
        <p><b>Cep:</b> {cep}</p>
        <p><b>Endereço:</b> {end1}</p>
        <p><b>Complemento:</b> {end2}</p>
        <p><b>Nascimento:</b> {nasc}</p>
        <p><b>CPF:</b> {cpf}</p>
        <p><b>Renda:</b> {renda}</p>
      </section>
    </div>
  )
}

export default ClienteIndividual