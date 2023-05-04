import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../../providers/AuthProvider';
import { updateProfile } from 'firebase/auth';

const Register = () => {
    const { createUser } = useContext(AuthContext);
    const [error, setError] = useState('');
     
    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        setError('');

        if(password.length < 6){
            setError('Password should be at least 6 characters');
        }

        console.log(name, photo, email, password)
        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);
                form.reset();
                userProfile(result.user, name, photo)
            })
            .catch(error => {
                console.log(error.message);
            })

    }

    const userProfile = (user, userName, url) =>{
        updateProfile(user, {
            displayName: userName, photoURL: url
          }).then(() => {
           
          }).catch((error) => {
            console.log(error.message);
          });
    }

        return (
            <div className="container px-4 mx-auto mb-16 mt-10">
                <div className="max-w-lg mx-auto">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl md:text-4xl font-extrabold mb-2">Sign Up</h2>
                    </div>
                    <form onSubmit={handleRegister}>
                        <div className="mb-4">
                            <label className="block mb-2 font-extrabold">Name</label>
                            <input className="inline-block w-full p-4 leading-6 text-lg font-bold placeholder-indigo-900 bg-white shadow border-2 border-indigo-900 rounded" type="text" name='name' placeholder="name" required />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2 font-extrabold">Email</label>
                            <input className="inline-block w-full p-4 leading-6 text-lg font-bold placeholder-indigo-900 bg-white shadow border-2 border-indigo-900 rounded" type="email" name='email' placeholder="email" required />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2 font-extrabold">Password</label>
                            <input className="inline-block w-full p-4 leading-6 text-lg font-bold placeholder-indigo-900 bg-white shadow border-2 border-indigo-900 rounded" type="password" name='password' placeholder="password" required />
                        </div>

                        <div className="mb-4">
                            <label className="block mb-2 font-extrabold">PhotoUrl</label>
                            <input className="inline-block w-full p-4 leading-6 text-lg font-bold placeholder-indigo-900 bg-white shadow border-2 border-indigo-900 rounded" type="text" name='photo' placeholder="url" required />
                        </div>

                        <button type='submit' className="inline-block w-full py-4 px-6 mb-6 text-center text-lg leading-6 text-white font-extrabold bg-indigo-800 hover:bg-indigo-900 border-3 border-indigo-900 shadow rounded transition duration-200">Sign Up</button>

                    </form>

                    <p className='font-bold text-red-500'>{error}</p>

                </div>
            </div>
        );
    };

    export default Register;