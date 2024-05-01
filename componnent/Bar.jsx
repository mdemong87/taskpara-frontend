'use client'

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { BsPlusSquareDotted } from "react-icons/bs";
import { FaFlag, FaLink, FaRegComment } from "react-icons/fa";
import { toast } from "react-toastify";
import convertToLocalDate from "../utlite/convertToLocalDate";
import Loading from "./Loading";

function Bar({ barData, drag, setdrag, catagory }) {

    const [targetedPosition, settargetedPosition] = useState(null);
    const [targetActive, settargetActive] = useState(false);
    const [isLoading, setisLoading] = useState(false);
    const router = useRouter();


    async function handleDrop(e) {

        settargetActive(false);
        const updatePositionValue = targetedPosition;
        const id = e.dataTransfer.getData("DragCardData");

        try {
            setisLoading(true);
            const response = await fetch(`${process.env.NEXT_PUBLIC_MOCKAPI_URL}/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ stage: targetedPosition })
            });
            const res = await response.json();
            setisLoading(false);
            toast.success("Stage Update Successull");
            router.push(router.asPath);
        } catch (error) {
            console.log(error);
            console.error("Error updating task:", error.message);
        }


    }

    return (
        <Link href={`/app/${barData?.id}`}>
            {isLoading && <Loading />}
            <div onDragStart={(e) => { setdrag(true); e.dataTransfer.clearData(); e.dataTransfer.setData("DragCardData", barData?.id) }} onDragEnd={() => setdrag(false)} draggable className="rounded-lg cursor-pointer border py-2 px-3 border my-5 bg-gray-50 h-fit transition duration-500 hover:scale-105 active:border-green-300 active:border-2 active:cursor-grab">
                <div>
                    <div className="flex flex-col gap-1 justify-center">
                        <h3 className="text-lg font-bold">{barData?.title}</h3>
                        <div className="flex items-center gap-2 py-2">
                            <div className="bg-gray-200 rounded-md px-2 py-1 text-sm text-gray-400">
                                {
                                    convertToLocalDate(barData?.createdAt)
                                }
                            </div>
                            <div className={`rounded-md px-2 py-1 text-sm text-red-400 flex items-center gap-1 ${barData?.priority === "High" ? "bg-red-100" : barData?.priority === "Medium" ? "bg-sky-200 " : "bg-green-200"} `}>
                                <FaFlag className={`${barData?.priority === "High" ? "text-red-400" : barData?.priority === "Medium" ? "text-sky-400 " : "text-green-400"}`} />
                                <span className={`${barData?.priority === "High" ? "text-red-400" : barData?.priority === "Medium" ? "text-sky-400 " : "text-green-400"}`}>{barData?.priority}</span>
                            </div>
                        </div>
                    </div>
                    <div className="py-3">
                        <div className='flex items-center relative'>
                            <Image width={500} height={500} className="border w-[40px] h-[40px] rounded-full z-20" src={barData?.avatarOne} alt="Peaple" />
                            <Image width={500} height={500} className="border w-[40px] h-[40px] rounded-full z-20 absolute left-5" src={barData?.avatarTwo} alt="Peaple" />
                            <Image width={500} height={500} className="border w-[40px] h-[40px] rounded-full z-20 absolute left-10" src={barData?.avatarThree} alt="Peaple" />
                        </div>
                    </div>
                    <div className="pt-3 flex items-center justify-between">
                        <div className="border px-2 py-1 rounded-md flex items-center gap-2">
                            <FaLink className="text-gray-400 text-lg" />
                            <span className="text-lg text-gray-400">9</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaRegComment className="text-gray-400 text-lg" />
                            <span className="text-lg text-gray-400">7</span>
                        </div>
                    </div>
                </div>
            </div>
            <div drag={catagory} className={`border-gray-200 flex flex-col items-center justify-center py-5 rounded-md text-gray-300 transition ${drag ? "block" : "hidden"} ${targetActive ? "border-green-300 border-2 bg-green-100" : "bg-white"}`} onDragEnter={(e) => { settargetActive(true); settargetedPosition(e.target.attributes?.drag?.value); }} onDragLeave={() => { settargetActive(false) }} onDrop={(e) => handleDrop(e)} onDragOver={(e) => e.preventDefault()}>
                <span className="pb-3">
                    Drap here
                </span>
                <BsPlusSquareDotted className="text-4xl text-gray-200" />
            </div>
        </Link >
    )
}

export default Bar;