import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Recipie from './Recipie';
import RecipeBanner from './RecipeBanner/RecipeBanner';
import Spinner from '../../../../../Spinner/Spinner';


const Receipies = () => {
    const navigation = useNavigation()
    console.log(navigation.state);
    if (navigation.state === 'loading') {
      return <Spinner></Spinner>
    }

    const chef = useLoaderData();
    const { recipes } = chef;
    // console.log(recipes);
    return (
        <>
        <RecipeBanner chef={chef}></RecipeBanner>
            <div className='grid lg:grid-cols-2 my-container gap-4'>
                {
                    recipes.map(r => <Recipie
                        key={r.recipe_id}
                        recipe={r}
                    ></Recipie>)
                }
            </div>
        </>
    );
};

export default Receipies;