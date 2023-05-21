import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../Providers/AuthProvider';

const Signup = () => {
    const{createUser} = useContext(authContext);

    const [error,setError]=useState('');

    const handleSignIn = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;

        console.log(name,email,password,confirm);
        setError('');
        if(password!==confirm){
            setError('Password did not match')
            return
        }
        else if(password.length<6){
            setError('Password must be 6 characters')
            return
        }

        createUser(email,password)
        .then(result=>{
            const user = result.user;
            console.log(user);
            form.reset();
        })
        .catch(error=>console.log(error.message));
    }
    return (
        <div className="hero min-h-screen bg-pink-200">
        <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
            <h1 className="text-5xl text-center font-bold py-5">Sign Up!</h1>
            <div className="card-body">
                <form onSubmit={handleSignIn}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="name" className="input input-bordered" />
                    </div>
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
                        <input type="password" name='password' placeholder="password" className="input input-bordered" />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Confirm Password</span>
                        </label>
                        <input type="password" name='confirm' placeholder="password" className="input input-bordered" />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button type="submit" className="btn btn-primary" value="signin">Sign Up</button>
                    </div>
                </form>
                <p className='font-medium'>Already Have an Account? <Link to='/login' className='font-bold underline'>Login</Link></p>
                <p className='font-bold'>{error}</p>
            </div>
        </div>
    </div>
    );
};

export default Signup;