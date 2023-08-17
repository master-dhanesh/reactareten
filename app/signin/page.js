import Link from "next/link";
import React from "react";

const page = () => {
    return (
        <div className="container mt-5">
            <h2>Signin Page</h2>
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
