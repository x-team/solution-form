import React from 'react'
import { render } from 'react-dom'
import SolutionForm from './SolutionForm/state'

render(
  <div>
    <SolutionForm />
  </div>,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept()
}
