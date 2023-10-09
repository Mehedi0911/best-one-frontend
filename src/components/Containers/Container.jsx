import React from 'react';

const Container = ({ children, bg }) => {
    return (
        <div className={`container mx-auto px-8 ${bg}`}>
            {children}
        </div>
    );
};

export default Container;