import './style.css';

import React from 'react';

import DonateButton from '../../components/DonateButton';
import TimerCounter from '../../components/TimerCounter';

const deliveryOrderDate = new Date(2019, 2, 5, 10, 26);

const Content = ({ className }) => (
  <div className={`${className} content`}>
    <TimerCounter starDate={deliveryOrderDate} />
    <DonateButton className='content__donate-button' />
  </div>
)

export default Content;
