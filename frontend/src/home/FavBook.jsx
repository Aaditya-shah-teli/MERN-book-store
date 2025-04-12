import React from 'react'
import { Link } from 'react-router-dom'

export const FavBook = () => {
  return (
    <div className='px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center gap-12'>
        <div className="md:w-1/2 space-y-6">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr4CZHEy58-UZl7mKcxB3tuqgZJH5rbsaEgw&s" alt="" className='rounded md:w-10/12' />
        </div>
        <div className='md:w-1/2'>
        <h2 className='text-5xl font-bold my-5 md:w-3/4 leading-snug'>Find Your Favourate <span className='text-blue-700'>Book Here</span></h2>
        <p className='mb-10 text-lg md:w-5/6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quasi itaque fuga quo aperiam eum, eaque quisquam ut numquam inventore odio voluptas voluptatibus ex accusantium nesciunt, nisi nemo sit laboriosam.</p>
        <div className='flex flex-col sm:flex-row gap-6 md:w-3/4 my-14'>
            <div>
                <h3 className='text-3xl font-bold '>800+</h3>
                <p className='text-base'>Book Listing</p>
            </div>
            <div>
                <h3 className='text-3xl font-bold '>550+</h3>
                <p className='text-base'>Register users</p>
            </div>
            <div>
                <h3 className='text-3xl font-bold '>1200+</h3>
                <p className='text-base'>PDF Downloads</p>
            </div>
        </div>
        <Link to='/shop' className='mt-12 block'><button className='bg-blue-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300'>Explore More</button></Link>
        </div>
    </div>
  )
}
