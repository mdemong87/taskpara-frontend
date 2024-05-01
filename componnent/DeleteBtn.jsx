'use client'

import { useStore } from "@/lib/store";
import { MdDeleteOutline } from "react-icons/md";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modaler from "../componnent/Modaler";
import Loading from "./Loading";
import Btn from "./modal/Btn";

function DeleteBtn({ id }) {

    const loading = useStore((state) => state.loading);
    const deletemodalShow = useStore((state) => state.deletemodalShow);
    const setdeletemodalShow = useStore((state) => state.setdeletemodalShow);


    return (
        <div>
            <ToastContainer />
            {loading && <Loading />}

            <button onClick={() => setdeletemodalShow(true)} className="bg-red-400 text-gray-50 cursor-pointer px-1 py-1 md:px-3 md:py-1 gap-1 flex items-center border rounded-md transition hover:scale-105">
                <MdDeleteOutline className="text-xs sm:text-sm md:text-md text-gray-100" />
                <span className="text-xs sm:text-sm md:text-md">Delete</span>
            </button>


            {
                deletemodalShow && <Modaler>
                    <div className="w-[300px] h-fit p-2">
                        <h2 className="text-2xl text-center font-semibold text-gray-600">Are you sure to Delete this Task?</h2>
                        <div className="flex justify-center mt-8">
                            <Btn name="Yes" id={id} />
                        </div>
                    </div>
                </Modaler>

            }


        </div>
    )
}

export default DeleteBtn;