import './globalStyle.scss'

import ImgClean from './img/imgClean.svg'
import ImgCar from './img/imgCar.svg'

function App() {
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
        <div className="card">
          <div className="title-card">
            <h5>MOUSE SEM FIO BLUETOOTH</h5>
          </div>

          <div className="img-card">
            <img src="" alt="mouse" />
          </div>
        </div>

        <div className="bottom-card">
          <span>R$ 85,00</span>
          <button className="btn-card">ADICIONAR</button>
        </div>

        <div className="card">
          <div className="title-card">
            <h5>TECLADO SEM FIO BLUETOOTH</h5>
          </div>

          <div className="img-card">
            <img src="" alt="teclado" />
          </div>
        </div>

        <div className="bottom-card">
          <span>R$ 150,00</span>
          <button className="btn-card">ADICIONAR</button>
        </div>

        <div className="card">
          <div className="title-card">
            <h5>FONE SEM FIO BLUETOOTH</h5>
          </div>

          <div className="img-card">
            <img src="" alt="fone" />
          </div>
        </div>

        <div className="bottom-card">
          <span>R$ 97,50</span>
          <button className="btn-card">ADICIONAR</button>
        </div>
      </section>
    </div>
  )
}

export default App
