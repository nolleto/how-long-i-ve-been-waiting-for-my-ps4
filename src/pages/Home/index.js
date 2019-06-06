import './style.css';

import React from 'react';

import Content from '../../components/Content';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

const App = () => (
  <div className='home'>
    <Header />
    <Content className='home__content' />
    <Footer />
  </div>
  );

export default App;
