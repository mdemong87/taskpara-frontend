'use client'

import { useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import Modaler from "../componnent/Modaler";
import Loading from "./Loading";

function DeleteBtn({ id }) {



    const [isshow, setisshow] = useState(false);
    const [isloading, setisloading] = useState(false);

    const handleDelete = async () => {

        if (!id) {
            console.error("Task ID is not defined.");
            return;
        }
        try {

            setisloading(true);
            const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/app/task/${id}`, {
                method: "DELETE",
            });
            const res = await response.json();
            setisloading(false);
            console.log(res);
        } catch (error) {
            console.log(error);
            console.error("Error updating task:", error.message);
        }

    }

    return (
        <div>
            {isloading && <Loading />}
            <button onClick={() => setisshow(true)} className="bg-red-400 text-gray-50 cursor-pointer px-3 py-1 gap-1 flex items-center border rounded-md transition hover:scale-105">
                <MdDeleteOutline className="text-md text-gray-100" />
                <span className="text-md">Delete</span>
            </button>


            {
                isshow && <Modaler setisshow={setisshow}>
                    <div className="w-[300px] h-fit p-2">
                        <h2 className="text-2xl text-center font-semibold text-gray-600">Are you sure to Delete this Task?</h2>
                        <div className="flex justify-center mt-8">
                            <button onClick={() => handleDelete()} className="text-gray-100 font-semibold cursor-pointer bg-gray-900 w-fit rounded-md px-3 py-2">Yes</button>
                        </div>
                    </div>
                </Modaler>

            }


        </div>
    )
}

export default DeleteBtn;