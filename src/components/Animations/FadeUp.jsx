"use client"
import React, { useRef } from 'react';
import { AnimatePresence, motion, useInView } from 'framer-motion'
const FadeUp = ({ children, delay }) => {
    const ref = useRef()
    const isInView = useInView(ref, { once: false })

    return (
        <AnimatePresence>
            <motion.div
                ref={ref}
                initial={
                    {
                        y: 100,
                        opacity: 0
                    }
                }
                animate={
                    {
                        y: isInView ? 0 : 100,
                        opacity: isInView ? 1 : 0
                    }
                }
                exit={
                    {
                        y: !isInView ? 100 : 0,
                        opacity: !isInView ? 0 : 1
                    }
                }
                transition={{ duration: 0.8, delay: delay ? delay : 0.6, }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
};

export default FadeUp;