import React from 'react';
import axios from 'axios';
import './instituicoes.css'

export default class InstituicoesList extends React.Component {
  state = {
    instituicoes: []
  }

  componentDidMount() {
    axios.get(`http://localhost:3333/instituicoes`)
      .then(res => {
        const instituicoes = res.data;
        this.setState({ instituicoes });
      })
  }

  render() {
    return (
      <div className='wrapper'>
        <ul className='list'>
          { this.state.instituicoes.map(instituicao => 
          <div className='card'>
            <li>Nome da Ong: {instituicao.nome}</li>
            <li>Rua: {instituicao.rua}</li>
            <li>Bairro: {instituicao.bairro}</li>
            <li>Cidade: {instituicao.cidade}</li>
            <li>Data de Inauguração: {instituicao.data_inauguracao}</li>
          </div>)}
        </ul>
      </div>
    )
  }
}