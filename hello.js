import React from 'react';
import { date } from './get-date'
export const Hello = (props) => {
  console.log(props);
  return(
    <div>
      <h2>{props.title}</h2>
      <p>Date: <span>{props.date}/{props.month}/{props.year}</span></p>
      <p>Weekend: {props.isWeekend(props.day) ? 'yes' : 'no'}</p>
      <p>Single: {props.status ? 'single' : 'engaged'}</p>
      <p>{props.oss.map(os => <span>{os} </span>)}</p>
      <p>{Object.values(props.computer).map(value => <span>{value} </span>)}</p>
    </div>
  )
}
