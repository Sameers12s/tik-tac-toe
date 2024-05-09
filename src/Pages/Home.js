import React, { useState } from 'react';
import Button from '../components/Button';
import { Functionality } from '../api/Functionality';
import Popup from '../components/Popup';

const Home = () => {
    const [count, setCount] = useState(0);
    const [lock, setLock] = useState(false);
    const [data, setData] = useState(Array(9).fill(""));
    const [winner, setWinner] = useState(null);
    const [showPopup, setShowPopup] = useState(false); // Initialize with false

    const handleClick = (num) => {
        Functionality(num, count, lock, data, setData, setCount, setLock, setWinner, handleWinnerPopup);
    };

    const handleWinnerPopup = (winner) => {
        setWinner(winner);
        setShowPopup(true);
        setLock(true);
    };

    const resetGame = () => {
        setData(Array(9).fill(""));
        setCount(0);
        setLock(false);
        setShowPopup(false);
        setWinner(null);
    };


    return (
        <div>
            <h1 className="text-center text-5xl font-bold mt-20">Tic-Tac-Toe</h1>

            <div className='flex justify-center items-center h-1/5 pt-8 '>
                <Button className="box" onClick={() => handleClick(0)} buttonText={data[0]} />
                <Button className="box" onClick={() => handleClick(1)} buttonText={data[1]} />
                <Button className="box" onClick={() => handleClick(2)} buttonText={data[2]} />
            </div>

            <div className='flex justify-center items-center pt-2 h-1/5'>
                <Button className="box" onClick={() => handleClick(3)} buttonText={data[3]} />
                <Button className="box" onClick={() => handleClick(4)} buttonText={data[4]} />
                <Button className="box" onClick={() => handleClick(5)} buttonText={data[5]} />
            </div>

            <div className="flex justify-center items-center pt-2 h-1/5">
                <Button className="box" onClick={() => handleClick(6)} buttonText={data[6]} />
                <Button className="box" onClick={() => handleClick(7)} buttonText={data[7]} />
                <Button className="box" onClick={() => handleClick(8)} buttonText={data[8]} />
            </div>

            {winner && <Popup winner={winner} onClose={resetGame} />}

            <div className='flex justify-center items-center mt-10'>
                <button className='btn btn-success size-20 w-40 rounded-full text-2xl' onClick={resetGame}>Reset</button>
            </div>
        </div>
    );
};

export default Home;
