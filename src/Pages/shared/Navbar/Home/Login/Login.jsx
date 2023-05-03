import React from 'react';

const Login = () => {
    return (
        <div class="container px-4 mx-auto">
            <div class="max-w-lg mx-auto">
                <div class="text-center mb-8">
                    <h2 class="text-3xl md:text-4xl font-extrabold mb-2">Sign in</h2>
                </div>
                <form>
                    <div class="mb-6">
                        <label class="block mb-2 font-extrabold" for="">Email</label>
                        <input class="inline-block w-full p-4 leading-6 text-lg font-extrabold placeholder-indigo-900 bg-white shadow border-2 border-indigo-900 rounded" type="email" placeholder="email"/>
                    </div>
                    <div class="mb-6">
                        <label class="block mb-2 font-extrabold" for="">Password</label>
                        <input class="inline-block w-full p-4 leading-6 text-lg font-extrabold placeholder-indigo-900 bg-white shadow border-2 border-indigo-900 rounded" type="password" placeholder="**********" />
                    </div>
                   
                    <button class="inline-block w-full py-4 px-6 mb-6 text-center text-lg leading-6 text-white font-extrabold bg-indigo-800 hover:bg-indigo-900 border-3 border-indigo-900 shadow rounded transition duration-200">Sign in</button>
                    <p class="text-center font-extrabold">Don&rsquo;t have an account? <a class="text-red-500 hover:underline" href="#">Sign up</a></p>
                </form>
            </div>
        </div>
    );
};

export default Login;