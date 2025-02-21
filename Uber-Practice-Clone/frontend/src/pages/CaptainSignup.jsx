import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CaptainDataContext } from '../context/CaptainContext';
import axios from 'axios';

const CaptainSignup = () => {
    const { captain, setCaptain } = useContext(CaptainDataContext);

    const [input, setInput] = useState({
        fullname: {
            firstname: '',
            lastname: ''
        },
        email: '',
        password: '',
        vehicle: {
            color: '#000000',
            plate: '',
            capacity: '',
            vehicleType: 'motorcycle'
        }
    });
const navigate=useNavigate()
    const signUpHandler =async (e) => {
        e.preventDefault();
        console.log(input);
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, input);

        if(response.status==201){
            const data=response.data
            setCaptain(data.captain)
            localStorage.setItem('token',data.token)
            navigate('/captain-home')
        }
    };

    return (
        <div className='min-h-screen flex items-center justify-center bg-gray-100 px-4'>
            <div className='bg-white shadow-md rounded-xl p-6 w-full max-w-md'>

                {/* Logo */}
                <div className='flex justify-center mb-6'>
                    <img className='w-16' src="https://images.squarespace-cdn.com/content/v1/5f12108f09f6c26e19eab384/1595024071484-A6VUH95AXO829RJY19LK/image-asset.jpeg" alt="Logo" />
                </div>

                {/* Title */}
                <h2 className='text-2xl font-bold text-center text-gray-800 mb-6'>Captain Signup</h2>

                {/* Signup Form */}
                <form onSubmit={signUpHandler} className='space-y-5'>

                    {/* Full Name */}
                    <div className='flex flex-col sm:flex-row sm:gap-4'>
                        <input
                            value={input.fullname.firstname}
                            onChange={(e) => setInput((val) => ({ ...val, fullname: { ...val.fullname, firstname: e.target.value } }))}
                            className='bg-gray-200 focus:ring-2 focus:ring-blue-400 transition-all rounded-lg px-4 py-2 w-full border text-lg placeholder-gray-500'
                            type="text" required placeholder='First Name' />
                        <input
                            value={input.fullname.lastname}
                            onChange={(e) => setInput((val) => ({ ...val, fullname: { ...val.fullname, lastname: e.target.value } }))}
                            className='bg-gray-200 focus:ring-2 focus:ring-blue-400 transition-all rounded-lg px-4 py-2 w-full border text-lg placeholder-gray-500 mt-4 sm:mt-0'
                            type="text" required placeholder='Last Name' />
                    </div>

                    {/* Email */}
                    <input
                        value={input.email}
                        onChange={(e) => setInput((val) => ({ ...val, email: e.target.value }))}
                        className='bg-gray-200 focus:ring-2 focus:ring-blue-400 transition-all rounded-lg px-4 py-2 border w-full text-lg placeholder-gray-500'
                        type="email" required placeholder='Email' />

                    {/* Password */}
                    <input
                        value={input.password}
                        onChange={(e) => setInput((val) => ({ ...val, password: e.target.value }))}
                        className='bg-gray-200 focus:ring-2 focus:ring-blue-400 transition-all rounded-lg px-4 py-2 border w-full text-lg placeholder-gray-500'
                        type="password" required placeholder='Password' />

                    {/* Vehicle Information */}
                    <h3 className='text-lg font-semibold text-gray-700'>Vehicle Information</h3>

                    <div className='space-y-4'>

                        {/* Vehicle Type */}
                        <div>
                            <label className='text-sm font-medium text-gray-600'>Vehicle Type</label>
                            <select
                                value={input.vehicle.vehicleType}
                                onChange={(e) => setInput((val) => ({ ...val, vehicle: { ...val.vehicle, vehicleType: e.target.value } }))}
                                className='bg-gray-200 focus:ring-2 focus:ring-blue-400 transition-all rounded-lg px-4 py-2 border w-full text-lg'>
                                <option value="motorcycle">Motorcycle</option>
                                <option value="car">Car</option>
                                <option value="auto">Auto</option>
                            </select>
                        </div>

                        {/* Vehicle Color */}
                        <div className='flex items-center gap-4'>
                            <label className='text-sm font-medium text-gray-600'>Vehicle Color</label>
                            <input
                                value={input.vehicle.color}
                                onChange={(e) => setInput((val) => ({ ...val, vehicle: { ...val.vehicle, color: e.target.value } }))}
                                className='w-12 h-12 border rounded-full shadow-md cursor-pointer'
                                type="color" />
                        </div>

                        {/* Vehicle Plate */}
                        <div>
                            <label className='text-sm font-medium text-gray-600'>Vehicle Plate</label>
                            <input
                                value={input.vehicle.plate}
                                onChange={(e) => setInput((val) => ({ ...val, vehicle: { ...val.vehicle, plate: e.target.value } }))}
                                className='bg-gray-200 focus:ring-2 focus:ring-blue-400 transition-all rounded-lg px-4 py-2 border w-full text-lg placeholder-gray-500'
                                type="text" required placeholder='Vehicle Plate' />
                        </div>

                        {/* Vehicle Capacity (Number Only) */}
                        <div>
                            <label className='text-sm font-medium text-gray-600'>Vehicle Capacity</label>
                            <input
                                value={input.vehicle.capacity}
                                onChange={(e) => setInput((val) => ({ ...val, vehicle: { ...val.vehicle, capacity: e.target.value } }))}
                                className='bg-gray-200 focus:ring-2 focus:ring-blue-400 transition-all rounded-lg px-4 py-2 border w-full text-lg placeholder-gray-500'
                                type="number" required placeholder='Capacity (Number)' />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button
                        className='bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg px-4 py-3 w-full text-lg transition-all shadow-md'
                        type="submit">
                        Register
                    </button>

                    {/* Already have an account? */}
                    <p className='text-center text-gray-600 mt-4'>
                        Already have an account? <Link to='/captain-login' className='text-blue-600 hover:underline'>Login here</Link>
                    </p>
                </form>

                {/* Footer */}
                <div className="mt-6 text-center text-xs text-gray-500">
                    This site is protected by re-CAPTCHA and the
                    <a href="#" className="text-blue-500 hover:underline"> Google Privacy Policy </a>
                    and
                    <a href="#" className="text-blue-500 hover:underline"> Terms of Service </a> apply.
                </div>
            </div>
        </div>
    );
};

export default CaptainSignup;
