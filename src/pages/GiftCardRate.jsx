import React from 'react'
import useRedirectLoggedOutUser from '../customHook/useRedirectLoggedOutUser'

const GiftCardRate = () => {
  useRedirectLoggedOutUser("/sign-in");

  return (
    <div>GiftCardRate</div>
  )
}

export default GiftCardRate