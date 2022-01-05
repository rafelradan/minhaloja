import './globalStyle.scss'

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="minhaloja">
          <span>Minha Loja</span>
        </div>

        <div className="search">
          <input className="search-inp">
            <button className="filter">Filtar</button>

            <button className="clean">X</button>
          </input>
        </div>

        <div className="car">
          <div className="img-car">
            <img src="" alt="car" />
          </div>

          <div className="text-car">
            <span>Carrinho</span>
            <span>3 produtos</span>
          </div>
        </div>
      </header>

      <section className='body'>
        <div className='card'>
          <div className='title-card'>
            <h5>MOUSE SEM FIO BLUETOOTH</h5>
          </div>

          <div className='img-card'>
            <img src='' alt='mouse' />
          </div>
        </div>

        <div className='bottom-card'>
          <span>R$ 85,00</span>
          <button className='btn-card'>ADICIONAR</button>
        </div>

        <div className='card'>
          <div className='title-card'>
            <h5>TECLADO SEM FIO BLUETOOTH</h5>
          </div>

          <div className='img-card'>
            <img src='' alt='teclado' />
          </div>
        </div>

        <div className='bottom-card'>
          <span>R$ 150,00</span>
          <button className='btn-card'>ADICIONAR</button>
        </div>

        <div className='card'>
          <div className='title-card'>
            <h5>FONE SEM FIO BLUETOOTH</h5>
          </div>

          <div className='img-card'>
            <img src='' alt='fone' />
          </div>
        </div>

        <div className='bottom-card'>
          <span>R$ 97,50</span>
          <button className='btn-card'>ADICIONAR</button>
        </div>

      </section>

    </div>
  )
}

export default App
