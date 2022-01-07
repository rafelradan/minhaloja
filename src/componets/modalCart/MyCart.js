import React, { useEffect } from 'react'
import { useState } from 'react/cjs/react.development'

import './style.scss'

export default function MyCart() {
  const [prodInCart, setProdInCart] = useState([])

  const readProducts = localStorage.getItem('storageProducts')
  const result = JSON.parse(readProducts) || []

  useEffect(() => {
    setProdInCart(result)
  }, [])

  function dellProduct(id) {
    var restProducts = result.filter(prodInCart => {
      return prodInCart.idProduct !== id
    })

    localStorage.setItem('storageProducts', JSON.stringify(restProducts))

    setProdInCart(restProducts)
    console.log(prodInCart)
  }

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

                <button
                  className="prod-btn-remove"
                  onClick={() => dellProduct(productData.idProduct)}
                >
                  x
                </button>
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
