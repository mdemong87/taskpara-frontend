import { FaPlus } from "react-icons/fa6";

function SmallScreenContentController() {
    return (
        <div className="flex justify-between items-center px-1 pb-2 mt-3 border-b-2 border-gray-300 lg:hidden">
            <div className="flex gap-3 items-center">
                <h3 className="text-md font-semibold">To-Do</h3>
                <span>4</span>
            </div>
            <FaPlus className="text-gray-400" />
        </div>
    )
}

export default SmallScreenContentController;