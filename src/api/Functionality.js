import { checkWinner } from "./winner";

export const Functionality = (num, count, lock, data, setData, setCount, setLock, setWinner) => {
    if (lock || data[num]) {
        return;
    }
    const newData = [...data];
    newData[num] = count % 2 === 0 ? "X" : "O";
    setData(newData);
    setCount(count + 1);

    const winner = checkWinner(newData);
    if (winner) {
        setWinner(winner);
        setLock(true);
    }
};
