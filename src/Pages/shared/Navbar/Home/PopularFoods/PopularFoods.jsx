import React from 'react';

const PopularFoods = () => {
    return (
        <div className='mt-20 my-container mb-16'>
            <h1 className='text-center text-5xl font-bold mb-6'>Popular Dishes</h1>
            <div className='grid lg:grid-cols-4 gap-6'>
                <div className="overflow-hidden shadow-md border-2 border-[#FF5733]">
                    <div className="p-4">
                        <h3 className="text-xl font-bold text-gray-900">Kebap</h3>
                        <p className="text-sm text-gray-500 mt-2">Even its most famous dish is incredibly diverse. Wikipedia lists 37 varieties, using beef, lamb, or chicken either minced, cubed or thinly sliced, either plated or wrapped, and served with</p>
                    </div>
                    
                    <div className="p-4 flex justify-center bg-1 h-56">
                        <img className="rounded w-full object-cover" src="https://i.ibb.co/BfHzLLt/Adana-kebabi-960x720-jpg.webp" alt="Dish Image" />
                    </div>
                </div>
                <div className="overflow-hidden shadow-md  border-2 border-[#FF5733]">
                    <div className="p-4">
                        <h3 className="text-xl font-bold text-gray-900">Köfte</h3>
                        <p className="text-sm text-gray-500 mt-2">Meat balls. Do not go into a köfte restaurant expecting anything other than köfte. These restaurants are heaven for the indecisive</p>
                    </div>
                    
                    <div className="p-4 flex justify-center bg-1 mt-5 h-56">
                        <img className="rounded w-full object-cover shadow-2xl" src="https://i.ibb.co/F5Cg1k0/Turkish-Kofte-1-960x800-jpg.webp" alt="Dish Image" />
                    </div>
                </div>
                <div className="overflow-hidden shadow-md  border-2 border-[#FF5733]">
                    <div className="p-4">
                        <h3 className="text-xl font-bold text-gray-900">Hamsi</h3>
                        <p className="text-sm text-gray-500 mt-2">With around 5,000 miles of coastline, fishing is big industry. But the number one favorite fish is hamsi, fresh from the Black Sea. While it can be baked or poached, it’s simply best when it is fried.</p>
                    </div>
                    
                    <div className="p-4 flex justify-center bg-1 h-56">
                        <img className="rounded w-full object-cover shadow-2xl" src="https://i.ibb.co/z8gvgbq/Hamsi-anchovy-960x800-jpg.webp" alt="Dish Image" />
                    </div>
                </div>
                <div className="overflow-hidden shadow-md  border-2 border-[#FF5733]">
                    <div className="p-4">
                        <h3 className="text-xl font-bold text-gray-900">Zeytinyağlılar</h3>
                        <p className="text-sm text-gray-500 mt-2">Time to feed the vegans. Any restaurant displaying a variety of dishes in the window will also have zeytinyağlılar – vegetable dishes cooked in olive oil and served cold..</p>
                    </div>
                    
                    <div className="p-4 flex justify-center bg-1 h-56">
                        <img className="rounded w-full object-cover shadow-2xl" src="https://i.ibb.co/N2XcJQ0/Zeytinyaglilar-jpg.webp" alt="Dish Image" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopularFoods;