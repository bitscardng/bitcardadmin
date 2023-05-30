import React from "react";
import Details from "../components/usersdetails/Details";
import Withdrawer from "../components/usersdetails/Withdrawer";
import Desposit from "../components/usersdetails/Desposit";
import VirtualCard from "../components/usersdetails/VirtualCard";
import Crypto from "../components/usersdetails/Crypto";

const UserDetails = () => {
  return (
    <div className="flex flex-row justify-between">
      <div className="">
        <Details />
      </div>
      <div className="flex flex-col gap-8">
        <Withdrawer />
        <VirtualCard />
        <Desposit />
        <Crypto />
      </div>
    </div>
  );
};

export default UserDetails;
