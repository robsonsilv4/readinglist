import React from 'react';
import Navbar from './navbar';
import BookList from './components/bookList';
import ThemeContextProvider from './contexts/themeContext';

function App() {
  return (
    <ThemeContextProvider>
      <div className="App">
        <Navbar />
        <BookList />
      </div>
    </ThemeContextProvider>
  );
}

export default App;
