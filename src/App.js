import React from 'react';
import Navbar from './components/navbar';
import BookList from './components/bookList';
import ThemeContextProvider from './contexts/themeContext';
import ThemeToggle from './components/themeToggle';
import AuthContextProvider from './contexts/authContext';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />
          <BookList />
          <ThemeToggle />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
