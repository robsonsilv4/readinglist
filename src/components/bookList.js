import React, { Component } from 'react';
import { ThemeContext } from '../contexts/themeContext';

export default class BookList extends Component {
  static contextType = ThemeContext;

  render() {
    const { isLightTheme, light, dark } = this.context;
    const theme = isLightTheme ? light : dark;

    return (
      <div
        className="book-list"
        style={{ color: theme.text, background: theme.bg }}
      >
        <ul>
          <li style={{ background: theme.ui }}>
            Rápido e Devagar: Duas Formas de Pensar
          </li>
          <li style={{ background: theme.ui }}>
            Sapiens: Uma breve história da humanidade
          </li>
          <li style={{ background: theme.ui }}>
            F*Deu Geral. Um Livro Sobre Esperança?
          </li>
        </ul>
      </div>
    );
  }
}
