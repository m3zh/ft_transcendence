import { useState, createContext } from 'react';

export const AuthContext = createContext({
    token: '',
    user: {}
});

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState('');
    const [user, setUser] = useState({});

    return (
        <AuthContext.Provider
            value={{
                token: token,
                user: user,
                setToken: setToken,
                setUser: setUser,
            }}
        >
            { children }
        </AuthContext.Provider>
    );
}
