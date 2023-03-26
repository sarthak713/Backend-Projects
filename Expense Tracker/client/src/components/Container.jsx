import React, { useContext } from 'react'
import Header from './Header'
import Balance from './Balance'
import IncomeExpense from './IncomeExpense'
import TransactionList from './TransactionList'
import AddTransaction from './AddTransaction'
import DarkMode from './DarkMode'
import { GlobalContext } from '../context/GlobalState'

const Container = () => {

    const { theme } = useContext(GlobalContext);

    return (
        <div className='max-w-[100vw] min-h-[100vh] flex flex-col justify-center items-center py-20' id={theme}>
            <Header />
            <div className='bg-slate-100 p-5 text-center innerContainer'>
                <Balance />
                <IncomeExpense />
                <TransactionList />
                <AddTransaction />
            </div>
            <DarkMode />
        </div>
    )
}

export default Container