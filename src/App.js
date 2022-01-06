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
      objValue: 'R$ 85,00'
    },
    {
      id: '02',
      objTitle: 'TECLADO SEM FIO BLUETOOTH',
      objImg: ImgKeyboard,
      objValue: 'R$ 150,00'
    },
    {
      id: '03',
      objTitle: 'FONE SEM FIO BLUETOOTH',
      objImg: ImgHeadset,
      objValue: 'R$ 97,50'
    }
  ]

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
                  <span>{indProduct.objValue}</span>
                  <button className="btn-card">ADICIONAR AO CARRINHO</button>
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
