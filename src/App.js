import { useEffect, useState } from 'react'
import CartProvider from './contexts/contextCart'

import './globalStyle.scss'

import MyCart from './componets/modalCart/MyCart'
import ImgClean from './img/imgClean.svg'
import ImgCar from './img/imgCar.svg'

import ImgMouse from './img/imgMouse.svg'
import ImgKeyboard from './img/imgKeyboard.svg'
import ImgHeadset from './img/imgHeadset.svg'

function App() {
  const products = [
    {
      id: '01',
      objTitle: 'MOUSE SEM FIO BLUETOOTH',
      objImg: ImgMouse,
      objValue: 85.0
    },
    {
      id: '02',
      objTitle: 'TECLADO SEM FIO BLUETOOTH',
      objImg: ImgKeyboard,
      objValue: 150.0
    },
    {
      id: '03',
      objTitle: 'FONE SEM FIO BLUETOOTH',
      objImg: ImgHeadset,
      objValue: 97.5
    }
  ]

  const [productsList, setProductsList] = useState([{}])
  const [filterProd, setFilterProd] = useState('')
  const [cartNumber, setCartNumber] = useState(0)
  const [showCart, setShowCart] = useState(false)

  useEffect(() => {
    setProductsList(products)

    const myProducts = localStorage.getItem('storageProducts')
    const savedProducts = JSON.parse(myProducts) || [].length
    setCartNumber(savedProducts.length)
  }, [])

  function toggleShowCart() {
    setShowCart(!showCart)
  }

  function cartNumberProd() {
    const myProducts = localStorage.getItem('storageProducts')
    const savedProducts = JSON.parse(myProducts) || [].length

    setCartNumber(savedProducts.length)
  }

  function addInCart(id, title, value) {
    let prodData = {
      idProduct: id,
      titleProduct: title,
      valueProduct: value
    }

    const myList = localStorage.getItem('storageProducts')
    const savedProducts = JSON.parse(myList) || []

    savedProducts.push(prodData)
    localStorage.setItem('storageProducts', JSON.stringify(savedProducts))

    /*  console.log(product) */

    document.getElementById(id).innerText = 'ADICIONADO'
    document.getElementById(id).style.background = '#B4B1BE'
    document.getElementById(id).setAttribute('disabled', 'disabled')
    document.getElementById(id).style.cursor = 'not-allowed'

    cartNumberProd()
  }

  function filterProducts() {
    const result = products.filter(prod => {
      return prod.objTitle.includes(filterProd.toUpperCase())
    })
    setProductsList(result)
  }

  function cleanFilter() {
    setFilterProd('')
    setProductsList(products)
  }

  return (
    <CartProvider>
      <div className="App">
        <header className="header">
          <div className="minhaloja">
            <span>Minha Loja</span>
          </div>

          <div className="search">
            <input
              className="search-inp"
              onChange={e => setFilterProd(e.target.value)}
              value={filterProd}
            />

            <button className="clean-btn" onClick={cleanFilter}>
              <img src={ImgClean} alt="clean" />
            </button>
            <button className="search-btn" onClick={filterProducts}>
              Filtrar
            </button>
          </div>

          <div className="car" onClick={toggleShowCart}>
            <div className="img-car">
              <img src={ImgCar} alt="car" />
            </div>

            <div className="text-car">
              <span className="title-car">Carrinho</span>
              <span id="cartNumber" className="number-products">
                {cartNumber} produtos
              </span>
            </div>
          </div>
        </header>

        <section className="body">
          <div className="my-cart">
            <MyCart
              cartNumber={cartNumber}
              setCartNumber={setCartNumber}
              showCart={showCart}
            />
          </div>
          <div className="contents">
            {productsList.map(indProduct => {
              return (
                <div key={indProduct.id} className="product-card">
                  <div className="title-card">
                    <h5>{indProduct.objTitle}</h5>
                  </div>

                  <div className="img-card">
                    <img src={indProduct.objImg} alt="mouse" />
                  </div>

                  <div className="bottom-card">
                    <span>R$ {indProduct.objValue}</span>

                    <button
                      id={indProduct.id}
                      className="btn-card"
                      onClick={() =>
                        addInCart(
                          indProduct.id,
                          indProduct.objTitle,
                          indProduct.objValue
                        )
                      }
                    >
                      ADICIONAR AO CARRINHO
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </section>
      </div>
    </CartProvider>
  )
}

export default App
