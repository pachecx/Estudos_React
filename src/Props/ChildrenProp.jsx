import React from 'react'

export const ChildrenProp = ({children}) => {
  return (
    <div>
        <h1>Conteúdo do ChildrenProp:</h1>
        <p>Aqui!!</p>
        {children}
    </div>
  )
}
//A Tag deve possuir abertura e fechamento!!!