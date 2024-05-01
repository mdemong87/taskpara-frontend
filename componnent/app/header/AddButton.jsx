"use client"

import { useStore } from "@/lib/store";
import { FaPlus } from "react-icons/fa6";

function AddButton() {

    const setmodalShow = useStore((state) => state.setmodalShow);

    return (
        <button onClick={() => setmodalShow(true)} className="bg-gray-900 text-gray-50 cursor-pointer px-3 py-1 gap-1 flex items-center border rounded-md transition hover:scale-105">
            <FaPlus className="text-lg text-gray-100" />
            <span>ADD</span>
        </button>
    )
}

export default AddButton;