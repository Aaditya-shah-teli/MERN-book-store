import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import '../home/BannerCard.css'
export const BannerCard = () => {
  return (
    <div className='banner '>
        <Swiper
    effect={'cards'}
    grabCursor={true}
    modules={[EffectCards]}
    className="mySwiper"
  >
    <SwiperSlide><img className='img' src="https://media.gettyimages.com/id/157482029/photo/stack-of-books.jpg?s=612x612&w=gi&k=20&c=_Yaofm8sZLZkKs1eMkv-zhk8K4k5u0g0fJuQrReWfdQ=" alt="Books images not loading" /></SwiperSlide>
    <SwiperSlide><img className='img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUYPeCzrQ1pqkcPITWbkrDAp0QDRhClFy8hg&s" /></SwiperSlide>
    <SwiperSlide><img className='img' src="https://plus.unsplash.com/premium_photo-1669652639356-f5cb1a086976?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Ym9va3N8ZW58MHx8MHx8fDA%3D" alt="Books images not loading" /></SwiperSlide>
    <SwiperSlide><img className='img' src="https://media.gettyimages.com/id/157482029/photo/stack-of-books.jpg?s=612x612&w=gi&k=20&c=_Yaofm8sZLZkKs1eMkv-zhk8K4k5u0g0fJuQrReWfdQ=" alt="Books images not loading" /></SwiperSlide>
    <SwiperSlide><img className='img' src="https://media.gettyimages.com/id/157482029/photo/stack-of-books.jpg?s=612x612&w=gi&k=20&c=_Yaofm8sZLZkKs1eMkv-zhk8K4k5u0g0fJuQrReWfdQ=" alt="Books images not loading" /></SwiperSlide>
    <SwiperSlide><img className='img' src="https://media.gettyimages.com/id/157482029/photo/stack-of-books.jpg?s=612x612&w=gi&k=20&c=_Yaofm8sZLZkKs1eMkv-zhk8K4k5u0g0fJuQrReWfdQ=" alt="Books images not loading" /></SwiperSlide>
    <SwiperSlide><img className='img' src="https://media.gettyimages.com/id/157482029/photo/stack-of-books.jpg?s=612x612&w=gi&k=20&c=_Yaofm8sZLZkKs1eMkv-zhk8K4k5u0g0fJuQrReWfdQ=" alt="Books images not loading" /></SwiperSlide>
    <SwiperSlide><img className='img' src="https://media.gettyimages.com/id/157482029/photo/stack-of-books.jpg?s=612x612&w=gi&k=20&c=_Yaofm8sZLZkKs1eMkv-zhk8K4k5u0g0fJuQrReWfdQ=" alt="Books images not loading" /></SwiperSlide>
    <SwiperSlide><img className='img' src="https://media.gettyimages.com/id/157482029/photo/stack-of-books.jpg?s=612x612&w=gi&k=20&c=_Yaofm8sZLZkKs1eMkv-zhk8K4k5u0g0fJuQrReWfdQ=" alt="Books images not loading" /></SwiperSlide>
  </Swiper></div>
  )
}
