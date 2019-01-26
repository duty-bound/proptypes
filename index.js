import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import { Hello } from './hello'
import { date } from './get-date'

const mountNode = document.getElementById('mountNode')

const Component = () =>
  <Fragment>
    <h1>Proptypes</h1>
    <Hello
      title='Hello'
      date={date.getDate() + 1}
      month={date.getMonth() + 1}
      year={date.getYear() + 1900}
      day={date.getDay()}
      isWeekend={(day) => day === 0 || day === 6}
      status={true}
      oss={['ubuntu', 'lubuntu']}
      computer={ { brand: 'lenovo', model: 'G505'} }
    />
  </Fragment>

ReactDOM.render(<Component />, mountNode)
