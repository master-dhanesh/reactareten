"use client";

import { User } from "@/utils/UserContext";
import { useRouter } from "next/navigation";
import { useContext } from "react";

const page = () => {
    const router = useRouter();
    const [users, setusers] = useContext(User);
    console.log(users);

    const SubmitHandler = (e) => {
        e.preventDefault();
        const username = e.target[0].value;
        const password = e.target[1].value;
        const isUser = users.find(
            (user) => user.username === username && user.password === password
        );

        if (isUser) {
            const userIndex = users.findIndex((user) => user === isUser);
            console.log(userIndex);
            router.push(`/signin/${userIndex}`);
        } else {
            alert("User Not Found");
        }
    };
    return (
        <div className="container mt-5">
            <h2>Signin Page</h2>
            <form onSubmit={SubmitHandler} className="w-50">
                <input
                    type="text"
                    placeholder="Username"
                    className="mb-3 form-control"
                />
                <input
                    type="text"
                    placeholder="********"
                    className="mb-3 form-control"
                />
                <button className="btn btn-success">Sign in</button>
            </form>
        </div>
    );
};

export default page;
