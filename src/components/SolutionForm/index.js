import React from 'react'

module.exports = props => <div className="component-SolutionForm">
  <div className='title'>
    <h1 className='heading'>{props.heading}</h1>
    <h2 className='subheading'>{props.subheading}</h2>
    <textarea
      onChange={ props.onFieldChange }
      placeholder={'Solution'}
      name='solution'
      className='block'
    />
    <div>
      <input type="button" disabled={props.buttonDisabled} value={props.button} />
    </div>
  </div>
</div>
