import React, { createContext } from 'react';
import {getAuth} from "firebase/auth";
import app from "../Firebase/firebase.config";

export const authContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const authInfo = {

    }
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;