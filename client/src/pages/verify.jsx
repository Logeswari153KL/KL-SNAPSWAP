import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Verify = () => {
    const [otp, setOtp] = useState('');
    const navigate = useNavigate();

    const handleVerify = async (e) => {
        e.preventDefault();
        try {
            // Adjust URL for your live backend later
            const res = await axios.post('http://localhost:5000/api/auth/verify', { otp });
            alert("Account Verified Successfully!");
            navigate('/login');
        } catch (err) {
            alert("Invalid OTP. Please try again.");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-dark-bg px-4">
            <div className="bg-card-bg p-8 rounded-2xl border border-gray-800 w-full max-w-md text-center">
                <h2 className="text-3xl font-bold mb-2">Check your Email</h2>
                <p className="text-gray-400 mb-8">We sent a 6-digit code to verify your account.</p>
                
                <form onSubmit={handleVerify}>
                    <input 
                        type="text" 
                        maxLength="6"
                        placeholder="0 0 0 0 0 0"
                        className="w-full text-center text-2xl tracking-widest p-4 bg-gray-900 border border-gray-700 rounded-lg mb-6 focus:border-snap-yellow outline-none"
                        onChange={(e) => setOtp(e.target.value)}
                    />
                    <button className="btn-primary w-full">VERIFY ACCOUNT</button>
                </form>
            </div>
        </div>
    );
};

export default Verify;