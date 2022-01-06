import React from 'react'

import './style.scss'

export default function MyCart() {
  return (
    <div className="modal-cart">
      <h4 className="title-cart">Meu Carrinho</h4>

      <div className="products-in-cart">
        <span>MOUSE SEM FIO BLUETOTH</span>
        <span>R$ 85,00</span>
      </div>

      <div className="value-total">
        <span>TOTAL:</span>
        <span>Soma</span>
      </div>
    </div>
  )
}
