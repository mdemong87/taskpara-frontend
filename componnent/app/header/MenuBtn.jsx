'use client'

import { useStore } from "@/lib/store";
import { LuMenu } from "react-icons/lu";

function MenuBtn() {

    const setasideShow = useStore((state) => state.setasideShow);

    return (
        <button>
            <LuMenu onClick={() => setasideShow(true)} className="text-3xl text-gray-700 cursor-pointer block lg:hidden" />
        </button>
    )
}

export default MenuBtn;