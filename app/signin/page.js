"use client";
import Link from "next/link";

const page = () => {
    const SubmitHandler = (e) => {
        e.preventDefault();
        console.log("code to send data to backend-database");
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
            <div className="list-group">
                <Link className="list-group-item" href="/signin/anubhav">
                    Anubhav
                </Link>
                <Link className="list-group-item" href="/signin/ankur">
                    Ankur
                </Link>
                <Link className="list-group-item" href="/signin/harshit">
                    Harshit
                </Link>
                <Link className="list-group-item" href="/signin/anurag">
                    Anurag
                </Link>
                <Link className="list-group-item" href="/signin/hitesh">
                    Hitesh
                </Link>
            </div>
        </div>
    );
};

export default page;
