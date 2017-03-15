import React from 'react'
import { render } from 'react-dom'
import SolutionForm from './SolutionForm/state'

render(
  <SolutionForm />,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept()
}
