import React from 'react';
import PropTypes from 'prop-types'
import { date } from './get-date'

export const Hello = ({
    title,
    date,
    month,
    year,
    isWeekend,
    day,
    status,
    oss,
    computer
  }) =>
    <div>
      <h2>{title}</h2>
      <p>Date: <span>{date}/{month}/{year}</span></p>
      <p>Weekend: {isWeekend(day) ? 'yes' : 'no'}</p>
      <p>Single: {status ? 'single' : 'engaged'}</p>
      <p>{oss.map((os, i) => <span key={i}>{os} </span>)}</p>
      <p>{Object.values(computer).map((value, i) => <span key={i}>{value} </span>)}</p>
    </div>

//proptypes
//isRequired next
  Hello.propTypes = {
      title: PropTypes.string,
      date: PropTypes.number,
      month: PropTypes.number,
      year: PropTypes.number,
      isWeekend: PropTypes.func,
      day: PropTypes.number,
      status: PropTypes.bool,
      oss: PropTypes.array,
      computer: PropTypes.object,
  }
