import React from 'react'
import S from './Aside.module.css'

const Aside = () => {
  return (
    <aside className={S.aside}>
        <nav className={S.nav}>
            <ul className={S.lista}>
                <li className={S.linha}>
                    <a className={S.item} href="">Cadastrar</a>
                </li>
                <li className={S.linha}>
                    <a className={S.item} href="">Clientes</a>
                </li>
            </ul>
        </nav>
    </aside>
  )
}

export default Aside