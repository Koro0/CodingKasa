import React from 'react';
import './styles/App.scss';
import Header from './components/header';
import Footer from './components/footer';
import RouterPages from './components/routerPages';

function App() {
  return (
    <>
      <Header />
      <main>
        <RouterPages />
      </main>
      <Footer />
    </>
  );
}

export default App;
