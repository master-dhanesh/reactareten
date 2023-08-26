"use client";

import { GetSingle, wait } from "@/utils/getSingle";
import React, { Suspense } from "react";

const page = async ({ params }) => {
    const post = await GetSingle(params.id);
    return (
        <div>
            <h1>Single Post</h1>
            <h3>{JSON.stringify(post)}</h3>
            <Suspense fallback={<h3>Loading........</h3>}>
                {wait(2000)}
                <h1>This data will load later...</h1>
            </Suspense>
        </div>
    );
};

export default page;
