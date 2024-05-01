import SigleItemTopControler from "@/componnent/SingleItemTopControler";
import getTask from "@/utlite/getTask";
import Image from "next/image";
import { FaFlag } from "react-icons/fa";
import { useQuery } from "react-query";
import convertToLocalDate from "../utlite/convertToLocalDate";
import Loading from "./Loading";

function SinglePageWper({ id }) {


    const { data, isLoading, isError, error } = useQuery("singleTask", () => getTask(`${process.env.NEXT_PUBLIC_MOCKAPI_URL}/${id}`));



    if (isError) {
        return (
            <h1>{error.message}</h1>
        )
    }

    return (
        <div className="pl-4 pr-1 md:pl-5 md:pr-5 py-3">
            {isLoading && <Loading />}
            <SigleItemTopControler link={'/app'} data={data} />

            <div className="my-4 mr-3 bg-gray-50 px-3 py-4 rounded-md">
                <div className="flex justify-between items-start">
                    <div>
                        <div className="flex flex-col lg:flex-row gap-2 lg:items-end">
                            <h1 className="text-3xl font-bold text-gray-600">{data?.title}</h1>
                            <span className="text-gray-400 font-semibold">{data?.stage}</span>
                        </div>

                        <div className="flex items-center gap-2 py-2">
                            <div className="bg-gray-200 rounded-md px-2 py-1 text-sm text-gray-400">
                                {
                                    convertToLocalDate(data?.createdAt)
                                }
                            </div>
                            <div className={`
                    rounded-md px-2 py-1 text-sm text-red-400 flex items-center gap-1 
                    ${data?.priority === "High" ? "bg-red-100"
                                    : data?.priority === "Medium" ? "bg-sky-200 " :
                                        "bg-green-200"} `}>

                                <FaFlag className={`${data?.priority === "High" ? "text-red-400" : data?.priority === "Medium" ? "text-sky-400 " : "text-green-400"}`} />

                                <span className={`${data?.priority === "High" ? "text-red-400" : data?.priority === "Medium" ? "text-sky-400 " : "text-green-400"}`}>

                                    {data?.priority}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center relative pr-10'>
                        <Image width={500} height={500} className="border w-[40px] h-[40px] rounded-full z-20" src={data?.avatarOne} alt="Peaple" />
                        <Image width={500} height={500} className="border w-[40px] h-[40px] rounded-full z-20 absolute left-5" src={data?.avatarTwo} alt="Peaple" />
                        <Image width={500} height={500} className="border w-[40px] h-[40px] rounded-full z-20 absolute left-10" src={data?.avatarThree} alt="Peaple" />
                    </div>
                </div>


                {/* discriptiion here */}
                <div className="mt-8">
                    <p>{data?.dis}</p>
                </div>

            </div>
        </div>
    )

}

export default SinglePageWper;