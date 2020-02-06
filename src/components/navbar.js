import React, { Component } from 'react';
import { ThemeContext } from '../contexts/themeContext';

export default class Navbar extends Component {
  // static contextType = ThemeContext;

  render() {
    // const { isLightTheme, light, dark } = this.context;
    // const theme = isLightTheme ? light : dark;

    return (
      <ThemeContext.Consumer>
        {context => {
          const { isLightTheme, light, dark } = context;
          const theme = isLightTheme ? light : dark;

          return (
            <nav style={{ background: theme.ui, color: theme.text }}>
              <h1>Lista de Leitura</h1>
              <ul>
                <li>Inicio</li>
                <li>Sobre</li>
                <li>Contato</li>
              </ul>
            </nav>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}
