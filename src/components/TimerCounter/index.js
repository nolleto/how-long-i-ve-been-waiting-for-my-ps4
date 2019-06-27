import './style.css';

import React, { useEffect, useState } from 'react'

const formatValue = (value, maxValue) => value % maxValue;

const getDiffCreator = (starDate) => () => {
  const now = new Date();
  const difference = now.getTime() - starDate.getTime();
  const seconds = Math.floor(difference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  return {
    days,
    hours: formatValue(hours, 24),
    minutes: formatValue(minutes, 60),
    seconds: formatValue(seconds, 60),
  }
}

const useTimeCounter = ({ starDate, endDate, setTime }) => {
  const getDiff = getDiffCreator(starDate);

  return useEffect(() => {
    const updateTime = () => setTime(getDiff());
    const intervalId = setInterval(updateTime, 1000);

    updateTime();

    return () => clearInterval(intervalId);
  }, [])
}

const TimerCounter = ({ starDate, endDate }) => {
  const [time, setTime] = useState('');

  useTimeCounter({ starDate, endDate, setTime });

  return (
    <span className='timer-counter'>
      {time && `${time.days} days ${time.hours} hours ${time.minutes} minutes ${time.seconds} seconds`}
    </span>
  );
}

export default TimerCounter;
