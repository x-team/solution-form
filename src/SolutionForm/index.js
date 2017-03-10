import React from 'react'

module.exports = props => <div className="component-SolutionForm">
  <div className='title'>
    <h1 className='heading'>{props.heading}</h1>
    <h2 className='subHeading'>{props.subHeading}</h2>
    <textarea
      onChange={ props.onValueChange }
      placeholder={'Solution'}
      name='solution'
      className='block'
    />
    <div>
    {
      props.isSubmitting ?
      <span>Checking...</span> :
      <input type="button" disabled={props.isButtonDisabled} value={props.buttonText} />
    }
    </div>
  </div>
</div>
