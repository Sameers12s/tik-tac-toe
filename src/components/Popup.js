import React from 'react';

const Popup = ({ winner, onClose }) => {
    const handleClose = () => {
        onClose(); // Call the onClose function passed as a prop
    };

    return (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
            <div className="bg-gray-800 p-8 rounded-2xl w-96 h-60">
                <div className="flex justify-center items-center my-4">
                    <h2 className="text-2xl font-bold">Winner!! is : {winner} </h2>
                </div>
                <button className="btn btn-success w-full mt-8" onClick={handleClose}>Reset</button>
            </div>
        </div>
    );
};

export default Popup;
