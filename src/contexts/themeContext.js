import React, { Component, createContext } from 'react';

export const ThemeContext = createContext();

export default class ThemeContextProvider extends Component {
  state = {
    light: { text: '#555', ui: '#ddd', bg: '#eee' },
    dark: { text: '#ddd', ui: '#333', bg: '#555' },
    isLightTheme: true,
  };

  render() {
    return (
      <ThemeContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}
