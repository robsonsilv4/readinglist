import React from 'react';
import Navbar from './components/navbar';
import BookList from './components/bookList';
import ThemeContextProvider from './contexts/themeContext';
import ThemeToggle from './components/themeToggle';

function App() {
  return (
    <ThemeContextProvider>
      <div className="App">
        <Navbar />
        <BookList />
        <ThemeToggle />
      </div>
    </ThemeContextProvider>
  );
}

export default App;
