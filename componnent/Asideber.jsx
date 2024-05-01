import { AiFillSchedule } from "react-icons/ai";
import { FaMap } from "react-icons/fa";
import { HiDocument } from "react-icons/hi";
import { IoBagCheckSharp, IoClipboard } from "react-icons/io5";
import { MdDashboard, MdOutlineAccessTimeFilled } from "react-icons/md";
import { SiTask } from "react-icons/si";
import LogoutBtn from "./LogoutBtn";
import AsideberLink from "./app/asidebar/AsidebarLink";

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

                        <AsideberLink linkname={'Deshboard'} icon={<MdDashboard className="text-gray-700 text-2xl" />} />

                        <AsideberLink linkname={'Tasks'} icon={<IoClipboard className="text-gray-700 text-2xl" />} />

                        <AsideberLink linkname={'Documents'} icon={<HiDocument className="text-gray-700 text-2xl" />} />

                        <AsideberLink linkname={'Time Tracking'} icon={<MdOutlineAccessTimeFilled className="text-gray-700 text-2xl" />} />

                        <AsideberLink linkname={'Map'} icon={<FaMap className="text-gray-700 text-2xl" />} />

                        <AsideberLink linkname={'Schedule'} icon={<AiFillSchedule className="text-gray-700 text-2xl" />} />

                        <AsideberLink linkname={'Projects'} icon={<IoBagCheckSharp className="text-gray-700 text-2xl" />} />

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