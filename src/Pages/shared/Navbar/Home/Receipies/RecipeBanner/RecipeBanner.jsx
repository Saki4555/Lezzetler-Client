import React from 'react';
import { FaThumbsUp } from "react-icons/fa";

const RecipeBanner = ({ chef }) => {
    console.log(chef);
    const { chef_name, chef_picture, num_recipes, years_of_experience, likes, id } = chef;
    return (
        <div className='my-container mt-2 mb-10'>
            <div className='bg-orange-200 rounded-md flex gap-10'>
                <div className='w-1/2'>
                    <img className='rounded' src={chef_picture} alt="" />
                </div>
                <div className='flex justify-center items-center w-1/2'>
                    <div>
                        <h1 className='text-4xl font-bold mt-4 text-slate-700'>{chef_name}</h1>
                        <p>{chef_name} is a culinary experts who have gained worldwide recognition for his skills and achievements in the culinary arts. </p>
                        <div className='flex gap-2 items-center mt-3'><FaThumbsUp></FaThumbsUp>: {likes}</div>
                        <p>Number of Recipes : {num_recipes}</p>
                        <p>Years of experience : {years_of_experience}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecipeBanner;