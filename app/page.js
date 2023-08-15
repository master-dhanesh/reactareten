import Link from "next/link";

const page = () => {
    return (
        <div className="container mt-5">
            <h1>Homepage</h1>
            <Link href="/abc">Go to Website</Link>
        </div>
    );
};

export default page;
