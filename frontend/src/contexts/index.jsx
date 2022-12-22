import {useState, createContext, useMemo, useContext} from 'react';

export const AuthContext = createContext({
    token: 'bob',
    user: {}
});

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState('');
    const [user, setUser] = useState({});
    const userData = useMemo(() => ({token, setToken, user, setUser}), [token, setToken, user, setUser]);

    return (
        <AuthContext.Provider
            value={userData}
        >
            { children }
        </AuthContext.Provider>
    );
};
