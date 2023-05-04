import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorElement = () => {
    const { error, status } = useRouteError();
    return (
        <section className='flex items-center h-screen p-16 bg-gray-100 text-gray-900'>
            <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
                <div>
                    <img className='w-80 h-80 object-cover' src='https://i.ibb.co/7rHmwLs/404-error-g1d51ad964-640.png' alt="" />
                </div>
                <div className='max-w-md text-center'>
                    <h2 className='mb-8 font-extrabold text-8xl text-yellow-500'>
                        <span className='sr-only'>Error</span>
                        {status || 404}
                    </h2>
                    <p className='text-2xl font-semibold md:text-3xl text-red-800 mb-8'>
                        {error?.message}
                    </p>
                    <Link to='/' className='btn'>
                        Back to homepage
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ErrorElement;