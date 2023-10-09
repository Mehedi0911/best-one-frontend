"use client"
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import Heading from '../Elements/Heading';
import Image from 'next/image';
import { FaArrowRightLong } from 'react-icons/fa6';
import { AnimatePresence, motion } from 'framer-motion'
import FadeUp from '../Animations/FadeUp';
const HeaderBanner = () => {
    const [moveIcon, setMoveIcon] = useState(false)
    console.log(moveIcon)
    return (
        <div className="w-full">
            <div className="flex w-full h-[88vh] items-start justify-start">
                <div className="w-0 lg:w-[15%] bg-slate-100  h-full  flex items-center justify-center">
                    <Image width={800} height={200} src="/images/echoOutlined.svg" alt="asd" className='-rotate-90 opacity-20' />
                </div>
                <div className="w-full lg:w-[85%] h-full">
                    <Swiper
                        grabCursor={true}
                        centeredSlides={true}
                        loop={true}
                        slidesPerView={'auto'}
                        autoplay={{ delay: 5000, disableOnInteraction: true }}
                        pagination={{ el: '.swiper-pagination', clickable: true, dynamicBullets: true }}
                        modules={[Pagination, Autoplay]}
                        className="swiper_container h-full overflow-hidden"
                    >
                        {
                            data?.map((banner) => (
                                <SwiperSlide
                                    key={banner.image}
                                    className={`h-full w-full bg-cover bg-center bg-no-repeat`}
                                    style={{ backgroundImage: `linear-gradient(45deg,rgba(0,0,0,0.4), rgba(0,0,0,0.1)), url(${banner.image})` }}
                                >

                                    <div className='h-full w-full flex items-center justify-center container mx-auto px-6 md:px-12 lg:px-24'>
                                        <div className='grid grid-cols-1 lg:grid-cols-3'>
                                            <div className='col-span-2'>
                                                <Heading text={banner.title} />
                                                <FadeUp delay={1}><p className='text-slate-200 mt-6 text-xl'>{banner.description}</p></FadeUp>
                                                <FadeUp delay={1.5}>
                                                    <div onMouseLeave={() => setMoveIcon(moveIcon && false)} onMouseOver={() => setMoveIcon(!moveIcon && true)} className='bg-white flex items-center justify-start relative mt-9 w-56 cursor-pointer shadow-md rounded-sm'>
                                                        <button className='px-6 py-4 hover:text-brandPrimary transition duration-300 text-lg font-[500]'>Explore More</button>
                                                        <AnimatePresence>
                                                            <motion.div initial={{ x: 0 }} animate={{ x: moveIcon ? 48 : 0 }} className='bg-brandPrimary text-white right-0 absolute h-full w-12 p-4 flex items-center justify-center'>
                                                                <FaArrowRightLong />
                                                            </motion.div>
                                                        </AnimatePresence>
                                                    </div>
                                                </FadeUp>

                                            </div>
                                        </div>
                                    </div>

                                </SwiperSlide>
                            ))
                        }

                        <div className="slider-controler">
                            <div className="swiper-pagination  left-0 pb-12">

                            </div>
                        </div>
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

const data = [
    {
        title: 'A global chemical distributor with in-depth expertise',
        description: 'Echo Chemical is a top 22 global chemical distributor and a leading biodegradable plastic packaging manufacturer. ',
        image: '/images/banner01.jpg'
    },
    {
        title: 'A global chemical distributor with in-depth expertise',
        description: 'Echo Chemical is a top 22 global chemical distributor and a leading biodegradable plastic packaging manufacturer. ',
        image: '/images/banner02.jpg'
    },
    {
        title: 'A global chemical distributor with in-depth expertise',
        description: 'Echo Chemical is a top 22 global chemical distributor and a leading biodegradable plastic packaging manufacturer. ',
        image: '/images/banner03.jpg'
    },
]

export default HeaderBanner;