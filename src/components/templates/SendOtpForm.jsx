import React from "react";
import { sendOtp } from "../../services/auth";

function SendOtpForm({ mobile, setMobile, setStep }) {
  const submitHandler = async (event) => {
    event.preventDefault();
    // console.log(mobile);

    if (mobile.length !== 11) return;

    const { response, error } = await sendOtp(mobile);
    if (response) setStep(2);
    if(error) console.log(error.response.data.message);
    console.log({ response, error });
  };
  return (
    <form onSubmit={submitHandler}>
      <p>ورود به حساب کاربری</p>
      <span>
        برای استفاده از امکانات سایت // لطقا شماره موبایل خود را وارد کنید
        کدتایید شده به این شماره پیامک خواهد شد
      </span>
      <label htmlFor="input">ماره موبایل خود را وارد کنید</label>
      <input
        type="text"
        id="input"
        placeholder="شماره موبایل"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
      />
      <button type="submit">ارسال کد تایید</button>
    </form>
  );
}

export default SendOtpForm;
