"use client";

import { User } from "@/utils/UserContext";
import { useContext } from "react";

const page = (props) => {
    const [users, setusers] = useContext(User);
    console.log(users);
    return (
        <div>
            <h1>{props.params.username}</h1>
        </div>
    );
};

export default page;
