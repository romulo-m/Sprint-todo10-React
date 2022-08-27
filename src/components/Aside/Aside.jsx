import React from 'react'
import { Link } from 'react-router-dom'
import S from './Aside.module.css'

const Aside = () => {
  return (
    <aside className={S.aside}>
        <nav className={S.nav}>
            <ul className={S.lista}>
                <Link className={S.linha} to='/home'>Home</Link>
                <Link className={S.linha} to='/cadastro'>Cadastro</Link>
                <Link className={S.linha} to='/clientes'>Clientes</Link>                
            </ul>
        </nav>
    </aside>
  )
}

export default Aside