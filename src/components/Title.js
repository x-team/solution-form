import React from 'react'
import cmz from 'cmz';

const colors = {
  black: '#272334'
}

const styles = cmz('Title', {
  root: `
    margin: 0px 0px 35px 0px;
  `,
  heading: `
    text-transform: uppercase;
    font-size: 54px;
    margin: 0px;
    font-weight: 800;
    color: ${colors.black};
    letter-spacing: -3px;
  `,
  subHeading: `
    margin-top: 35px;
    font-size: 24px;
  `
});

module.exports = props => <div className={styles.root}>
  {
    props.hasAttempted ?
    <div>
      <h1 className={styles.heading}>Oops!</h1>
      <div className={styles.subHeading}>You haven’t submitted the right solution. Please try again.</div>
    </div> :
    <div>
      <h1 className={styles.heading}>Got it?</h1>
      <div className={styles.subHeading}>Paste the solution below. You get {props.maxAttempts} chances.</div>
    </div>
  }
</div>
