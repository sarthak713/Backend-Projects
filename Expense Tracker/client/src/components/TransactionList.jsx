import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../context/GlobalState'
import Transaction from './Transaction';

const TransactionList = () => {

    const { transactions, getTransactions } = useContext(GlobalContext);
    useEffect(() => {
        getTransactions();
    }, []);

    return (
        <div className='my-5'>
            <h3 className='font-semibold text-left text-xl border-b-2 pb-1 my-1'>History</h3>
            <ul>
                {transactions.map(transaction => (
                    <Transaction key={transaction.id} transaction={transaction} />
                ))}
            </ul>
        </div>
    )
}

export default TransactionList