import React from 'react';
import { FaBiking, FaPizzaSlice, FaThumbsUp } from "react-icons/fa";

const FrequentlyAsked = () => {
    return (
        <div className='my-container mb-16'>
            <div className='text-center'>
                <h1 className='text-3xl font-bold mb-1'>Why Choose Us</h1>
                <p>Because you will get the best quality food from us and we deliver fast</p>
            </div>
            <div className='grid lg:grid-cols-3 gap-8 mt-10'>
                <div className='text-center shadow-md p-10'>
                    <div className='flex justify-center mb-4'>
                        <FaPizzaSlice className='w-16 h-16 text-1'></FaPizzaSlice>
                    </div>
                    <h2 className='text-2xl font-medium mb-2'>Serve Healthy Food</h2>
                    <p>We serve all healthy food here. You can choose any food you like</p>
                </div>
                <div className='text-center shadow-md p-10'>
                    <div className='flex justify-center mb-4'>
                        <FaThumbsUp className='w-16 h-16 text-1'></FaThumbsUp>
                    </div>
                    <h2 className='text-2xl font-medium mb-2'>Best Quality</h2>
                    <p>Our food quality is excellent. You can choose any food you like</p>
                </div>
                <div className='text-center shadow-md p-10'>
                    <div className='flex justify-center mb-4'>
                        <FaBiking className='w-16 h-16 text-1'></FaBiking>
                    </div>
                    <h2 className='text-2xl font-medium mb-2'>Fast Delivery</h2>
                    <p>You can say main goal of our delivery system is to deliver order quickly</p>
                </div>
            </div>

        </div>
    );
};

export default FrequentlyAsked;