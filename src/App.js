import { useState } from 'react'

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

  const [product, setProduct] = useState({
    idProduct: 0,
    titleProduct: '',
    valueProduct: 0
  })

  function addInCart(id, title, value) {
    setProduct({
      idProduct: id,
      titleProduct: title,
      valueProduct: value
    })

    let prodData = {
      idProduct: id,
      titleProduct: title,
      valueProduct: value
    }

    const myList = localStorage.getItem('storageProducts')
    const savedProducts = JSON.parse(myList) || []

    savedProducts.push(prodData)
    localStorage.setItem('storageProducts', JSON.stringify(savedProducts))

    console.log(product)
  }

  return (
    <div className="App">
      <header className="header">
        <div className="minhaloja">
          <span>Minha Loja</span>
        </div>

        <div className="search">
          <input className="search-inp" />
          <button className="clean-btn">
            <img src={ImgClean} alt="clean" />
          </button>
          <button className="search-btn">Filtrar</button>
        </div>

        <div className="car">
          <div className="img-car">
            <img src={ImgCar} alt="car" />
          </div>

          <div className="text-car">
            <span className="title-car">Carrinho</span>
            <span className="number-products">3 produtos</span>
          </div>
        </div>
      </header>

      <section className="body">
        <div className="my-cart">
          <MyCart />
        </div>
        <div className="contents">
          {products.map(indProduct => {
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
                    id="btnAddInCart"
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
  )
}

export default App
