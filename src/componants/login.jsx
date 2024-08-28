import React from 'react';
import { Link } from 'react-router-dom';
function LoginForm() {
    return (
        <div className="bg-white">
            <div className="container mx-auto flex justify-center items-center min-h-screen">
                <div className="form-container w-96 rounded-lg shadow-xl bg-gray-100 p-8">
                    <form id="login-form" className="login-form">
                        <h2 className="text-center text-2xl mb-4">Log in</h2>
                        <div className="form-group mb-4">
                            <input type="email" id="email" name="email" placeholder="Email" required className="w-full px-4 py-3 border border-gray-300 rounded transition-colors duration-300 focus:border-green-500 hover:border-green-500 focus:outline-none" />
                        </div>
                        <div className="form-group mb-4">
                            <input type="password" id="password" name="password" placeholder="Password" required className="w-full px-4 py-3 border border-gray-300 rounded transition-colors duration-300 focus:border-green-500 hover:border-green-500 focus:outline-none" />
                        </div>
                        <div className="form-group flex justify-between items-center mb-4">
                            <label htmlFor="remember-me" className="flex items-center">
                                <input type="checkbox" id="remember-me" name="remember-me" className="mr-2" />
                                <span>Remember me</span>
                            </label>
                            <a href="#" id="forgot-password" className="text-green-500 hover:underline">Forgot password?</a>
                        </div>
                        <div className="form-group mb-6">
                            <button type="submit" className="w-full bg-green-500 text-white py-3 rounded transition-colors duration-300 hover:bg-green-600 focus:outline-none">Log in</button>
                        </div>
                        <p className="text-center text-gray-600 mb-6">Don't have an account? <Link to='/sign' className="text-green-500 hover:underline">Sign up</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;
