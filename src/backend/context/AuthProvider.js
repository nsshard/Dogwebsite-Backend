import {createContext, useState} from "react";
/**
 * Creates auth context
 * 
 */
const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
	const [auth, setAuth] = useState({});
	
	return (
	<AuthContext.Provider value ={{ auth, setAuth }}>
		{children}
		</AuthContext.Provider>
		)
}

export default AuthContext;