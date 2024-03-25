import React from 'react'

export const Car = ({cor, km, ano}) => {
  return (
    <div>
        <h2>Car</h2>
        <p>Cor: {cor}</p>
        <p>Km: {km}</p>
        <p>Ano: {ano}</p>
    </div>
  )
}
