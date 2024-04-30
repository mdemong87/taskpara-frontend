import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";
import DeleteBtn from "./DeleteBtn";
import EditBtn from "./EditBtn";


function SigleItemTopControler({ link, data }) {

    return (
        <div className="flex items-center justify-between pr-4">
            <div className="flex gap-2 items-center">
                <Link className="bg-gray-50 rounded-md w-[40px] h-[40px] flex items-center justify-center transition duration-500 hover:bg-gray-200" href={link}>
                    <FaArrowLeft className="text-gray-700" />
                </Link>
                <p className="text-gray-400 hidden sm:block">{`All Task / ${data?.title}`}</p>
            </div>
            <div className="flex gap-4 items-center">
                <EditBtn data={data} />
                <DeleteBtn id={data?.id} />
            </div>
        </div>
    )
}

export default SigleItemTopControler;