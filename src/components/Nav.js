import React from 'react'

export default function Nav() {
  return (
    <div className='nav'>
      <div className="log">
        <h2>kako.ai</h2>
      </div>
      <div className="options">
        <div className="options-wrapper">
          <option value="but">Buy</option>
          <option value="sell">Sell</option>
          <option value="rent">Rent</option>
          <option value="mortgage">Mortgage</option>
          <option value="pricing">Pricing</option>
          <div className="resources">Resources</div>
        </div >
      </div>
    </div>
  )
}
