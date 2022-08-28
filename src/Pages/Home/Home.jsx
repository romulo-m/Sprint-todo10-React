import React from 'react'
import image from '../../assets/Forms-rafiki.svg'
import S from './Home.module.css'


const Home = () => {

  return (
    <main className={S.main}>
      <div className={S.container}>
      <h2>Bem-vindo ao sistema de cadastro de clientes!</h2>
      <hr />
        <picture className={S.picture}>
          <img src={image} alt="Imagem forms" />
        </picture>        
      </div>
    </main>
    
  )
}

export default Home