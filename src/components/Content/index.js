import './style.css';

import React from 'react';

import DonateButton from '../../components/DonateButton';
import TimerCounter from '../../components/TimerCounter';

const deliveryOrderDate = new Date(2019, 2, 5, 10, 26);
const cancelledDate = new Date(2019, 5, 24, 10, 0);

const Content = ({ className }) => (
  <div className={`${className} content`}>
    <h3>The order was cancelled after waiting for</h3>
    <TimerCounter starDate={deliveryOrderDate} endDate={cancelledDate} />
    <DonateButton className='content__donate-button' />
  </div>
)

export default Content;
