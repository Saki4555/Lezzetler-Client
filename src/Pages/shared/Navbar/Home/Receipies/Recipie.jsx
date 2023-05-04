import React from 'react';

const Recipie = ({ recipe }) => {
    const { cooking_method, ingredients, rating, recipe_id, recipe_img, recipe_name } = recipe;
    // console.log(recipe);
    return (
        <div className='bg-orange-50 p-3 shadow-lg rounded-md border border-orange-400'>
            <div className='flex gap-3'>
                <div>
                    <img className='rounded' src={recipe_img} alt="" />
                    <p className='text-xl font-medium mt-2'>Rating : {rating}</p>
                </div>
                <div>
                    <h3 className='text-xl font-bold mb-2'>Recipe Name : {recipe_name}</h3>
                    <p className='font-bold'>Ingredients :</p>
                    <ul>
                        {
                            ingredients.map((i, ind) => <li className='font-sm font-medium' key={ind}>{i}</li>)
                        }
                    </ul>
                </div>
            </div>
            <div className=''>
                
                <p className='font-medium mt-2'>Cooking Method : {cooking_method}</p>
                <button className="btn mt-3 bg-1 border-0 shadow">Add to favorite</button>
            </div>
        </div>
    );
};

export default Recipie;