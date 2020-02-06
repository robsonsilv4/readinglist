import React, { Component } from 'react';

export default class Navbar extends Component {
  render() {
    return (
      <nav>
        <h1>Lista de Leitura</h1>
        <ul>
          <li>Inicio</li>
          <li>Sobre</li>
          <li>Contato</li>
        </ul>
      </nav>
    );
  }
}
