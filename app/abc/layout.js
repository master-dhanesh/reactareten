import Link from "next/link";
import React from "react";

const CommonRoutes = ({ children }) => {
    return (
        <>
            <nav>
                <Link href="/abc">Home</Link>
                <Link className="mx-3" href="/abc/signup">
                    Signup
                </Link>
                <Link href="/abc/signin">Signin</Link>
            </nav>
            {children}
        </>
    );
};

export default CommonRoutes;
