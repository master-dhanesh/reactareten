"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "@/store/reducers/counterReducer";

const page = () => {
    const dispatch = useDispatch();
    const { value } = useSelector((state) => state.counterReducer);

    const AddHandler = () => {
        dispatch(increment(1));
    };

    const SubHandler = () => {
        dispatch(decrement(1));
    };
    return (
        <div>
            <h1>value : {value}</h1>
            <button onClick={AddHandler}>Add 1</button>
            <button onClick={SubHandler}>Sub 1</button>
        </div>
    );
};

export default page;
