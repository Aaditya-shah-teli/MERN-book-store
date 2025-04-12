import React from 'react'
import { BannerCard } from '../home/BannerCard'


export const Banner = () => {
    return (
        <div className='px-4 lg:px-24 bg-teal-100 flex items-center '>
            <div className='w-full flex flex-col md:flex-row justify-between items-center gap-12 py-40'>
                {/* left side */}
                <div className='md:w-1/2 space-y-8 h-full'>
                    <h2 className='text-6xl font-bold leading-snug text-black'>Buy and Sell your books <span className='text-blue-700'>for the best prices</span></h2>
                    <p className='md:w-4/5 '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque, maxime voluptas harum vitae accusamus quaerat atque fugit minima exercitationem excepturi molestias voluptate error? Perspiciatis, ratione error. Dolore harum voluptatibus veniam.</p>
                    <div>
                        <input type="text" name="search" id="search" placeholder='Search a book' className='py-2 px-2 rounded-s-sm outline' />
                        <button className='bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200'>Search</button>
                        </div>
                </div>
                {/* right side */}
                <div><BannerCard/></div>
            </div>
        </div>
    )
}
