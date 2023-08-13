import React from "react";

const Show = (props) => {
    const {
        tasks,
        setTasks,
        settitle,
        setDescription,
        setStatus,
        setActiveTask,
    } = props;

    const UpdateHandler = (index) => {
        const { title, description, status } = tasks[index];
        settitle(title);
        setDescription(description);
        setStatus(status);
        setActiveTask(index);
    };

    const DeleteHandler = (index) => {
        setTasks(tasks.filter((t, i) => i !== index));
    };

    let tasklist = (
        <h2 style={{ margin: "auto", color: "tomato" }} className="">
            Loading...
        </h2>
    );
    if (tasks.length > 0) {
        tasklist = tasks.map((task, index) => {
            return (
                <div
                    key={index}
                    className="card mycard  mb-3 me-3"
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

    const style = {
        display: "flex",
        flexWrap: "wrap",
    };

    return <div style={style}>{tasklist}</div>;
};

export default Show;
