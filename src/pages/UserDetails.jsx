import React from "react";
import Details from "../components/usersdetails/Details";
import Withdrawer from "../components/usersdetails/Withdrawer";
import Desposit from "../components/usersdetails/Desposit";
import VirtualCard from "../components/usersdetails/VirtualCard";
import Crypto from "../components/usersdetails/Crypto";

const UserDetails = () => {
  return (
    <div className="flex flex-row justify-between max-h-screen gap-8 pb-6">
      <div className="max-h-screen overflow-y-scroll">
        <Details />
      </div>
      <div className="flex flex-col max-h-screen gap-8 overflow-y-scroll">
        <Withdrawer />
        <VirtualCard />
        <Desposit />
        <Crypto />
      </div>
    </div>
  );
};

export default UserDetails;
