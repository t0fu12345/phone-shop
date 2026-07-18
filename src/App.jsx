import { useState, useEffect } from 'react';
import HomePage from './components/HomePage';
import ProductCategory from './components/ProductCategory';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const handleNavigate = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    const props = {
      onNavigate: handleNavigate,
      theme,
      onToggleTheme: toggleTheme
    };
    switch (currentPage) {
      case 'home':
        return <HomePage {...props} />;
      case 'category':
        return <ProductCategory {...props} />;
      case 'detail':
        return <ProductDetail {...props} />;
      case 'cart':
        return <Cart {...props} />;
      default:
        return <HomePage {...props} />;
    }
  };

  return (
    <div className="app-container min-h-screen bg-background text-foreground transition-colors duration-300">
      {renderPage()}
    </div>
  );
}

export default App;
