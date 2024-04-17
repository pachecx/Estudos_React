import React from 'react'

export const Cidade = ({cidade, estado, habitantes}) => {
  return (
    <div>
        <p>Cidade: {cidade}</p>
        <p>Estado: {estado}</p>
        <p>Habitantes: {habitantes}</p>
    </div>
  )
}
