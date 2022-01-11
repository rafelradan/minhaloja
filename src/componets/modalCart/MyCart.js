import React, { useEffect, useContext } from 'react'
import { useState } from 'react/cjs/react.development'

import './style.scss'
import { CartContext } from '../../contexts/contextCart'

export default function MyCart() {
  const { carttNumber, setCarttNumber } = useContext(CartContext)
  const [prodInCart, setProdInCart] = useState([])
  const [valTotalProd, setValTotalProd] = useState(0)

  const readProducts = localStorage.getItem('storageProducts')
  const result = JSON.parse(readProducts) || []

  useEffect(() => {
    setProdInCart(result)
    sumValues()
  }, [readProducts])

  let valTotal = 0

  function sumValues() {
    result.forEach(productV => {
      valTotal = valTotal + productV.valueProduct
    })

    setValTotalProd(valTotal)
  }

  function dellProduct(id) {
    var restProducts = result.filter(prodInCart => {
      return prodInCart.idProduct !== id
    })

    localStorage.setItem('storageProducts', JSON.stringify(restProducts))

    setProdInCart(restProducts)
    setCarttNumber(restProducts.length)

    document.getElementById(id).removeAttribute('disabled')
    document.getElementById(id).innerText = 'ADICIONAR AO CARRINHO'
    document.getElementById(id).style.background = '#7047EB'
    document.getElementById(id).style.cursor = 'pointer'
  }

  return (
    <div className="modal-cart">
      <h4 className="title-cart" onClick={sumValues}>
        Meu Carrinho
      </h4>
      <hr />
      <h5>{carttNumber}</h5>

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
        <span className="txt-sum">R$ {valTotalProd}</span>
      </div>
    </div>
  )
}
