import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { robot } from "../assets";
import { styles } from "../styles";
import InputGroup from "./InputGroup";
import { toast } from "react-toastify";

const SignInOtp = () => {
  const [data, setData] = useState({
    0: "",
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
  });
  const otp = useSelector((state) => state.auth.otp);
  const navigate = useNavigate();
  const verifyInput = (data) => {
    console.log(otp, Object.values(data).join(""));
    if (otp === Object.values(data).join("")) {
      toast.success("verification successful");
      navigate("/dashboard");
    } else {
      toast.error("verification failed");
    }
  };
  // w-10 h-10 text-center text-black bg-white rounded-lg outline-none
  return (
    <div class="hero min-h-screen">
      <div class="hero-content flex-col lg:flex-row-reverse gap-20">
        <img src={robot} class="max-w-md" />
        <div>
          <h1 class="text-5xl font-bold">BITSCARD</h1>
          <div className="pt-2">
            <p>Please enter your Google 2FA code.</p>
            <form onSubmit={() => verifyInput(data)} className="pt-8">
              <div className="">
                <InputGroup
                  data={data}
                  setData={setData}
                  verifyInput={verifyInput}
                />
                <div className={`${styles.btn} ml-0`}>Submit</div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInOtp;
