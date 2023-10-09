"use client"
import React, { useState, useEffect } from 'react';
import { HiMenuAlt1 } from 'react-icons/hi';
import { FiSearch } from 'react-icons/fi';
import { AiFillCloseSquare } from 'react-icons/ai';
import { BsFillArrowUpSquareFill } from 'react-icons/bs';
import { AnimatePresence, motion } from 'framer-motion'
const Navbar = () => {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
    const [isVisible, setIsVisible] = useState(false);
    const [searching, setSearching] = useState(false);
    const [drawerToggle, setDrawerToggle] = useState(false);

    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };


    const handleScroll = () => {
        const currentScrollPos = window.scrollY;
        setVisible(prevScrollPos > currentScrollPos || currentScrollPos === 0);
        setPrevScrollPos(currentScrollPos);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos, visible]);

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <div className="">
            <nav
                className={`z-20 shadow-sm fixed h-16  px-8 md:px-9 top-0 w-full transition-transform duration-300 transform ${visible ? 'translate-y-0' : '-translate-y-full'
                    } bg-white py-12 flex items-center justify-center`}
            >
                <AnimatePresence>
                    {
                        searching &&
                        <motion.div initial={{ y: -100 }} animate={{ y: 0 }} exit={{ y: -100 }} transition={{ duration: 0.4 }} className="bg-slate-50 flex justify-between px-12 items-center z-30 h-24 w-full absolute shadow-sm">
                            <div className='flex  w-full lg:w-1/2 items-center justify-start'>
                                <button className='flex items-center justify-center  w-12 bg-white'><FiSearch /></button>
                                <input className='w-full outline-none border-none py-2 px-6 text-slate-600 bg-transparent' placeholder='search' />
                            </div>
                            <button onClick={() => setSearching(false)} className='flex items-center justify-center  w-12 bg-white'><AiFillCloseSquare className='text-3xl text-brandPrimary' /></button>

                        </motion.div>
                    }
                </AnimatePresence>
                <div className="container mx-auto flex justify-between items-center">
                    <div className=" font-bold text-xl text-brandPrimary">ECHO</div>
                    <div className="hidden lg:flex space-x-8">
                        <a href="#" className="border-b-2 border-transparent hover:border-brandPrimary hover:text-brandPrimary transition duration-300 ease-in-out h-24 flex items-center justify-center">About Echo</a>
                        <a href="#" className="border-b-2 border-transparent hover:border-brandPrimary hover:text-brandPrimary transition duration-300 ease-in-out h-24 flex items-center justify-center">One Stop Solutions</a>
                        <a href="#" className="border-b-2 border-transparent hover:border-brandPrimary hover:text-brandPrimary transition duration-300 ease-in-out h-24 flex items-center justify-center">Products</a>
                        <a href="#" className="border-b-2 border-transparent hover:border-brandPrimary hover:text-brandPrimary transition duration-300 ease-in-out h-24 flex items-center justify-center">News</a>
                        <a href="#" className="border-b-2 border-transparent hover:border-brandPrimary hover:text-brandPrimary transition duration-300 ease-in-out h-24 flex items-center justify-center">Career</a>
                        <a href="#" className="border-b-2 border-transparent hover:border-brandPrimary hover:text-brandPrimary transition duration-300 ease-in-out h-24 flex items-center justify-center">Contact</a>

                    </div>
                    <div className="hidden lg:flex ">
                        <button onClick={() => setSearching(true)} className='h-24 flex items-center justify-center  w-12 bg-white'><FiSearch /></button>
                        <button className='h-24 w-48 bg-brandPrimary text-white text-lg font-semibold'>Get a Quote</button>
                    </div>
                    {/* Add a responsive menu button for small devices */}
                    <div className="lg:hidden flex">
                        <button onClick={() => setSearching(true)} className='h-24 flex items-center justify-center  w-12 bg-white'><FiSearch /></button>
                        <button onClick={() => setDrawerToggle(!drawerToggle)} className="">
                            <HiMenuAlt1 className='text-3xl' />
                        </button>

                    </div>
                </div>

            </nav>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-28 right-16  text-white py-2 px-4  cursor-pointer"
                >
                    <BsFillArrowUpSquareFill className='text-6xl transition duration-300 hover:text-brandPrimary' />
                </button>
            )}
            <div>
                {
                    drawerToggle && <div onClick={() => setDrawerToggle(false)} className="w-full fixed z-50 h-[100vh] bg-[rgba(0,0,0,0.4)]"></div>
                }
                <AnimatePresence>
                    {
                        drawerToggle &&
                        <motion.div
                            initial={{ opacity: 0, x: -200 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -200 }}
                            transition={{ duration: 0.5 }}
                            className="h-[100vh] lg:hidden fixed w-2/3 z-50 bg-white shadow-xl"
                        >
                            <div className="px-6 py-12">
                                <div className='flex justify-between items-center'>
                                    <h6>ECHO</h6>                                    <AnimatePresence>
                                        <motion.div onClick={() => setDrawerToggle(false)}
                                            initial={{ rotate: 180, opacity: 0 }}
                                            animate={{ rotate: 0, opacity: 1 }}
                                            exit={{ rotate: 90, opacity: 0 }}
                                            transition={{ duration: 0.3, delay: 0.2 }}
                                        >
                                            <AiFillCloseSquare className='text-slate-600 text-3xl' />
                                        </motion.div>
                                    </AnimatePresence>
                                </div>
                                <div className="flex flex-col space-y-1 mt-12">
                                    <a href="#" className="border-b-2 border-transparent hover:border-brandPrimary hover:text-brandPrimary transition duration-300 ease-in-out py-2">About Echo</a>
                                    <a href="#" className="border-b-2 border-transparent hover:border-brandPrimary hover:text-brandPrimary transition duration-300 ease-in-out py-2">One Stop Solutions</a>
                                    <a href="#" className="border-b-2 border-transparent hover:border-brandPrimary hover:text-brandPrimary transition duration-300 ease-in-out py-2">Products</a>
                                    <a href="#" className="border-b-2 border-transparent hover:border-brandPrimary hover:text-brandPrimary transition duration-300 ease-in-out py-2">News</a>
                                    <a href="#" className="border-b-2 border-transparent hover:border-brandPrimary hover:text-brandPrimary transition duration-300 ease-in-out py-2">Career</a>
                                    <a href="#" className="border-b-2 border-transparent hover:border-brandPrimary hover:text-brandPrimary transition duration-300 ease-in-out py-2">Contact</a>

                                </div>

                            </div>

                        </motion.div>
                    }
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Navbar;
