import './style.css';

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import React from 'react';
import TimerCounter from '../../components/TimerCounter';

const deliveryOrderDate = new Date(2019, 2, 5, 10, 26);

const App = () => (
  <div className='home'>
    <Header />

    <div className='home__content'>
      <TimerCounter starDate={deliveryOrderDate} />
    </div>

    <Footer />
  </div>
  );

export default App;
