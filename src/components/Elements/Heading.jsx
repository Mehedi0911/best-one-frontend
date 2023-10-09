import React from 'react';
import FadeUp from '../Animations/FadeUp';

const Heading = ({ variant, text }) => {
    return (
        <div>
            <FadeUp>
                <h1
                    className={`text-4xl leading-tight lg:leading-tight xl:leading-tight md:text-5xl xl:text-7xl font-[600] ${variant === 'dark' ? "text-black" : "text-white"}`}>
                    {text}
                </h1>
            </FadeUp>
        </div>
    );
};

export default Heading;