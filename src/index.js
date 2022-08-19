import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
import Pedido from './Pedido'

const App = () => {
  return (
    // componente principal
    <div className='container border rounded mt-2'>
      <div className='row border-bottom m-2'>
        <h1 className='display-5 text-center'>Seus pedidos</h1>
      </div>
      {/*Linha para o primeiro pedido */}
      <div className="row">
        {/*Controle de colunas para resposividade */}
        <div className="col-sm-8 col-md-6 m-2">
          <Pedido
            data="20/04/2021"
            icone="fas  fa-hdd fa-2x"
            titulo="SSD"
            descricao="SSD Kingston A400 - Sata"
          />
        </div>
      </div>
      {/*Linha para o segundo pedido */}
      <div className="row">
        <div className="col-sm-8 col-md-6 m-2">
        <Pedido
            data="19/11/2021"
            icone="fa-solid fa-book fa-2x"
            titulo="Livro"
            descricao="Concrete Mathematics - Donald Knuth"
          />
        </div>
      </div>
      {/*Linha para o terceiro pedido */}
      <div className="row">
        <div className="col-sm-8 col-md-6 m-2">
        <Pedido
            data="21/01/2021"
            icone="fas fa-laptop fa-2x"
            titulo="Notebook"
            descricao="Notebook Dell - 8Gb - i5"
          />
        </div>
      </div>


    </div>

  )
}


ReactDOM.render(
  <App />,
  document.querySelector('#root')
)