import React, { useState } from 'react';
import axios from 'axios';
import { Trash2, Upload, User } from 'lucide-react';

const Profile = ({ user, setUser }) => {
    const [uploading, setUploading] = useState(false);

    // 1. FILE HANDLING: Upload Image
    const handleImageUpload = async (e) => {
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append('image', file);

        setUploading(true);
        try {
            const res = await axios.post('http://localhost:5000/api/upload', formData);
            alert("Image Uploaded to Cloudinary!");
            // Update user state with new image URL from Cloudinary
            setUser({ ...user, profilePic: res.data.url });
        } catch (err) {
            console.error("Upload failed", err);
        } finally {
            setUploading(false);
        }
    };

    // 2. DELETE ACCOUNT FEATURE
    const handleDeleteAccount = async () => {
        if (window.confirm("Are you sure? This will permanently delete your account.")) {
            try {
                await axios.delete(`http://localhost:5000/api/user/${user._id}`);
                alert("Account Deleted.");
                window.location.href = "/signup"; // Redirect to signup
            } catch (err) {
                alert("Action failed.");
            }
        }
    };

    return (
        <div className="max-w-4xl mx-auto py-20 px-6">
            <h2 className="text-3xl font-bold mb-10 text-snap-yellow">Settings & Profile</h2>
            
            <div className="bg-card-bg border border-gray-800 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-10">
                {/* Profile Picture Section */}
                <div className="relative">
                    <div className="w-32 h-32 rounded-full bg-gray-700 overflow-hidden border-4 border-snap-yellow flex items-center justify-center">
                        {user?.profilePic ? <img src={user.profilePic} alt="Profile" className="w-full h-full object-cover" /> : <User size={50} />}
                    </div>
                    <label className="absolute bottom-0 right-0 bg-snap-yellow p-2 rounded-full cursor-pointer hover:scale-110 transition-transform">
                        <Upload size={16} color="black" />
                        <input type="file" className="hidden" onChange={handleImageUpload} />
                    </label>
                </div>

                {/* Account Details */}
                <div className="flex-1">
                    <p className="text-sm text-gray-400 uppercase tracking-widest">Username</p>
                    <p className="text-xl font-bold mb-4">{user?.username || "SnapSwap User"}</p>
                    
                    <p className="text-sm text-gray-400 uppercase tracking-widest">Email Status</p>
                    <p className="text-green-400 font-semibold mb-6 flex items-center gap-2">
                        Verified Account
                    </p>

                    <button 
                        onClick={handleDeleteAccount}
                        className="flex items-center gap-2 text-red-500 border border-red-500/30 px-4 py-2 rounded-lg hover:bg-red-500 hover:text-white transition-all"
                    >
                        <Trash2 size={16} /> Delete Account
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Profile;