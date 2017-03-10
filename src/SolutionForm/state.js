import React from 'react'

import Component from './index.js'

const takenAttempts = 1;
const maxAttempts = 3;

const states = {};

states.init = {
  solutionValue: '',
  isValid: false,
  isSubmitting: false,
  heading: 'Got it?',
  subHeading: 'Paste the solution below. You get ${maxAttempts} chances.',
  buttonText: `Submit (${takenAttempts} of ${maxAttempts} attempts)`,
}

states.wrong = {
  ...states.init,
  isValid: false,
  heading: 'Oops!',
  subheading: `You haven’t submitted the right solution. Please try again.`,
}

states.submitting = {
  ...states.init,
  isSubmitting: true
}


module.exports = React.createClass({
  displayName: 'State',

  getInitialState: function() {
    return states.init
  },

  handleValueChange: function(event) {
    this.setState({
      solutionValue: event.target.value
    })
  },

  render: function () {
    return <Component {...this.state}
      isButtonDisabled={!this.state.solutionValue}
      onValueChange={ this.handleValueChange } />
  }
})
