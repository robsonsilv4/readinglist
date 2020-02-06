import React from 'react';
import Navbar from './components/navbar';
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
