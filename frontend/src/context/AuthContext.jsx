import { createContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    const login = (userData, userToken) => {
    setUser(userData);
    setToken(userToken);

    localStorage.setItem("token", userToken);
};
const logout = () => {
    setUser(null);
    setToken(null);

    localStorage.removeItem("token");
};

    return (
        <AuthContext.Provider
            value={{user,setUser,token,setToken, login,
    logout}}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;

