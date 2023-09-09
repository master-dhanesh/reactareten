"use client";
import { asyncAddImages } from "@/store/actions/galleryActions";
import { removeerror } from "@/store/reducers/galleryReducer";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const page = () => {
    const { images, errors } = useSelector((state) => state.galleryReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(asyncAddImages());
    }, []);

    if (errors) {
        alert(errors);
        dispatch(removeerror());
    }
    console.log(images, errors);
    return (
        <div>{images.length > 0 ? JSON.stringify(images) : "Loading..."}</div>
    );
};

export default page;
