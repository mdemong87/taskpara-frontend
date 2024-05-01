'use client'

import Asideber from "@/componnent/Asideber";
import { useStore } from "@/lib/store";
import { RxCross2 } from "react-icons/rx";

function SmallScreenAsideWrper() {

    const asideShow = useStore((state) => state.asideShow);
    const setasideShow = useStore((state) => state.setasideShow);

    return (
        <div className={`flex absolute top-0 left-0 w-screen h-screen trBg ${asideShow ? "block" : "hidden"} lg:hidden`}>
            <div className="bg-white w-[70%] md:w-[30%] h-screen">
                <Asideber />
            </div>
            <div className="flex justify-end w-[30%] md:w-[70%] pr-4 pt-3">
                <div onClick={() => setasideShow(false)} className="bg-gray-700 h-[45px] w-[45px] cursor-pointer rounded-full pBg flex justify-center p-2 items-center R360">
                    <RxCross2 className="text-gray-100 text-4xl" />
                </div>
            </div>
        </div>
    )
}

export default SmallScreenAsideWrper;