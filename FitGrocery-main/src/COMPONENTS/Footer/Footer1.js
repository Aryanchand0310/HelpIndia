import React from 'react'
import veges from '../../ASSETS/veges.png'
import './Footer1.css'
const Footer1 = () => {
    return (
        <div className='footer1'>
            <div className='left'>
                <img src={veges} alt='veges' />
            </div>
            <div className='right'>
                <h1>Donation will directly ditribute to poor people
                </h1>
                <p></p>
                
            </div>
        </div>
    )
}

export default Footer1