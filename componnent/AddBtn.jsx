'use client'

import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modaler from "../componnent/Modaler";
import AddInputer from "./AddInputer";
import Loading from "./Loading";

function AddBtn() {

    const router = useRouter();

    const [isshow, setisshow] = useState(false);
    const [title, settitle] = useState('');
    const [priority, setpriority] = useState('');
    const [stage, setstage] = useState('');
    const [dis, setdis] = useState('');
    const [isloading, setisloading] = useState(false);


    async function handleTaskCreate() {

        if (title === "" || priority === "" || stage === "" || dis === "") {
            toast.warn("Enter All filed");
        } else {
            setisloading(true);

            const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/app/task`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ title, priority, stage, dis })
            });
            const res = await response.json();
            setisloading(false);
            if (res.success) {
                settitle('');
                setpriority('');
                setstage('');
                setdis('');
                setisshow(false);
                router.refresh();
                toast.success(res.message);
            } else {
                toast.error(res.message);
            }

        }

    }



    return (
        <div>
            {
                isloading && <Loading />
            }
            <ToastContainer />
            <button onClick={() => setisshow(true)} className="bg-gray-900 text-gray-50 cursor-pointer px-3 py-1 gap-1 flex items-center border rounded-md transition hover:scale-105">
                <FaPlus className="text-lg text-gray-100" />
                <span>ADD</span>
            </button>


            {
                isshow && <Modaler setisshow={setisshow}>
                    <div className="w-[300px] sm:w-[360px] md:w-[700px] lg:w-[1000px] h-fit">
                        <div className="w-full p-2">
                            <AddInputer value={title} setvalue={settitle} name={"Task Title"} />


                            <div className="flex flex-col md:flex-row justify-between items-center w-full gap-2 md:gap-4 my-5">
                                <div className="w-full md:w-[30%] flex items-center justify-between">
                                    <span className="text-xl font-semibold text-gray-500">Task Priority</span>
                                    <span>:</span>
                                </div>
                                <div className="w-full md:w-[70%]">
                                    <select onChange={(e) => { setpriority(e.target.value) }} className="w-full bg-gray-100 p-2 text-lg text-gray-600 outline-gray-400">
                                        <option defaultValue={"Low"} value="Low">Low</option>
                                        <option value="Medium">Medium</option>
                                        <option value="High">High</option>
                                    </select>
                                </div>
                            </div>



                            <div className="flex flex-col md:flex-row justify-between items-center w-full gap-2 md:gap-4 my-5">
                                <div className="w-full md:w-[30%] flex items-center justify-between">
                                    <span className="text-xl font-semibold text-gray-500">Task Stage</span>
                                    <span>:</span>
                                </div>
                                <div className="w-full md:w-[70%]">
                                    <select onChange={(e) => { setstage(e.target.value) }} className="w-full bg-gray-100 p-2 text-lg text-gray-600 outline-gray-400">
                                        <option defaultValue={"To-Do"} value="To-Do">To-Do</option>
                                        <option value="In-Progress">In Progress</option>
                                        <option value="Complete">Complete</option>
                                        <option value="To-Do">To-Do</option>
                                    </select>
                                </div>
                            </div>



                            <div className="flex flex-col md:flex-row justify-between items-start w-full gap-2 md:gap-4 my-5">
                                <div className="w-full md:w-[30%] flex items-center justify-between">
                                    <span className="text-xl font-semibold text-gray-500">Task Discription</span>
                                    <span>:</span>
                                </div>
                                <div className="w-full md:w-[70%]">
                                    <textarea onChange={(e) => { setdis(e.target.value) }} className="w-full bg-gray-100 h-[180px] p-2 text-lg text-gray-600 outline-gray-400"></textarea>
                                </div>
                            </div>



                            <div onClick={() => handleTaskCreate()} className="w-full flex justify-end">
                                <button className="bg-gray-800 cursor-pointer rounded-md text-gray-100 px-3 py-2 transition hover:scale-105">Add Task</button>
                            </div>



                        </div>
                    </div>
                </Modaler>

            }


        </div>
    )
}

export default AddBtn;