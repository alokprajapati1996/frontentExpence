import axios from 'axios';
import React, { useState } from 'react';

const ForgetPassword = () => {
    const [emailOrPhone, setEmailOrPhone] = useState('');
    const [otp, setOtp] = useState('');
    const [step, setStep] = useState(1); // Step 1: Enter Email/Phone, Step 2: Enter OTP
    const [userId, setUserId] = useState(null); // Store user ID for verification

    const sendOTP = async () => {
        try {
            const response = await axios.post('http://localhost:8080/auth/send-otp',{ emailOrPhone });
            alert(response.data.msg);
            setUserId(response.data.userId);
            setStep(2);
        } catch (error) {
            console.error(error);
            alert("Failed to send OTP!");
        }
    };

    const verifyOTP = async () => {
        try {
            const response = await axios.post('http://localhost:8080/auth/verify-otp', { userId, otp });
            alert(response.data.msg);
        } catch (error) {
            console.error(error);
            alert("Invalid OTP!");
        }
    };

    return (
        <div className="max-w-md mx-auto p-5 mt-10">
            {step === 1 ? (
                <div>
                    <input type="text" placeholder="Enter Email or Phone" value={emailOrPhone}
                        onChange={(e) => setEmailOrPhone(e.target.value)} className="p-2 border w-full" />
                    <button onClick={sendOTP} className="bg-blue-500 text-white p-2 mt-2 w-full">Send OTP</button>
                </div>
            ) : (
                <div>
                    <input type="text" placeholder="Enter OTP" value={otp}
                        onChange={(e) => setOtp(e.target.value)} className="p-2 border w-full" />
                    <button onClick={verifyOTP} className="bg-green-500 text-white p-2 mt-2 w-full">Verify OTP</button>
                </div>
            )}
        </div>
    );
};

export default ForgetPassword;
