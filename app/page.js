"use client";

import axios from "axios";
import { useEffect, useState } from "react";

const page = () => {
    const [amount, setamount] = useState("");
    const [difficulty, setDifficulty] = useState("");
    const [category, setCategory] = useState("");

    const [allcategories, setAllcategories] = useState([]);
    const getCategories = async () => {
        try {
            const { data } = await axios.get(
                "https://opentdb.com/api_category.php"
            );
            console.log(data.trivia_categories);
            setAllcategories(data.trivia_categories);
        } catch (error) {
            console.log(error);
        }
    };

    const CallApiHandler = (e) => {
        e.preventDefault();
        const query = {
            amount,
            category,
            difficulty,
        };
        console.log(query);
        callQuiz();
    };

    const callQuiz = async () => {
        try {
            const { data } = await axios.get(
                `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}`
            );
            // console.log(data.results);

            const shuffleArray = (arr) => {
                return arr
                    .map((a) => [Math.random(), a])
                    .sort((a, b) => a[0] - b[0])
                    .map((a) => a[1]);
            };

            const updatedQuiz = data.results.reduce(
                (acc, cv) => [
                    ...acc,
                    {
                        question: cv.question,
                        answer: cv.correct_answer,
                        options: shuffleArray([
                            ...cv.incorrect_answers,
                            cv.correct_answer,
                        ]),
                    },
                ],
                []
            );
            console.log(updatedQuiz);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getCategories();
    }, []);

    return (
        <div className="container mt-5">
            <form onSubmit={CallApiHandler}>
                <input
                    value={amount}
                    onChange={(e) => setamount(e.target.value)}
                    type="number"
                    placeholder="amount"
                />
                <br />
                <select
                    // value={difficulty}
                    onChange={(e) => setDifficulty(e.target.value)}
                >
                    <option value="">Any Difficulty</option>
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </select>
                <br />
                <select
                    // value={difficulty}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option value="">Any Category</option>
                    {allcategories.map((c) => (
                        <option key={c.id} value={c.id}>
                            {c.name}
                        </option>
                    ))}
                </select>
                <br />
                <button>Submit</button>
            </form>
        </div>
    );
};

export default page;
