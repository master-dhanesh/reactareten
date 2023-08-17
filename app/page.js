import Link from "next/link";
import React from "react";

const page = () => {
    return (
        <div className="container mt-4">
            <nav className="d-flex">
                <Link href="/signin">Signin</Link>
                <Link className="mx-3" href="/signup">
                    Signup
                </Link>
                <Link href="/about">About</Link>
            </nav>
        </div>
    );
};

export default page;
