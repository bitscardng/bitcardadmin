import React from 'react'
import useRedirectLoggedOutUser from '../customHook/useRedirectLoggedOutUser'

const UsdTransfer = () => {
  useRedirectLoggedOutUser("/sign-in");

  return (
    <div>UsdTransfer</div>
  )
}

export default UsdTransfer