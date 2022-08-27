import React, { createContext, useState } from "react";

export const ClientesContext = createContext()

const ClientesProvider = ({children}) => {

    const [dadosForm, setDadosForm] = useState({
        nome: "",
        sobrenome: "",
        email: "",
        telefone: "",
        cep: "",
        end1: "",
        end2: "",
        nasc: "",
        cpf: "",
        renda: ""
    })

    const [clientes, setClientes] = useState([])

    const [page, setPage] = useState(0)

    function handleChange(e, keyName) {
        setDadosForm({
            ...dadosForm, [keyName]: e.target.value,
        });
    }

    function handleClick(e) {
        e.preventDefault()
        setPage(page + 1);
    }

    function handleBack(e) {
        e.preventDefault()
        setPage(page -1);
    }

    function handleFinalClick(e) {
        e.preventDefault()
        setClientes([...clientes, dadosForm]);
        setDadosForm({
            nome: "",
            sobrenome: "",
            email: "",
            telefone: "",
            cep: "",
            end1: "",
            end2: "",
            nasc: "",
            cpf: "",
            renda: ""
        });
        setPage(page - 2);
    }


    const contexto = {
        dadosForm : dadosForm,
        handleChange : handleChange,
        handleClick : handleClick,
        handleFinalClick : handleFinalClick,
        handleBack : handleBack,
        clientes : clientes,
        page : page
    }

    return (
        <ClientesContext.Provider value={contexto}>
            {children}
        </ClientesContext.Provider>
      )

}

export default ClientesProvider