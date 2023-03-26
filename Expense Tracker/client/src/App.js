import React from 'react'
import Container from './components/Container'
import { GlobalProvider } from './context/GlobalState'

const App = () => {
    return (
        <GlobalProvider>
            <Container />
        </GlobalProvider>
    )
}

export default App