import {useState, createContext, useMemo} from 'react';

export const AuthContext = createContext({
    token: '',
    user: {}
});

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState('');
    const [user, setUser] = useState({});

    const userData = useMemo(() => ({token, setToken, user, setUser}), [token, setToken, user, setUser]);

    return (
        <AuthContext.Provider
            value={
                userData
            }
        >
            { children }
        </AuthContext.Provider>
    );
}
