"use client"
import React, { useRef } from 'react';
import Container from '../Containers/Container';
import { useInView } from 'framer-motion'
import SubHeading from '../Elements/SubHeading';
import { BsSend } from 'react-icons/bs';
import { RiSendPlaneLine } from 'react-icons/ri';
import MapBox from '../HomePage/MapBox';
const Footer = () => {
    const ref = useRef()
    const isInView = useInView(ref, { once: true })
    return (
        <div className="bg-brandDark text-white py-24 overflow-hidden">
            <Container>
                <div className=" grid grid-cols-1 gap-6 lg:grid-cols-2 bg-[url('/images/map2.svg')] bg-no-repeat bg-100 bg-top lg:bg-center lg:bg-cover">
                    <div className='lg:pr-48'>
                        <h6 className="mb-3 text-brandPrimary">Contact</h6>
                        <SubHeading variant={'light'} text={'We are always ready to help you and answer your questions'} />
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12'>


                            <div className=''>
                                <h5 className='mb-3 font-semibold text-xl'>Dhaka</h5>
                                <h6 className=''>51, Shahid Sangbadik Selina Parvin Sarak (2nd floor),<br />
                                    Dhaka-1217, Bangladesh</h6>
                            </div>
                            <div className=''>
                                <h5 className='mb-3 font-semibold text-xl'>Social Feed</h5>
                                <h6 className=''>51, Shahid Sangbadik Selina Parvin Sarak (2nd floor),<br />
                                    Dhaka-1217, Bangladesh</h6>
                            </div>


                            <div>
                                <h5 className='mb-3 font-semibold text-xl'>Phone</h5>
                                <h6 className=''>+88-2-48317794</h6>
                                <h6 className=''>+88-2-48317794</h6>
                            </div>
                            <div>
                                <h5 className='mb-3 font-semibold text-xl'>Email</h5>
                                <h6 className=''>We&apos;d love To work with you</h6>
                                <h6 className=''>info@echobd.org</h6>
                            </div>
                        </div>
                        <img src="/images/echoOutlined.svg" alt="echo" className='opacity-40 my-12 lg:mt-24' />
                    </div>


                    <div
                        ref={ref}
                        className="bg-[rgba(255,255,255,0.9)] p-16"
                        style={{
                            transform: isInView ? "none" : "translateX(200px)",
                            opacity: isInView ? 1 : 0,
                            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                        }}
                    >
                        <SubHeading text={'Get In Touch'} variant={'dark'} />
                        <p className='text-slate-800 text-lg mb-6'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam laboriosam quibusdam quam, adipisci aut impedit.</p>
                        <input type="text" placeholder='Full Name' className='w-full border-b-[1px] border-slate-300 outline-none py-3 text-slate-800 mb-6 bg-transparent' />
                        <input type="text" placeholder='Email' className='w-full border-b-[1px] border-slate-300 outline-none py-3 text-slate-800 mb-6 bg-transparent' />
                        <input type="text" placeholder='Subject' className='w-full border-b-[1px] border-slate-300 outline-none py-3 text-slate-800 mb-6 bg-transparent' />
                        <textarea rows={6} type="text" placeholder='Message' className='w-full border-b-[1px] border-slate-300 outline-none py-3 text-slate-800 mb-6 bg-transparent' />
                        <button className='text-brandPrimary font-[500] border-b-[1px] py-2 border-brandPrimary flex items-center'>Send Message <BsSend className='ml-2' /></button>
                    </div>

                </div>
                <div className='flex overflow-hidden items-center justify-center my-24 w-full '>
                    <MapBox />
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div>
                        <h6 className='text-4xl text-brandPrimary mb-3'>ECHO</h6>
                        <p className='text-white opacity-80 text-md mb-6'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur cum quas error a dolor, deleniti, aspernatur aliquid quod ut optio assumenda nesciunt iure possimus vitae?</p>
                    </div>
                    <div>
                        <h6 className='text-xl text-white mb-3 font-semibold'>Useful Links</h6>
                        <div className="flex flex-col space-y-1 mt-12 w-1/3">
                            <a href="#" className="border-b-2 border-transparent hover:border-brandPrimary hover:text-brandPrimary transition duration-300 ease-in-out py-2">Products</a>
                            <a href="#" className="border-b-2 border-transparent hover:border-brandPrimary hover:text-brandPrimary transition duration-300 ease-in-out py-2">News</a>
                            <a href="#" className="border-b-2 border-transparent hover:border-brandPrimary hover:text-brandPrimary transition duration-300 ease-in-out py-2">Career</a>
                            <a href="#" className="border-b-2 border-transparent hover:border-brandPrimary hover:text-brandPrimary transition duration-300 ease-in-out py-2">Privacy Policy</a>
                            <a href="#" className="border-b-2 border-transparent hover:border-brandPrimary hover:text-brandPrimary transition duration-300 ease-in-out py-2">Affiliate</a>


                        </div>
                    </div>
                    <div>
                        <h6 className='text-xl text-white mb-3 font-semibold'>Newsletter</h6>
                        <p className='text-white opacity-80 text-md mb-6'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                        <div className='border-slate-300 border-b-[1px] py-3 flex items-center justify-between'>
                            <input type="text" placeholder='Full Name' className='outline-none py-3 text-white bg-transparent' />
                            <button className='text-brandPrimary font-[500] py-2 flex items-center'>Subscribe <RiSendPlaneLine className='ml-1' /></button>

                        </div>
                    </div>

                </div>
                <hr className='my-6 opacity-20' />
                <div className="flex items-center justify-between">
                    <p className="flex items-center justify-start">Developed and Maintained by <img className="w-1/5 ml-4" src="/images/muazlogo.svg" alt="" /></p>
                    <p>© <span className="font-semibold text-brandPrimary">ECHO Corporation.</span> All Rights Reserved.</p>
                </div>
            </Container>
        </div>
    );
};

export default Footer;