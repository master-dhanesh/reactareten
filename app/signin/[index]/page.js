"use client";

import { User } from "@/utils/UserContext";
import { useContext } from "react";

const page = ({ params }) => {
    const [users, setuser] = useContext(User);
    const user = users[params.index];
    return (
        <div>
            <h1>{user.username}</h1>
            <h3>{user.email}</h3>
        </div>
    );
};

export default page;
