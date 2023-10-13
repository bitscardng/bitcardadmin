import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { robot } from "../assets";
import { styles } from "../styles";
import InputGroup from "./InputGroup";
import { toast } from "react-toastify";
import OTPInput from "react-otp-input";
import { Btn as Button } from "../components/antd/Btn";
import { useValidateOtpMutation } from "../api/authQueries";

const SignInOtp = () => {
  const [validate, { isLoading }] = useValidateOtpMutation();
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const verifyInput = (e) => {
    e.preventDefault();
    validate({ email: localStorage.getItem("verify"), otp })
      .unwrap()
      .then((res) => {
        toast.success("verification successful", {
          onClose: () => {
            sessionStorage.setItem("token", res?.tokens.accessToken);
            localStorage.setItem("refreshToken", res?.tokens.refreshToken);
            navigate("/dashboard", { replace: true });
            localStorage.removeItem("verify");
          },
          delay: 3,
        });
      })
      .catch((err) => {
        toast.error(err?.data?.message);
      });
  };
  return (
    <div class="hero min-h-screen">
      <div class="hero-content flex-col lg:flex-row-reverse gap-20">
        <img src={robot} class="max-w-md" />
        <div>
          <h1 class="text-5xl font-bold">BITSCARD</h1>
          <div className="pt-2">
            <p>Please enter your Google 2FA code.</p>
            <form
              className="w-full grid grid-cols-1 gap-[1rem] pt-8"
              onSubmit={verifyInput}
            >
              <OTPInput
                numInputs={6}
                inputType="number"
                value={otp}
                renderInput={(props) => (
                  <input
                    {...props}
                    style={{
                      backgroundColor: "white",
                      border: "1px solid #CFD3DB",
                      borderRadius: "8px",
                      width: "50px",
                      height: "50px",
                      fontSize: "16px", // Increased font size for better visibility
                      color: "#000",
                      fontWeight: "800",
                      caretColor: "blue",
                      margin: "4px",
                      textAlign: "center",
                    }}
                  />
                )}
                shouldAutoFocus={true}
                onChange={(value) => setOtp(value)}
              />
              <Button loading={isLoading} htmlType="submit" type="primary">
                submit
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInOtp;
