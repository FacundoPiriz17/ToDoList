import { TiTick } from "react-icons/ti";
import { useState } from "react";

export function TaskForm() {
    const [nombreTask, setNombreTask] = useState("");
    const [descTask, setDescTask] = useState("");
    const [priority, setPriority] = useState("");

    const submitForm = () => {
        setNombreTask("");
        setDescTask("");
        setPriority("");
    }

    return (
        <>
            <div className="flex flex-col justify-center">
                <div className="w-96 text-center">
                    <div className="gap-2 mb-4 ">
                        <input
                            type={"text"} value={nombreTask}
                            placeholder={"Escriba el nombre de su tarea"}
                            onChange={(e) => setNombreTask(e.target.value)}
                            className={"flex-1 px-4 py-2 rounded-lg text-black focus:none focus:ring-2 focus:ring-teal-700"}/>
                        <input type={"text"} value={descTask}
                               placeholder={"Escriba la descripción de su tarea"}
                               onChange={(e) => setDescTask(e.target.value)}
                               className={"flex-1 px-4 py-2 rounded-lg text-black focus:none focus:ring-2 focus:ring-teal-700"}/>
                        <input type={"text"} value={priority}
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