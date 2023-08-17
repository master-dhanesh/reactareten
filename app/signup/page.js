"use client";

import { useRouter } from "next/navigation";

const page = () => {
    const router = useRouter();

    const SubmitHandler = (e) => {
        e.preventDefault();
        console.log("code to send data to backend-database");
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
