import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../../providers/AuthProvider';

const Login = () => {

    const { signIn } = useContext(AuthContext);
    const [error, setError] = useState('');

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        setError('');

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                form.reset();
                // navigate(from, { replace: true })
            })
            .catch(error => {
                setError('Wrong Email or password, Try Again');
                console.log(error.message);
            })
    }

    return (
        <div className="container px-4 mx-auto mb-16 mt-10">
            <div className="max-w-lg mx-auto">
                <div className="text-center mb-8">
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-2">Sign in</h2>
                </div>
                <form onSubmit={handleLogin}>
                    
                    <div className="mb-4">
                        <label className="block mb-2 font-extrabold">Email</label>
                        <input className="inline-block w-full p-4 leading-6 text-lg font-bold placeholder-indigo-900 bg-white shadow border-2 border-indigo-900 rounded" type="email" name='email' placeholder="email" />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2 font-extrabold">Password</label>
                        <input className="inline-block w-full p-4 leading-6 text-lg font-bold placeholder-indigo-900 bg-white shadow border-2 border-indigo-900 rounded" type="password" name='password' placeholder="password" />
                    </div>

                   

                    <button type='submit' className="inline-block w-full py-4 px-6 mb-6 text-center text-lg leading-6 text-white font-extrabold bg-indigo-800 hover:bg-indigo-900 border-3 border-indigo-900 shadow rounded transition duration-200">Sign in</button>

                </form>
                {error && <p className='font-bold text-red-500 mb-3'>{error}</p>}
                <p className="text-center font-extrabold">Don&rsquo;t have an account? <Link className="text-red-500 hover:underline" to='/register'>Sign up</Link></p>
            </div>
        </div>
    );
};

export default Login;