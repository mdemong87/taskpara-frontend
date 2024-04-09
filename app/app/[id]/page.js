'use client'

import SigleItemTopControler from "@/componnent/SingleItemTopControler";
import { useEffect, useState } from "react";
import { FaFlag } from "react-icons/fa";
import convertToLocalDate from "../../../utlite/convertToLocalDate";


function SingleItem(props) {

    const { id } = props.params;
    const [data, setdata] = useState();



    useEffect(() => {
        fetchData();
    });

    const fetchData = async () => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/app/task/${id}`);
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const jsonData = await response.json();
            setdata(jsonData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };



    return (
        <div className="px-5 py-3">
            <SigleItemTopControler link={'/app'} data={data?.data} />

            <div className="my-4 mr-3 bg-gray-50 px-3 py-4 rounded-md">
                <div className="flex gap-2 items-end">
                    <h1 className="text-3xl font-bold text-gray-600">{data?.data?.title}</h1>
                    <span className="text-gray-400 font-semibold">({data?.data?.stage})</span>
                </div>
                <div className="flex items-center gap-2 py-2">
                    <div className="bg-gray-200 rounded-md px-2 py-1 text-sm text-gray-400">
                        {
                            convertToLocalDate(data?.data?.createdAt)
                        }
                    </div>
                    <div className={`rounded-md px-2 py-1 text-sm text-red-400 flex items-center gap-1 ${data?.data?.priority === "High" ? "bg-red-100" : data?.data?.priority === "Medium" ? "bg-sky-200 " : "bg-green-200"} `}>
                        <FaFlag className={`${data?.data?.priority === "High" ? "text-red-400" : data?.data?.priority === "Medium" ? "text-sky-400 " : "text-green-400"}`} />
                        <span className={`${data?.data?.priority === "High" ? "text-red-400" : data?.data?.priority === "Medium" ? "text-sky-400 " : "text-green-400"}`}>{data?.data?.priority}</span>
                    </div>
                </div>



                {/* discriptiion here */}
                <div className="mt-8">
                    <p>{data?.data?.dis}</p>
                </div>

            </div>
        </div>
    )
}


export default SingleItem;