import React, { useContext } from 'react'
import dark from '../icons/dark.png'
import light from '../icons/light.png'
import { GlobalContext } from '../context/GlobalState'

const DarkMode = () => {

    const { theme, toggleTheme } = useContext(GlobalContext);

    return (
        <div className='fixed left-3 top-3'>
            {
                theme==='dark' ?
                    <button onClick={()=>toggleTheme()} className='border-2 bg-slate-200 rounded-3xl shadow-sm'>
                        <img src={light} alt="light" className='h-10' />
                    </button> :
                    <button onClick={()=>toggleTheme()} className='border-2 rounded-3xl bg-slate-200 shadow-sm'>
                        <img src={dark} alt="dark" className='h-10' />
                    </button>
            }
        </div>
    )
}

export default DarkMode