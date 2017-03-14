import React from 'react'

module.exports = props => <div className="title">
  {
    props.hasAttempted ?
    <div>
      <h1 className='heading'>Oops!</h1>
      <h2 className='subHeading'>You haven’t submitted the right solution. Please try again.</h2>
    </div> :
    <div>
      <h1 className='heading'>Got it?</h1>
      <h2 className='subHeading'>Paste the solution below. You get {props.maxAttempts} chances.</h2>
    </div>
  }
</div>
