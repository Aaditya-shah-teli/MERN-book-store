import React from 'react'
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaShoppingCart } from 'react-icons/fa';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import required modules
import { Navigation, Pagination } from 'swiper/modules';


export const BookCards = ({ books, headline }) => {
    return (
        <div className='my-16 px-4 lg:px-24'>
            <h2 className='text-5xl text-center font-bold text-black'>{headline}</h2>
            {/* cardss */}
            <div className='mt-12'>
                <Swiper
                    autoHeight={true}
                    spaceBetween={20}
                    navigation={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Navigation, Pagination]}
                    className="mySwiper w-full h-full "
                >
                    <SwiperSlide>Slide 1</SwiperSlide>
                    {
                        books.map(book => <SwiperSlide key={book._id}>
                            <Link to={`/book/${book._id}`}>
                                <div className='relative '>
                                    <img src="https://images.theconversation.com/files/45159/original/rptgtpxd-1396254731.jpg?ixlib=rb-4.1.0&q=45&auto=format&w=754&fit=clip" />
                                    <div className='absolute top-3 right-3 bg-blue-600 hover:bg-black p-2 rounded'>
                                        <FaShoppingCart className='w-4 h-4 text-white'/>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <h3>{book.Title}</h3>
                                        <p>{book.authorName}</p>
                                    </div>
                                    <div>
                                        <p>$10</p>
                                    </div>
                                </div>
                            </Link>
                        </SwiperSlide>)
                    }

                </Swiper>
            </div>
        </div>
    )
}
