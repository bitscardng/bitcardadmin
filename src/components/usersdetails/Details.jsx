import React from "react";
import { styles } from "../../styles";

const datas = [
  { title: "naira balance", result: "N500", add: "Add", deduct: "Deduct" },
];

const Details = ({ data }) => {
  return (
    <div>
      <form className="w-[32rem]">
        <div className={`${styles.detail}`}>
          <h5 className="px-2 text-xl uppercase">user name</h5>
          <p className="px-2 font-light capitalize">{data?.user?.username}</p>
        </div>
        <div className={`${styles.detail}`}>
          <h5 className="px-2 text-xl uppercase">email address</h5>
          <p className="px-2 font-light capitalize">{data?.user?.email}</p>
        </div>
        <div className={`${styles.detail}`}>
          <h5 className="px-2 text-xl uppercase">email verified</h5>
          <p className="px-2 font-light capitalize">yes</p>
        </div>
        <div className={`${styles.detail}`}>
          <h5 className="px-2 text-xl uppercase">phone</h5>
          <p className="px-2 font-light capitalize">{data?.user?.phone}</p>
        </div>
        <div className={`${styles.detail}`}>
          <h5 className="px-2 text-xl uppercase">kyc 1 & 2</h5>
          <p className="px-2 font-light capitalize">yes</p>
        </div>
        <div className={`${styles.detail}`}>
          <h5 className="px-2 text-xl uppercase">kyc 3</h5>
          <p className="px-2 font-light capitalize">yes</p>
        </div>
        <div className={`${styles.detail}`}>
          <h5 className="px-2 text-xl uppercase">kyc 4</h5>
          <p className="px-2 font-light capitalize">yes</p>
        </div>
        <div className={`${styles.detail}`}>
          <h5 className="px-2 text-xl uppercase">usd balance</h5>
          <p className="px-2 font-light capitalize">
            $ {data?.userWallets?.usd_wallet?.balance}
          </p>
        </div>
        <div className={`${styles.detail}`}>
          <h5 className="px-2 text-xl uppercase">naira balance</h5>
          <div className="flex flex-row items-center justify-between">
            <p className="px-2 font-light capitalize">
              {"N"} {data?.userWallets?.naira_wallet?.balance}
            </p>
            {/* <btn className="duration-500 p-1 bg-[#5FC88F] m-2 rounded-lg font-light hover:font-semibold cursor-pointer hover:px-2">
              Add
            </btn>
            <btn className="duration-500 p-1 bg-[#F04086] m-2 rounded-lg font-light hover:font-semibold cursor-pointer hover:px-2">
              Deduct
            </btn> */}
          </div>
        </div>
        <div className={`${styles.detail}`}>
          <h5 className="px-2 text-xl uppercase">card balance</h5>
          <p className="px-2 font-light capitalize">$ 400</p>
        </div>
        <div className={`${styles.detail}`}>
          <h5 className="px-2 text-xl uppercase">joined</h5>
          <p className="px-2 font-light capitalize">
            {new Date(data?.user?.createdAt).toDateString()}
          </p>
        </div>
        <div className={`${styles.detail}`}>
          <h5 className="px-2 text-xl uppercase">USDT</h5>
          <p className="px-2 font-light capitalize">
            $ {data?.userWallets?.usdt_wallet?.balance}
          </p>
        </div>
        <div className={`${styles.detail}`}>
          <h5 className="px-2 text-xl uppercase">BTC</h5>
          <p className="px-2 font-light capitalize">
            $ {data?.userWallets?.btc_wallet?.balance}
          </p>
        </div>
        {/* <div className={`${styles.detail}`}>
          <h5 className="px-2 text-xl uppercase">USDT - kfgdckjdhcguk</h5>
          <p className="px-2 font-light capitalize">$ 50</p>
        </div> */}
        <div className={`${styles.detail}`}>
          <h5 className="px-2 text-xl uppercase">referral code</h5>
          <p className="px-2 font-light capitalize">
            {data?.user?.referralCode}
          </p>
        </div>
        <div className={`${styles.detail}`}>
          <h5 className="px-2 text-xl uppercase">P2P ( Merchant )</h5>
          <p className="px-2 font-light capitalize">yes</p>
        </div>
        <div className={`${styles.detail}`}>
          <h5 className="px-2 text-xl uppercase">P2P ( Merchant Balance )</h5>
          <p className="px-2 font-light capitalize">$ 400</p>
        </div>
        <div className={`${styles.detail}`}>
          <h5 className="px-2 text-xl uppercase">NGN Account Number</h5>
          <p className="px-2 font-light capitalize">1234567890 GTB valentine</p>
        </div>
        <div className={`${styles.detail}`}>
          <h5 className="px-2 text-xl uppercase">usd Account Number</h5>
          <p className="px-2 font-light capitalize">1234567890 GTB valentine</p>
        </div>
      </form>
    </div>
  );
};

export default Details;
