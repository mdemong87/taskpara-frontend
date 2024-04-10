'use client'

import Asideber from "@/componnent/Asideber";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import AppHeader from "../../componnent/AppHeader";

export default function AppLayout({ children }) {


    const [asideShow, setasideShow] = useState(false);



    return (
        <div>
            <div className="grid grid-cols-10 justify-between w-screen">
                <div className="hidden lg:block w-full bg-gray-50 lg:col-span-2 h-screen relative asideWrperWrper">
                    <div className="asideWrper bg-gray-50">
                        <Asideber setasideShow={setasideShow} />
                    </div>
                </div>
                <div className="col-span-10 lg:col-span-8 h-screen bg-gray-100 w-full relative">
                    <AppHeader setasideShow={setasideShow} />
                    <div className="w-full">
                        {
                            children
                        }
                    </div>
                </div>




                <div className={`flex absolute top-0 left-0 w-screen h-screen trBg ${asideShow ? "block" : "hidden"} lg:hidden`}>
                    <div className="bg-white w-[70%] md:w-[30%] h-screen">
                        <Asideber setasideShow={setasideShow} />
                    </div>
                    <div className="flex justify-end w-[30%] md:w-[70%] pr-4 pt-3">
                        <div onClick={() => setasideShow(false)} className="bg-gray-700 h-[45px] w-[45px] cursor-pointer rounded-full pBg flex justify-center p-2 items-center R360">
                            <RxCross2 className="text-gray-100 text-4xl" />
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
}
