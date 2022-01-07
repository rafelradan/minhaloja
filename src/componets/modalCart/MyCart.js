import React from 'react'

import './style.scss'

export default function MyCart() {
  const readProducts = localStorage.getItem('storageProducts')
  const result = JSON.parse(readProducts) || []

  return (
    <div className="modal-cart">
      <h4 className="title-cart">Meu Carrinho</h4>

      <div className="products-in-cart">
        <div className="content">
          {result.map(productData => {
            return (
              <section className="prod">
                <span key={productData.idProduct} className="prod-name">
                  {productData.titleProduct}
                </span>

                <span className="prod-value">
                  R$ {productData.valueProduct}
                </span>

                <button className="prod-btn-remove">x</button>
              </section>
            )
          })}
        </div>
      </div>

      <div className="total">
        <span className="txt-total">TOTAL:</span>
        <span className="txt-sum">R$ 85,00</span>
      </div>
    </div>
  )
}
