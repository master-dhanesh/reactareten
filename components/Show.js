"use client";
import React, { useEffect, useState } from "react";

const Show = () => {
    const [value, setvalue] = useState(12);
    const [page, setpage] = useState(1);

    useEffect(() => {
        // code to run when the component comes in view
        console.log("Show Component Created!");
        console.log("Call The Posts API!");

        return () => {
            // code to run when the component leaves from view
            console.log("Empty the state");
            alert("Do you want to leave this page?");
        };
    }, [page]);

    return (
        <div>
            <h1>This is Show Component</h1>
            <h1>{value}</h1>
            <button onClick={() => setvalue(value + 1)}>Change Value</button>
            <hr />
            <h1>Page no. {page}</h1>
            <button onClick={() => setpage(page + 1)}>Change Page</button>
        </div>
    );
};

export default Show;
