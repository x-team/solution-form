import React from 'react'
import Component from './index.js'

const maxAttempts = 3;
const states = {};

states.init = {
  solutionValue: '',
  isSubmitting: false,
  hasAttempted: false,
  takenAttempts: 1
}

states.wrong = {
  ...states.init,
  hasAttempted: true
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
    return <Component { ...this.state }
      isButtonDisabled={ !this.state.solutionValue }
      maxAttempts={ maxAttempts }
      onValueChange={ this.handleValueChange } />
  }
})
