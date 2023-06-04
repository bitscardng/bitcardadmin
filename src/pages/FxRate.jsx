import React from 'react'
import Buy from '../components/fxRate/Buy'
import Sell from '../components/fxRate/Sell'

const FxRate = () => {
  return (
    <div className='flex flex-col'>
      <Sell/>
      <Buy/>
    </div>
  )
}

export default FxRate