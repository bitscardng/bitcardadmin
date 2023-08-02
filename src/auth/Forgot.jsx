import React, { useState } from "react";
import { robot } from "../assets";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { TiArrowBack } from "react-icons/ti";

const Forgot = () => {
  const [email, setEmail] = useState("");

  return (
    <div class="hero min-h-screen">
      <div class="hero-content flex-col lg:flex-row-reverse gap-20">
        <img src={robot} class="max-w-md " />
        <div>
          <h1 class="text-5xl font-bold">BITSCARD</h1>
          <div className="pt-2">
            <p>Please fill your email address to retrieve your account.</p>
            <form onSubmit={Forgot} className="pt-8">
              <div className="p-2">
                <p>Email</p>
                <input
                  type="email"
                  placeholder="abc@example.com"
                  className="w-full p-3 my-2 border rounded-full bg-primary"
                  required
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="px-2">
                <div className="flex flex-row items-center justify-between py-2">
                  <Link
                    to="/sign-in"
                    className="flex items-center gap-2 capitalize duration-300 hover:text-xl"
                  >
                    <span>
                      <TiArrowBack />
                    </span>
                    <p className=" btn-link">Sign in</p>
                  </Link>
                </div>
                <div className={`${styles.btn} ml-0`}>Submit</div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forgot;
