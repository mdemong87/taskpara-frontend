import { FaPlus } from "react-icons/fa6";

function BarHead({ name, count }) {
    return (
        <div className="flex justify-between items-center px-1 pb-2 border-b-2 border-gray-300 hidden lg:flex">
            <div className="flex gap-3 items-center">
                <h3 className="text-md font-semibold">{name}</h3>
                <span>{count}</span>
            </div>
            <FaPlus className="text-gray-400" />
        </div>
    )
}

export default BarHead;