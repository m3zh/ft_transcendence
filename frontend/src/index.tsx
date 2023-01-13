import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { store } from './providers/store'
import { Provider } from 'react-redux'

// in Typescript ! at the end of the line
// ensures that the value is never null
const root = ReactDOM.createRoot(document.getElementById('root')!) 

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
)
