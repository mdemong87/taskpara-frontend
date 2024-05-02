import { FaCalendarAlt, FaListUl, FaRegUserCircle, FaSearch } from "react-icons/fa";
import { FiFilter } from "react-icons/fi";
import { IoIosNotifications } from "react-icons/io";
import { IoClipboard } from "react-icons/io5";
import { MdOutlineDashboardCustomize, MdOutlineExpandMore } from "react-icons/md";
import AddBtn from "./AddBtn";
import MenuBtn from "./app/header/MenuBtn";
import Search from "./app/header/Search";

function AppHeader() {

    return (
        <header className="h-[135px] sticky top-0 pl-4 pr-4 md:pr-8 flex flex-col justify-center border bg-gray-100 z-30 select-none">
            <div className="flex justify-between items-center">
                <div className="flex gap-4 items-center">
                    <MenuBtn />
                    <h3 className="text-xl font-bold">All Tasks</h3>
                </div>
                <div className="flex gap-3 items-center">
                    <IoIosNotifications className="text-2xl text-gray-600" />
                    <FaRegUserCircle className="text-3xl text-gray-600" />
                </div>
            </div>
            <div className="pt-6 flex justify-between items-center">
                <div className="w-fit hidden lg:block ">
                    <div className="border rounded-md flex justify-between items-center">
                        <div className="bg-gray-50 rounded-md px-3 py-1 gap-1 flex items-center">
                            <IoClipboard className="text-lg  text-gray-500" />
                            <span>Board</span>
                        </div>
                        <div className="px-3 py-1 gap-1 items-center hidden xl:flex">
                            <FaListUl className="text-lg text-gray-500" />
                            <span>List</span>
                        </div>
                        <div className="px-3 py-1  gap-1 items-center hidden xl:flex">
                            <FaCalendarAlt className="text-lg text-gray-500" />
                            <span>Calender</span>
                        </div>
                        <div className="flex px-3 gap-1 py-1 items-center">
                            <span>More View</span>
                            <MdOutlineExpandMore className="text-lg text-gray-500" />
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-fit">
                    <div className="flex justify-between items-center gap-3 w-full">

                        <div className="flex justify-between items-center gap-3">
                            <div className="bg-gray-50 px-3 py-1 gap-1 flex items-center border rounded-md border-gray-300">
                                <FaSearch className="text-lg  text-gray-500" />
                                <Search />
                            </div>
                            <div className="bg-gray-50 px-3 py-1 gap-1 items-center border rounded-md hidden md:flex">
                                < FiFilter className="text-lg text-gray-500" />
                                <span>Filter</span>
                            </div>
                            <div className="bg-gray-50 px-3 py-1 gap-1 items-center border rounded-md hidden md:flex">
                                <MdOutlineDashboardCustomize className="text-lg text-gray-500" />
                                <span>Customize</span>
                            </div>

                        </div>

                        <AddBtn />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default AppHeader;