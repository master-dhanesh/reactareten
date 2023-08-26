"use client";
import Show from "@/components/Show";
import axios from "@/utils/axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const page = () => {
    const [posts, setPosts] = useState([]);

    const [page, setpage] = useState(1);

    const [show, setShow] = useState(false);

    const getPosts = async () => {
        try {
            const { data } = await axios.get(`/posts?_page=${page}`);
            setPosts(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        console.log("Api called!");
        getPosts();
    }, [page]);

    return (
        <div className="container mt-5 p-5">
            <h3>Click to Show Data</h3>
            <button onClick={() => setShow(!show)} className="btn btn-primary">
                {!show ? "Show" : "Hide"}
            </button>

            {show ? <Show /> : ""}

            <hr />

            <h1>Axios Example</h1>
            {/* <button onClick={getPosts} className="btn btn-success">
                Posts
            </button>
            <hr /> */}

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

            <button onClick={() => setpage(page + 1)}>Next</button>
        </div>
    );
};

export default page;
