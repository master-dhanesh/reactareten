"use client";

const page = (props) => {
    console.log(props);
    return (
        <div>
            <h1>{props.params.username}</h1>
        </div>
    );
};

export default page;
