import React from 'react';
import { render } from 'react-dom';
import App from './containers/App'
import SolutionForm from './components/SolutionForm/state';

require('./styles/styles.scss');

render(
  <App>
    <SolutionForm />
  </App>,
  document.querySelector('#root')
);

if (module.hot)
  module.hot.accept()
