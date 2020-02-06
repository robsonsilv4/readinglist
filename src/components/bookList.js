import React, { Component } from 'react';

export default class BookList extends Component {
  render() {
    return (
      <div className="book-list">
        <ul>
          <li>Rápido e Devagar: Duas Formas de Pensar</li>
          <li>Sapiens: Uma breve história da humanidade</li>
          <li>F*Deu Geral. Um Livro Sobre Esperança?</li>
        </ul>
      </div>
    );
  }
}
