import React from 'react'

function ConfigPage() {
  return (
    <div>
        <div>
            <h1>Configure the Auto Bidding</h1>
                <h2>Maximum Bid Amount</h2>
                    <p>An example of bid is an.Bid is defined as command or to offer a certain sum of money for something.</p>
                    <p>amount of money offered to purchase a house. Bid is defined as command or to offer a certain sum of money for something.</p>

                <div>
                    <button className='dark'>$</button>
                </div>
                <div>
                    <p>Get Notifications about your bids</p>
                </div>
                <div>
                    <button className='primary'>%</button>
                </div>
                <div>
                    <p></p>
                </div>
                <div>
                    <button className='secondary'>Save</button>
                </div>
        </div>
    </div>
  )
}
export default ConfigPage