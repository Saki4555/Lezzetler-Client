import React from 'react';
import { FaThumbsUp } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Chef = ({ chef }) => {
    const { chef_name, chef_picture, num_recipes, years_of_experience, likes,id } = chef;
    return (
        <div className="card bg-orange-50 shadow-xl">
            <figure><img className='w-full h-96 object-cover ' src={chef_picture} alt="Chef" /></figure>
            <div className="card-body">
                <h2 className="card-title">{chef_name}</h2>
                <p>Years of experience : {years_of_experience}</p>
                <div className='flex items-center gap-2'><FaThumbsUp className='text-blue-500'></FaThumbsUp>{likes}</div>
                <p>Number of Recipes : {num_recipes}</p>
                <div className="card-actions justify-end">
                    <button className="btn bg-[#FF5733] border-0"><Link to={`/recipies/${id}`}>View Recipies</Link></button>
                </div>
            </div>
        </div>
    );
};

export default Chef;