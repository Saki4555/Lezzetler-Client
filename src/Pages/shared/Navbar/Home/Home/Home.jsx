import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Chef from '../Chef/Chef';


const Home = () => {
    const chefData = useLoaderData();
    // console.log(chefData);

    const navigation = useNavigation()
    if (navigation.state === 'loading') {
      return <Spinner></Spinner>
    }
    return (
        <div>
            <div className='my-container mx-auto mt-4 relative'>
                <img className='w-full h-1/2 object-cover rounded-lg' src="/public/home2.jpg" alt="" />
                <div className='absolute lg:left-1/4 top-1/4'>
                    <div className='w-full p-4 lg:p-0 lg:w-3/4 overflow-y-hidden-hidden'>
                        <h1 className='lg:text-4xl font-bold text-white mb-3'>Welcome to <span className='text-1'>Lezzetler</span> - Where Deliciousness Awaits!</h1>
                        <p className='lg:text-xl lg:font-bold text-white'>Are you a food lover looking for inspiration in the kitchen? Look no further than [Your Food Website]! Our website is your one-stop-shop for mouth-watering recipes, cooking tips, and culinary inspiration. Whether you're an experienced chef or a novice in the kitchen, we have something for everyone.</p>
                    </div>
                </div>
            </div>

            <div className='my-container grid lg:grid-cols-3 gap-8 mt-16'>
                {
                    chefData.map(chef => <Chef
                        key={chef.id}
                        chef={chef}
                    ></Chef>)
                }
            </div>
        </div>
    );
};

export default Home;