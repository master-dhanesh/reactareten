"use client";
import axios from "@/utils/axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const page = () => {
    const [posts, setPosts] = useState([]);
    const [hasMore, sethasMore] = useState(true);

    const getPosts = async () => {
        try {
            const { data } = await axios.get(
                `/posts?_limit=10&_start=${posts.length}`
            );
            data.length === 0 && sethasMore(false);
            setPosts([...posts, ...data]);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getPosts();
    }, [page]);

    return (
        <div className="container mt-5 p-5">
            <h1>Axios Example</h1>
            <InfiniteScroll
                dataLength={posts.length}
                next={getPosts}
                hasMore={hasMore}
                loader={<p style={{ textAlign: "center" }}>Loading...</p>}
                endMessage={
                    <p style={{ textAlign: "center" }}>
                        <b>Yay! You have seen it all</b>
                    </p>
                }
            >
                {posts.length !== 0 &&
                    posts.map((p) => (
                        <div
                            className="fs-5 d-flex justify-content-between alert alert-light "
                            key={p.id}
                        >
                            {p.title} <Link href={`/${p.id}`}>Expore More</Link>
                        </div>
                    ))}
            </InfiniteScroll>
        </div>
    );
};

export default page;
