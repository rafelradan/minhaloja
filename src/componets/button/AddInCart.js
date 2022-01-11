import React from 'react'
import { useContext } from 'react'

import { CartContext } from '../../contexts/contextCart'

import '../../globalStyle.scss'

export default function ButtonCart(id, name) {
  const { carttNumber, setCarttNumber } = useContext(CartContext)

  function alterNumber() {
    const myProducts = localStorage.getItem('storageProducts')
    const savedProducts = JSON.parse(myProducts) || [].length

    setCarttNumber(savedProducts.length)
    console.log(id, name)
  }

  return (
    <button id={id} className="btn-card" onClick={alterNumber}>
      ADICIONAR AO CARRINHO
    </button>
  )
}
