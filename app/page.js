"use client";
import { useState } from "react";
import { toast } from "react-toastify";

const page = () => {
    const [title, settitle] = useState("");
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState("due");

    const [tasks, setTasks] = useState([]);

    const [activeTask, setActiveTask] = useState(null);

    const SubmitHandler = (e) => {
        e.preventDefault();

        // validation
        if (title.length < 5 || description.length < 20) {
            toast.error(
                "Title and Description must be more than 5 and 20 characters respectively"
            );

            return;
        }

        const newtask = {
            date: new Date().toLocaleDateString(),
            title,
            description,
            status,
        };

        setTasks([...tasks, newtask]);

        settitle("");
        setDescription("");
        setStatus("due");
    };

    const UpdateHandler = (index) => {
        const { title, description, status } = tasks[index];
        settitle(title);
        setDescription(description);
        setStatus(status);
        setActiveTask(index);
    };

    const UpdateTask = (e) => {
        e.preventDefault();
        const copyTasks = [...tasks];
        copyTasks[activeTask] = {
            ...copyTasks[activeTask],
            title,
            description,
            status,
        };
        setTasks(copyTasks);
        setActiveTask(null);
        settitle("");
        setDescription("");
        setStatus("due");
    };

    const DeleteHandler = (index) => {
        setTasks(tasks.filter((t, i) => i !== index));
    };

    let tasklist = (
        <h2 className="mt-5 w-100 text-center text-danger">Loading...</h2>
    );
    if (tasks.length > 0) {
        tasklist = tasks.map((task, index) => {
            return (
                <div
                    key={index}
                    className="card  mb-3 me-3"
                    style={{ width: "18rem" }}
                >
                    <div className="card-body">
                        <h5 className="card-title">{task.title}</h5>
                        <h6 className="card-subtitle mb-2 text-body-secondary">
                            {task.status}
                        </h6>
                        <p className="card-text">{task.description}</p>

                        <button
                            onClick={() => UpdateHandler(index)}
                            className="me-2 btn btn-sm   btn-dark"
                        >
                            Update Task
                        </button>
                        <button
                            onClick={() => DeleteHandler(index)}
                            className="btn btn-sm btn-dark"
                        >
                            Delete Task
                        </button>
                    </div>
                </div>
            );
        });
    }

    return (
        <div className="mt-5 container p-5">
            <form className="w-50">
                <h2>Create Your Tasks</h2>
                <input
                    onChange={(e) => settitle(e.target.value)}
                    value={title}
                    className="form-control mb-3"
                    type="text"
                    placeholder="Title"
                />
                <textarea
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                    className="form-control mb-3"
                    placeholder="description here..."
                ></textarea>
                <select
                    onChange={(e) => setStatus(e.target.value)}
                    className="form-control mb-3"
                    value={status}
                >
                    <option value="due">Due</option>
                    <option value="pending">Pending</option>
                    <option value="completed">Completed</option>
                </select>

                {activeTask === null ? (
                    <button onClick={SubmitHandler} className="btn btn-primary">
                        Create Task
                    </button>
                ) : (
                    <button onClick={UpdateTask} className="btn btn-primary">
                        Update Task
                    </button>
                )}

                <hr />
            </form>
            <h2>Pending Tasks</h2>
            <div className="d-flex flex-wrap">{tasklist}</div>
        </div>
    );
};

export default page;
