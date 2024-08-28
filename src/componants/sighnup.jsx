import React from 'react';

function SignUpForm() {
    return (
        <div className="bg-white">
            <div className="container mx-auto flex justify-center items-center min-h-screen">
                <div className="form-container w-96 rounded-lg shadow-xl bg-gray-100 p-8">
                    <form id="sign-up-form" className="sign-up-form">
                        <h2 className="text-center text-2xl mb-4">Sign Up</h2>
                        <div className="form-group mb-2">
                            <input type="text" id="full-name" name="full-name" placeholder="Full Name" required className="w-full px-4 py-3 border border-gray-300 rounded transition-colors duration-300 focus:border-green-500 hover:border-green-500 focus:outline-none" />
                        </div>
                        <div className="form-group mb-2">
                            <input type="date" id="dob" name="dob" placeholder="Date of Birth" required className="w-full px-4 py-3 border border-gray-300 rounded transition-colors duration-300 focus:border-green-500 hover:border-green-500 focus:outline-none" />
                        </div>
                        <div className="form-group mb-2">
                            <select id="gender" name="gender" required className="w-full px-4 py-3 border border-gray-300 rounded transition-colors duration-300 focus:border-green-500 hover:border-green-500 focus:outline-none">
                                <option value="" disabled selected>Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div className="form-group mb-2">
                            <input type="email" id="email" name="email" placeholder="Email" required className="w-full px-4 py-3 border border-gray-300 rounded transition-colors duration-300 focus:border-green-500 hover:border-green-500 focus:outline-none" />
                        </div>
                        <div className="form-group mb-2">
                            <input type="password" id="password" name="password" placeholder="Password" required className="w-full px-4 py-3 border border-gray-300 rounded transition-colors duration-300 focus:border-green-500 hover:border-green-500 focus:outline-none" />
                        </div>
                        <div className="form-group mb-2">
                            <input type="password" id="confirm-password" name="confirm-password" placeholder="Confirm Password" required className="w-full px-4 py-3 border border-gray-300 rounded transition-colors duration-300 focus:border-green-500 hover:border-green-500 focus:outline-none" />
                        </div>
                        <div className="form-group flex justify-between items-center mb-4">
                            <label htmlFor="agree-terms" className="flex items-center">
                                <input type="checkbox" id="agree-terms" name="agree-terms" className="mr-2" required />
                                <span>I agree to the terms and conditions</span>
                            </label>
                        </div>
                        <div className="form-group mb-2">
                            <button type="submit" className="w-full bg-green-500 text-white py-3 rounded transition-colors duration-300 hover:bg-green-600 focus:outline-none">Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignUpForm;
