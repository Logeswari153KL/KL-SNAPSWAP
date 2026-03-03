import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
    const [formData, setFormData] = useState({ username: '', email: '', password: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/auth/signup', formData);
            alert(res.data.msg);
        } catch (err) {
            alert(err.response.data.msg);
        }
    };

    return (
        <div className="bg-dark-bg min-h-screen flex items-center justify-center text-white">
            <form onSubmit={handleSubmit} className="bg-card-bg p-10 rounded-lg border border-gray-800 w-96">
                <h2 className="text-2xl font-bold mb-6 text-snap-yellow">Create Account</h2>
                <input 
                    type="text" placeholder="Username" 
                    className="w-full p-3 mb-4 bg-gray-900 border border-gray-700 rounded"
                    onChange={(e) => setFormData({...formData, username: e.target.value})}
                />
                <input 
                    type="email" placeholder="Email" 
                    className="w-full p-3 mb-4 bg-gray-900 border border-gray-700 rounded"
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
                <input 
                    type="password" placeholder="Password" 
                    className="w-full p-3 mb-6 bg-gray-900 border border-gray-700 rounded"
                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                />
                <button className="w-full bg-snap-yellow text-black font-bold py-3 rounded hover:bg-yellow-500">
                    SIGN UP
                </button>
            </form>
        </div>
    );
};

export default Signup;