import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { robot } from "../assets";
import { styles } from "../styles";
import InputGroup from "./InputGroup";
import { toast } from "react-toastify";

const SignInOtp = () => {
  const [isLoading, setIsLoading] = useState(false); // loading state
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
    if (otp === Object.values(data).join("")) {
      toast.success("verification successful", {
        onClose: () => navigate("/dashboard", { replace: true }),
        delay: 3,
      });
    } else {
      toast.error("verification failed");
    }
  };
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
                {!isLoading && (
                  <button type="submit" className={`${styles.btn} ml-0`}>
                    Submit
                  </button>
                )}
                {isLoading && (
                  <button disabled>
                    <span className="loading loading-dots loading-lg"></span>
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInOtp;
