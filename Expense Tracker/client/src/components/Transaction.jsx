import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const Transaction = ({ transaction }) => {

    const { deleteTransaction } = useContext(GlobalContext);
    const sign = transaction.amount < 0 ? '-' : '+';

    return (
        <li id='task-list-item' className={
            transaction.amount < 0
                ? 'bg-white my-2 shadow-sm h-7 px-2 border-r-8 border-red-400 flex relative items-center group'
                : 'bg-white my-2 shadow-sm h-7 px-2 border-r-8 border-green-400 flex relative items-center group'}
        >
            <div className='text-left w-[50%]'>{transaction.text}</div>
            <button className='w-7 bg-red-500 text-white opacity-0 group-hover:opacity-100 transition-all' onClick={() => deleteTransaction(transaction._id)}>x</button>
            <div className='text-right w-[50%]'>{sign}${Math.abs(transaction.amount)}</div>
        </li>
    )
}

export default Transaction