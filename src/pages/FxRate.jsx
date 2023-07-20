import React from 'react'
import Buy from '../components/fxRate/Buy'
import Sell from '../components/fxRate/Sell'
import { styles } from '../styles';
import useRedirectLoggedOutUser from '../customHook/useRedirectLoggedOutUser';

const FxRate = () => {
  useRedirectLoggedOutUser("/sign-in");

  return (
    <div className="flex flex-col">
      <p className={`${styles.topic} mb-0`}>fx rate</p>
      <Sell />
      <Buy />
    </div>
  );
}

export default FxRate