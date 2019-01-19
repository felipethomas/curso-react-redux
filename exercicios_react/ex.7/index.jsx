import React from 'react'
import ReactDOM from 'react-dom'
import Member from './member'
import Family from './family'

ReactDOM.render(
    <Family>
        <Member name='Guilherme' lastName='Silva' />
    </Family>
, document.getElementById('app'))

