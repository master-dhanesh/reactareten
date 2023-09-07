"use client";
import {
    asyncincrement5,
    decrement,
    increment,
} from "@/store/actions/counterActions";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const page = () => {
    const { value } = useSelector((state) => state.counterReducer);
    const dispatch = useDispatch();
    const AddHandler = () => {
        dispatch(increment(1));
    };
    const Add5Handler = () => {
        // dispatch(increment5(5));
        dispatch(asyncincrement5(5));
    };

    const SubHandler = () => {
        dispatch(decrement(1));
    };
    return (
        <div>
            <h1>value : {value}</h1>
            <button onClick={AddHandler}>Add 1</button>
            <button onClick={SubHandler}>Sub 1</button>
            <button onClick={Add5Handler}>Add 5</button>
        </div>
    );
};

export default page;
