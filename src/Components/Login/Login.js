import React, { useEffect } from 'react';
import google from '../../assets/images/google.png';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';

const Login = () => {
    //------------------Usage of react hooks form-------------------------
    const { register, formState: { errors }, handleSubmit } = useForm();

    //-----------------SignInWithGoogle, Email and Password---------------------------
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);

    //-----------User Replace navigation method--------------
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    //----------you should use useEffect hook here, Otherwise show an Error-------------
    useEffect(() => {
        if (gUser || user) {
            navigate(from, { replace: true });
        }
    }, [gUser, user, from, navigate])

    let signInError;
    if (gError || error) {
        signInError = <small className='text-red-600'>{gError?.message || error?.message}</small>
    }

    if (loading || gLoading) {
        return <p className=' h-full mt-10'><Loading></Loading></p>
    }

    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password);
    };

    return (
        <div className='flex justify-center items-center mt-1 lg:mt-5 mb-2'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold font-sans bg-clip-text text-accent">LOGIN</h2>
                    <label className="label pb-0">
                        <span className="label-text text-black font-bold font-sans">Email</span>
                    </label>
                    <input type="email" name="email"
                        placeholder="Your email"
                        className="input input-accent w-full max-w-xs placeholder-black placeholder:font-sans"
                        {...register("email", {
                            required: {
                                value: true,
                                message: "Email is required"
                            },
                            pattern: {
                                value: /\S+@\S+\.\S+/,
                                message: 'Provide a valid email'
                            }
                        })}
                    />
                    <label className="label pt-0 pb-0">
                        {errors.email?.type === 'required' && <span className="label-text-alt text-sm text-amber-600 font-bold font-sans">{errors.email.message}</span>}
                        {errors.email?.type === 'pattern' && <span className="label-text-alt text-sm text-amber-600 font-bold font-sans">{errors.email.message}</span>}
                    </label>
                    <label className="label pb-0">
                        <span className="label-text text-black font-bold font-sans">Password</span>
                    </label>
                    <input type="password" name="password"
                        placeholder="Your password"
                        className="input input-accent w-full max-w-xs placeholder-black placeholder:font-sans"
                        {...register("password", {
                            required: {
                                value: true,
                                message: "Password is required"
                            },
                            minLength: {
                                value: 6,
                                message: 'Must be 6 characters or longer'
                            }
                        })}
                    />
                    <label className="label pt-0 pb-0">
                        {errors.password?.type === 'required' && <span className="label-text-alt text-sm text-amber-600 font-bold font-sans">{errors.password.message}</span>}
                        {errors.password?.type === 'minLength' && <span className="label-text-alt text-sm text-amber-600 font-bold font-sans">{errors.password.message}</span>}
                    </label>

                    {/* -------------------Event handler onSubmit------------------ */}
                    {signInError}
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input type="submit" value="LOGIN" className="btn btn-accent text-white font-bold font-sans w-full max-w-xs" />
                    </form>
                    <p className=' text-sm text-black font-bold font-serif bg-clip-text'>Don't have an account? <Link className='text-accent underline hover:bg-base-200 hover:rounded-md' to="/register">Create new account</Link></p>
                    <div className="divider mt-2 mb-2 text-black font-sans">OR</div>

                    {/* ------------------------SignInWithGoogle-------------------- */}
                    <div className="form-control">
                        <button onClick={() => signInWithGoogle()} className="btn btn-accent text-white font-bold border-0 hover:rounded-full uppercase relative">Continue with google</button>
                        <img className='w-[35px] bg-white rounded-md absolute bottom-[45px] left-14' src={google} alt="google" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;