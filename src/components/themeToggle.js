import React, { Component } from 'react';
import { ThemeContext } from '../contexts/themeContext';

export default class ThemeToggle extends Component {
  static contextType = ThemeContext;

  render() {
    const { toggleTheme } = this.context;
    return <button onClick={toggleTheme}>Mudar tema</button>;
  }
}
