import React from 'react';

const SubHeading = ({ text, variant }) => {
    return (
        <div className={`text-xl  mb-3 leading-tight lg:leading-tight xl:leading-tight lg:text-3xl xl:text-4xl font-[600] ${variant === 'dark' ? "text-slate-800" : "text-white"}`}>
            {text}
        </div>
    );
};

export default SubHeading;