"use client";
import React, { createContext, useState } from "react";

export const User = createContext(null);

const UserContext = ({ children }) => {
    const [users, setusers] = useState([
        { username: "john", email: "john@gmail.com", password: "123456" },
    ]);

    return <User.Provider value={[users, setusers]}>{children}</User.Provider>;
};

export default UserContext;
