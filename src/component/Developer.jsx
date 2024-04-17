import React from 'react'

export const Developer = ({nome, idade, area, staks}) => {
  return (
    <div>
        <h1>Nome: {nome}</h1>
        <h2>Idade: {idade}</h2>
        <h2>Area: {area}</h2>
        <h2>Staks: {staks}</h2>
    </div>
  )
}
