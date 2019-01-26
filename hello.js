import React from 'react';
import { date } from './get-date'
export const Hello = (props) =>
    <div>
      <h2>{props.title}</h2>
      <p>Date: <span>{props.date}/{props.month}/{props.year}</span></p>
      <p>Weekend: {props.isWeekend(props.day) ? 'yes' : 'no'}</p>
      <p>Single: {props.status ? 'single' : 'engaged'}</p>
      <p>{props.oss.map((os, i) => <span key={i}>{os} </span>)}</p>
      <p>{Object.values(props.computer).map((value, i) => <span key={i}>{value} </span>)}</p>
    </div>
