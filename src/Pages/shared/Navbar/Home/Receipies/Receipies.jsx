import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Receipies = () => {

    const chef = useLoaderData();
    console.log(chef);
    return (
        <div>
            <h1>recipies</h1>
        </div>
    );
};

export default Receipies;