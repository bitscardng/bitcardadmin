import React from 'react'
import useRedirectLoggedOutUser from '../customHook/useRedirectLoggedOutUser'

const NgnTransfer = () => {
  useRedirectLoggedOutUser("/sign-in");

  return (
    <div>NgnTransfer</div>
  )
}

export default NgnTransfer