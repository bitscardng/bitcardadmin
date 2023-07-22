import React from "react";
import { styles } from "../styles";
import { Link } from "react-router-dom";
import { TiArrowBackOutline } from "react-icons/ti";

const TicketingDetails = () => {
  return (
    <div>
      <div className="relative mb-4">
        <Link
          to="/ticketing/all activies"
          className="absolute p-2 ml-2 rounded-full cursor-pointer bg-sec text-active hover:bg-active hover:text-sec"
        >
          <TiArrowBackOutline />
        </Link>
        <p className={`${styles.topic} mb-0 `}>ticket details</p>
      </div>
    </div>
  );
};

export default TicketingDetails;
