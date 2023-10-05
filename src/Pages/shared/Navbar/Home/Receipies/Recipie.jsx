import React, { useState } from 'react';
import LazyLoad from 'react-lazy-load';
import { ToastContainer, toast } from 'react-toastify';

const Recipie = ({ recipe }) => {

    const [isDisabled, setIsDisabled] = useState(false);

    const handleFavorite = () => {
        toast.success('added successfully', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
        setIsDisabled(true);
    };

    const { cooking_method, ingredients, rating, recipe_id, recipe_img, recipe_name } = recipe;
    // console.log(recipe);
    return (
        <div className='bg-orange-50 p-3 shadow-lg rounded-md border border-orange-400'>
            <div className='flex gap-3'>
                <div>
                    <LazyLoad><img className='rounded' src={recipe_img} alt="" /></LazyLoad>
                    
                    <p className='text-xl font-medium mt-2'>Rating : {rating}</p>
                </div>
                <div>
                    <h3 className='text-xl font-bold mb-2'>Recipe Name : {recipe_name}</h3>
                    <p className='font-bold'>Ingredients :</p>
                    <ul>
                        {
                            ingredients.map((i, ind) => <li className='font-sm text-sm' key={ind}>{i}</li>)
                        }
                    </ul>
                </div>
            </div>
            <div className=''>

                <p className='font-medium text-sm mt-2'><span className='font-extrabold'>Cooking Method</span> : {cooking_method}</p>
                <button onClick={handleFavorite} disabled={isDisabled} className="btn mt-3 bg-1 border-0 shadow">Add to favorite</button>
               
            </div>

        </div>
    );
};

export default Recipie;