import React from 'react';

const Button = ({ buttonText, onClick }) => {
    return (
        <div className='pr-2'>
            <button className='btn btn-secondary w-40 h-40 text-8xl' onClick={onClick}>{buttonText}</button>
        </div>
    );
};

export default Button;
