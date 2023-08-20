"use client";
import React, { createContext, useState } from "react";

export const User = createContext(null);

const UserContext = ({ children }) => {
    const [users, setusers] = useState(
        JSON.parse(localStorage.getItem("users")) || []
    );

    return <User.Provider value={[users, setusers]}>{children}</User.Provider>;
};

export default UserContext;
