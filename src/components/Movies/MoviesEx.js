import React from 'react'
import CouponEx from './CouponEx'
import Helpdesk from './Helpdesk'
import Card1Main from './Card1Main'
import Card2Main from './Card2Main'
import MovFollow from './MovFollow'

const MoviesEx = () => {
  return (
    <div className='Card1'>
      <Card2Main />
      <Card1Main />
      <CouponEx />
      <MovFollow />
      <Helpdesk />
    </div>
  )
}

export default MoviesEx
