'use client'

import { useRouter } from "next/navigation";
import { useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modaler from "../componnent/Modaler";
import Loading from "./Loading";

function DeleteBtn({ id }) {


    const router = useRouter();
    const [isshow, setisshow] = useState(false);
    const [isloading, setisloading] = useState(false);





    const handleDelete = async (id) => {

        try {

            setisloading(true);
            const response = await fetch(`${process.env.NEXT_PUBLIC_MOCKAPI_URL}/${id}`, {
                method: "DELETE"
            });
            const res = await response.json();
            setisloading(false);
            setisshow(false);
            toast.success("Task Delete Successfull");
            setTimeout(() => {
                router.push("/app");
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
            <button onClick={() => setisshow(true)} className="bg-red-400 text-gray-50 cursor-pointer px-1 py-1 md:px-3 md:py-1 gap-1 flex items-center border rounded-md transition hover:scale-105">
                <MdDeleteOutline className="text-xs sm:text-sm md:text-md text-gray-100" />
                <span className="text-xs sm:text-sm md:text-md">Delete</span>
            </button>


            {
                isshow && <Modaler setisshow={setisshow}>
                    <div className="w-[300px] h-fit p-2">
                        <h2 className="text-2xl text-center font-semibold text-gray-600">Are you sure to Delete this Task?</h2>
                        <div className="flex justify-center mt-8">
                            <button onClick={() => handleDelete(id)} className="text-gray-100 font-semibold cursor-pointer bg-gray-900 w-fit rounded-md px-3 py-2">Yes</button>
                        </div>
                    </div>
                </Modaler>

            }


        </div>
    )
}

export default DeleteBtn;