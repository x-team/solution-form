import React from 'react'

import Component from './index.js'

const takenAttempts = 1;
const maxAttempts = 3;

const states = {};

states.init = {
  fieldValue: '',
  heading: 'Got it?',
  subheading: 'Paste the solution below. You get 3 chances.',
  button: `Submit (${takenAttempts} of ${maxAttempts} attempts)`,
}

states.wrong = {
  ...states.init,
  heading: 'Oops!',
  subheading: `You haven’t submitted the right solution
Please try again.`,
}


module.exports = React.createClass({
  displayName: 'State',

  getInitialState: function () {
    return states.init
  },

  handleFieldChange: function (event) {
    this.setState({
      fieldValue: event.target.value,
    })
  },

  render: function () {
    return <Component {...this.state} buttonDisabled={!this.state.fieldValue} onFieldChange={ this.handleFieldChange }/>
  }
})
