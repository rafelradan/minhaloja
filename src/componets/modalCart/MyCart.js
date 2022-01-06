import React from 'react'

import './style.scss'

export default function MyCart() {
  return (
    <div className="modal-cart">
      <h4 className="title-cart">Meu Carrinho</h4>

      <div className="products-in-cart">
        <div className="prod">
          <span className="prod-name">MOUSE SEM FIO BLUETOTH</span>
          <span className="prod-value">R$ 85,00</span>
          <button className="prod-btn-remove">x</button>
        </div>
      </div>

      <div className="total">
        <span className="txt-total">TOTAL:</span>
        <span className="txt-sum">R$ 85,00</span>
      </div>
    </div>
  )
}
