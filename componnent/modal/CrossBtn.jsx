"use client"

import { useStore } from "@/lib/store";
import { RxCross2 } from "react-icons/rx";

function CrossBtn() {

    const setmodalShow = useStore((state) => state.setmodalShow);
    const setdeletemodalShow = useStore((state) => state.setdeletemodalShow);
    const setupdatemodalShow = useStore((state) => state.setupdatemodalShow);


    return (
        <button onClick={() => { setmodalShow(false), setupdatemodalShow(false), setdeletemodalShow(false) }} className="absolute -top-3 cursor-pointer -right-3 p-2 pBg rounded-full R360">
            <RxCross2 className="text-white text-xl" />
        </button>
    )
}

export default CrossBtn;