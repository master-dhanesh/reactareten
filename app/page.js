"use client";
import React, { useEffect } from "react";
import axios from "@/utils/axios";
const page = () => {
    const getUsers = async () => {
        try {
            const { data } = await axios.post("/read");
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };

    const CreateHandler = async () => {
        try {
            const newUser = {
                username: "master",
                email: "master@gmail.com",
                password: 12345678,
            };
            const { data } = await axios.post("/create", newUser);
            console.log(data);
        } catch (error) {
            alert(error.response.data);
        }
    };

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <div>
            <h1>User ops</h1>
            <button onClick={CreateHandler}>Create User</button>
        </div>
    );
};

export default page;
