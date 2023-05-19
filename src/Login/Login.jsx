import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="hero min-h-screen bg-pink-200">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <h1 className="text-5xl text-center font-bold py-5">Login now!</h1>
                <div className="card-body">
                    <form>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" name='pass' placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <p className='font-medium'>Have Not Any Account? <Link className='font-bold underline' to='/signup'>Sign Up</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;