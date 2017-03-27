import React, { PropTypes } from 'react'
import cmz from 'cmz';
import Title from '../components/Title';

const colors = {
  white: '#fff',
  gray: '#938e9f',
  red: '#ff5964',
  redLight: '#FF737B',
  redDark: '#e4414c'
}

const Util = cmz('SolutionFormUtil', {
  maxWidth: 'max-width: 740px',
  noOutline: 'outline: none',
  noTextDecoration: 'text-decoration: none'
})

const styles = cmz('SolutionForm', {
  root: [
    Util.maxWidth,
    `
      text-align: center;
      min-width: 320px;
      margin: 0px auto;
    `
  ],
  form: [
    Util.maxWidth,
    `
      margin: 30px auto;
      position: relative;
    `
  ],
  textarea: [
    Util.noOutline,
    `
      display: block;
      width: 100%;
      height: 156px;
      resize: none;
      border: ${colors.gray} solid 3px;
      border-radius: 4px;
      font-size: 28px;
      padding: 10px 20px;
      box-sizing: border-box;
  `
  ],
  button: [
    Util.noOutline,
    Util.noTextDecoration,
    `
      & {
        text-transform: uppercase;
        background: ${colors.red};
        border: transparent solid 2px;
        border-radius: 3px;
        color: ${colors.white};
        cursor: pointer;
        font-size: 1rem;
        margin: 0.25em;
        min-width: 290px;
        padding: .75em 2.4em;
        transition: all .3s ease-out;
        font-weight: 700;
      }
      &:hover {
        background: ${colors.redLight};
        border-color: transparent;
      }
      &:active {
        background: ${colors.redDark};
        transition: none;
      }
      &[disabled] {
        background-color: ${colors.gray};
        pointer-events: none;
      }
    `]
});

const SolutionForm = (props) => {
  return(
    <div className={styles.root}>
      <Title hasAttempted={props.hasAttempted}
        maxAttempts={props.maxAttempts} />
      <form className={styles.form}>
        <textarea className={styles.textarea}
          onChange={props.onValueChange}
          placeholder={'Solution'}
          name='solution'
        />
      </form>
      <div>
      {
        props.isSubmitting ?
        <input className={styles.button} type="button" disabled={true} value={'Checking...'} /> :
        <input className={styles.button} type="button" disabled={props.isButtonDisabled} value={`Submit (${props.takenAttempts} of ${props.maxAttempts} attempts)`} />
      }
      </div>
    </div>
  )
}

SolutionForm.propTypes = {
  solutionValue: PropTypes.string.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
  hasAttempted: PropTypes.bool.isRequired,
  takenAttempts: PropTypes.number.isRequired,
  isButtonDisabled: PropTypes.bool.isRequired,
  maxAttempts: PropTypes.number.isRequired,
  onValueChange: PropTypes.func.isRequired
}

module.exports = SolutionForm
