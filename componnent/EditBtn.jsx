'use client'

import { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import Modaler from "../componnent/Modaler";

import { useRouter } from "next/navigation";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddInputer from "./AddInputer";
import Loading from "./Loading";

function EditBtn({ data }) {


    console.log(data);


    const router = useRouter();
    const [isshow, setisshow] = useState(false);
    const [isloading, setisloading] = useState(false);
    const [title, settitle] = useState(data?.title);
    const [priority, setpriority] = useState('');
    const [stage, setstage] = useState('');
    const [dis, setdis] = useState('');


    console.log(title);





    async function handleTaskUpdate(id) {

        try {

            const updateData = {
                title: title,
                priority: priority,
                stage: stage,
                dis: dis
            }


            setisloading(true);
            const response = await fetch(`${process.env.NEXT_PUBLIC_MOCKAPI_URL}/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(updateData)
            });
            const res = await response.json();
            setisloading(false);
            setisshow(false);
            toast.success("Edit Task Successull");
            setTimeout(() => {
                router.push('/app');
            }, 1000);
        } catch (error) {
            console.log(error);
            console.error("Error updating task:", error.message);
        }
    }





    return (
        <div>
            <ToastContainer />
            {isloading && <Loading />}
            <button onClick={() => setisshow(true)} className="bg-green-300 text-gray-50 cursor-pointer px-1 py-1 md:px-3 md:py-1 gap-1 flex items-center border rounded-md transition hover:scale-105">
                <FaRegEdit className="text-xs sm:text-sm md:text-md text-gray-100" />
                <span className="text-xs sm:text-sm md:text-md">Edit</span>
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
                                    <select value={priority} onChange={(e) => { setpriority(e.target.value) }} className="w-full bg-gray-100 p-2 text-lg text-gray-600 outline-gray-400">
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
                                    <select value={stage} onChange={(e) => { setstage(e.target.value) }} className="w-full bg-gray-100 p-2 text-lg text-gray-600 outline-gray-400">
                                        <option value={"Brief"}>Brief</option>
                                        <option value="To-Do">To-Do</option>
                                        <option value="In-Progress">In Progress</option>
                                        <option value="Complete">Complete</option>
                                    </select>
                                </div>
                            </div>



                            <div className="flex flex-col md:flex-row justify-between items-start w-full gap-2 md:gap-4 my-5">
                                <div className="w-full md:w-[30%] flex items-center justify-between">
                                    <span className="text-xl font-semibold text-gray-500">Task Discription</span>
                                    <span>:</span>
                                </div>
                                <div className="w-full md:w-[70%]">
                                    <textarea value={dis} onChange={(e) => { setdis(e.target.value) }} className="w-full bg-gray-100 h-[180px] p-2 text-lg text-gray-600 outline-gray-400"></textarea>
                                </div>
                            </div>



                            <div onClick={() => handleTaskUpdate(data?.id)} className="w-full flex justify-end">
                                <button className="bg-gray-800 cursor-pointer rounded-md text-gray-100 px-3 py-2 transition hover:scale-105">Update Task</button>
                            </div>



                        </div>

                    </div>
                </Modaler>

            }


        </div>
    )
}

export default EditBtn;