import Link from "next/link";
import { AiFillSchedule } from "react-icons/ai";
import { FaMap } from "react-icons/fa";
import { HiDocument } from "react-icons/hi";
import { IoBagCheckSharp, IoClipboard } from "react-icons/io5";
import { MdDashboard, MdOutlineAccessTimeFilled } from "react-icons/md";
import { SiTask } from "react-icons/si";
import LogoutBtn from "./LogoutBtn";

function Asideber() {
    return (
        <aside className="p-6 h-full w-full">
            <div className="w-full h-[95%]">
                <div className="flex items-center gap-2">
                    <SiTask className="text-gray-700 text-5xl" />
                    <span className="text-xl font-bold">
                        <span>Taks</span>
                        <span className="text-gray-400">Para</span>
                    </span>
                </div>

                <div className="h-full flex flex-col justify-between">
                    <div className="mt-10 w-full flex gap-3 flex-col">
                        <Link className="text-gray-500 rounded-md px-3 py-2 flex items-center gap-2" href="/app">
                            <MdDashboard className="text-gray-700 text-2xl" />
                            <span>Deshboard</span>
                        </Link>
                        <Link className="bg-gray-200 font-semibold text-gray-500 rounded-md px-3 py-2 flex items-center gap-2" href="/app">
                            <IoClipboard className="text-gray-700 text-2xl" />
                            <span>Tasks</span>
                        </Link>
                        <Link className="text-gray-500 rounded-md px-3 py-2 flex items-center gap-2" href="/app">
                            <HiDocument className="text-gray-700 text-2xl" />
                            <span>Documents</span>
                        </Link>
                        <Link className="text-gray-500 rounded-md px-3 py-2 flex items-center gap-2" href="/app">
                            <MdOutlineAccessTimeFilled className="text-gray-700 text-2xl" />
                            <span>Time Tracking</span>
                        </Link>

                        <Link className=" text-gray-500 rounded-md px-3 py-2 flex items-center gap-2" href="/app">
                            <FaMap className="text-gray-700 text-2xl" />
                            <span>Map</span>
                        </Link>
                        <Link className="text-gray-500 rounded-md px-3 py-2 flex items-center gap-2" href="/app">
                            <AiFillSchedule className="text-gray-700 text-2xl" />
                            <span>Schedule</span>
                        </Link>
                        <Link className=" text-gray-500 rounded-md px-3 py-2 flex items-center gap-2" href="/app">
                            <IoBagCheckSharp className="text-gray-700 text-2xl" />
                            <span>Projects</span>
                        </Link>
                    </div>


                    <div className="w-full">
                        <LogoutBtn />
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default Asideber;