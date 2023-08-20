"use client";

import { useRouter } from "next/navigation";
import { useContext } from "react";
import { User } from "@/utils/UserContext";

const page = () => {
    const router = useRouter();
    const [users, setusers] = useContext(User);

    const SubmitHandler = (e) => {
        e.preventDefault();
        const username = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        setusers([...users, { username, email, password }]);
        localStorage.setItem(
            "users",
            JSON.stringify([...users, { username, email, password }])
        );
        router.push("/signin");
    };

    return (
        <div className="container mt-5">
            <h2>Signup Page</h2>
            <form onSubmit={SubmitHandler} className="w-50">
                <input
                    type="text"
                    placeholder="Username"
                    className="mb-3 form-control"
                />
                <input
                    type="email"
                    placeholder="email@email.email"
                    className="mb-3 form-control"
                />
                <input
                    type="text"
                    placeholder="********"
                    className="mb-3 form-control"
                />
                <button className="btn btn-success">Sign Up</button>
            </form>
        </div>
    );
};

export default page;
