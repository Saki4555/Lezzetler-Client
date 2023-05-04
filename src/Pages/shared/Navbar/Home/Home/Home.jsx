import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Chef from '../Chef/Chef';
import Spinner from '../../../../../Spinner/Spinner';
import PopularFoods from '../PopularFoods/PopularFoods';
import FrequentlyAsked from '../FrequentlyAsked/FrequentlyAsked';
import LazyLoad from 'react-lazy-load';


const Home = () => {
    const chefData = useLoaderData();
    // console.log(chefData);

    const navigation = useNavigation();
    console.log(navigation.state);
    if (navigation.state === 'loading') {
        return <Spinner></Spinner>;
    }
    return (
        <div>
            <div className='my-container mx-auto mt-4 relative'>
                <LazyLoad>
                    <img className='w-full h-1/2 object-cover rounded-lg' src='https://i.ibb.co/pdjdTyh/home2.jpg' alt="" />
                </LazyLoad>

                <div className='absolute lg:left-1/4 top-1/4'>
                    <div className='w-full p-4 lg:p-0 lg:w-3/4 overflow-y-hidden-hidden'>
                        <h1 className='lg:text-4xl font-bold text-black mb-3'>Welcome to <span className='text-1'>Lezzetler</span> - Where Deliciousness Awaits!</h1>
                        <p className='lg:text-xl lg:font-bold text-black'>Are you a food lover looking for inspiration in the kitchen? Look no further than [Your Food Website]! Our website is your one-stop-shop for mouth-watering recipes, cooking tips, and culinary inspiration. Whether you're an experienced chef or a novice in the kitchen, we have something for everyone.</p>
                    </div>
                </div>
            </div>

            {/* chefs section */}

            <div className='my-container grid lg:grid-cols-3 gap-8 mt-16'>
                {
                    chefData.map(chef => <Chef
                        key={chef.id}
                        chef={chef}
                    ></Chef>)
                }
            </div>

            <PopularFoods></PopularFoods>
            <FrequentlyAsked></FrequentlyAsked>
        </div>
    );
};

export default Home;