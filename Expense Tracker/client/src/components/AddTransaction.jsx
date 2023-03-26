import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const AddTransaction = () => {

    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);
    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault(); 
        const newTransaction = {
            id: Math.floor(Math.random() * 1000),
            text,
            amount: +amount
        }
        addTransaction(newTransaction);
        setText("");
        setAmount("");
    }

    return (
        <div id='new-transaction'>
            <h3 className='font-semibold text-left text-xl border-b-2 pb-1 my-1'>Add new transaction</h3>
            <form onSubmit={onSubmit} className='flex flex-col text-left justify-center'>
                <div className='my-1'>
                    <label htmlFor="text" className='font-semibold'>
                        Text
                    </label><br />
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder='Enter Text...' className='border-2 my-1 p-1 w-[100%]' required/>
                </div>
                <div>
                    <label htmlFor="amount" className='font-semibold'>
                        Amount
                        <br />
                        <span className='text-gray-500 font-light'>(negative - expense, positive - income)</span>
                    </label><br />
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder='Enter Amount...' className='border-2 my-1 p-1 w-[100%]' required/>
                </div>
                <button className='w-[100%] bg-purple-400 mt-3 py-1 text-white hover:shadow-md transition-all'>Add Transaction</button>
            </form>
        </div>
    )
}

export default AddTransaction