import React from 'react'
import { styles } from '../styles';
import useRedirectLoggedOutUser from '../customHook/useRedirectLoggedOutUser';

const AdsCampaign = () => {
  useRedirectLoggedOutUser("/sign-in");

  return (
    <div>
      <p className={`${styles.topic} mb-0`}>ads campaign</p>
    </div>
  );
}

export default AdsCampaign