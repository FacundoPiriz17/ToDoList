import { TiTick } from "react-icons/ti";
import { useState } from "react";

export function TaskForm( {addNewTask} ) {
    const [taskName, setName] = useState("");
    const [taskDescription, setDescription] = useState("");
    const [taskPriority, setPriority] = useState("");

    const submitForm = () => {
        const newTask = {
            text: taskName,
            description: taskDescription,
            priority: taskPriority,
            isDone: false
        }

        setName("");
        setDescription("");
        setPriority("");

        addNewTask(newTask);
    }

    return (
        <>
            <div className="flex flex-col justify-center">
                <div className="w-96 text-center">
                    <div className="gap-2 mb-4 ">
                        <input
                            type={"text"} value={taskName}
                            placeholder={"Escriba el nombre de su tarea"}
                            onChange={(e) => setName(e.target.value)}
                            className={"flex-1 px-4 py-2 rounded-lg text-black focus:none focus:ring-2 focus:ring-teal-700"}/>
                        <input type={"text"} value={taskDescription}
                               placeholder={"Escriba la descripción de su tarea"}
                               onChange={(e) => setDescription(e.target.value)}
                               className={"flex-1 px-4 py-2 rounded-lg text-black focus:none focus:ring-2 focus:ring-teal-700"}/>
                        <input type={"text"} value={taskPriority}
                               placeholder={"Escriba la prioridad de su tarea"}
                               onChange={(e) => setPriority(e.target.value)}
                               className={"flex-1 px-4 py-2 rounded-lg text-black focus:none focus:ring-2 focus:ring-teal-700"}/>
                    </div>
                    <section className="flex flex-row justify-center">
                        <TiTick onClick={() => submitForm()}
                                className={"hover:outline-green-700 size-10"} cursor={"pointer"}/>
                    </section>
                </div>
            </div>
        </>
    )
}

export default TaskForm;