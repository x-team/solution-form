import React from 'react'
import Title from '../components/Title';

module.exports = props => <div className="component-SolutionForm">
  <Title
    hasAttempted={ props.hasAttempted }
    maxAttempts={ props.maxAttempts } />
  <textarea
    onChange={ props.onValueChange }
    placeholder={'Solution'}
    name='solution'
    className='block' />
  <div>
    {
      props.isSubmitting ?
      <span>Checking...</span> :
      <input type="button" disabled={props.isButtonDisabled} value={`Submit (${props.takenAttempts} of ${props.maxAttempts} attempts)`} />
    }
  </div>
</div>
