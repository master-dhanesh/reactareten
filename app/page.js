"use client";
import axios from "@/utils/axios";
import Link from "next/link";
import React, { useState } from "react";

const page = () => {
    const [posts, setPosts] = useState([]);
    const getPosts = async () => {
        try {
            const { data } = await axios.get("/posts?_limit=10");
            setPosts(data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="container mt-5">
            <h1>Axios Example</h1>
            <button onClick={getPosts} className="btn btn-success">
                Posts
            </button>
            <hr />

            {posts.length !== 0
                ? posts.map((p) => (
                      <div
                          className="fs-5 d-flex justify-content-between alert alert-light "
                          key={p.id}
                      >
                          {p.title} <Link href={`/${p.id}`}>Expore More</Link>
                      </div>
                  ))
                : "Click to load the posts..."}
        </div>
    );
};

export default page;
