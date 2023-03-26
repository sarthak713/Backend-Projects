import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const IncomeExpense = () => {

    const { transactions } = useContext(GlobalContext);

    const amounts = transactions.map(transaction => transaction.amount);
    const income = amounts
        .filter(item => item > 0)
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2);
    const expense = (amounts
        .filter(item => item < 0)
        .reduce((acc, item) => (acc += item), 0) * -1)
        .toFixed(2);

    return (
        <div className='flex justify-center items-center bg-white shadow-md my-3 py-3 incomeExpense'>
            <div className='flex flex-col w-[50%] font-semibold border-l-emerald-100 border-r-2'>
                <h4>INCOME</h4>
                <p className='text-2xl text-green-400'>{income}</p>
            </div>
            <div className='flex flex-col w-[50%] font-semibold'>
                <h4>EXPENSE</h4>
                <p className='text-2xl text-red-400'>{expense}</p>
            </div>
        </div>
    )
}

export default IncomeExpense