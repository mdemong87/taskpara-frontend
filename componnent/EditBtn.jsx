'use client'

import { useStore } from "@/lib/store";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { FaRegEdit } from "react-icons/fa";
import Modaler from "../componnent/Modaler";
import Input from "./Input";
import Loading from "./Loading";
import Select from "./Select";
import Textarea from "./Textarea";
import Btn from "./modal/Btn";
import InputTextareaSeleteWrper from "./modal/InputTextareaSeleteWrer";



function EditBtn({ data }) {



    const router = useRouter();
    const loading = useStore((state) => state.loading);
    const setLoading = useStore((state) => state.setLoading);
    const updatemodalShow = useStore((state) => state.updatemodalShow);
    const setupdatemodalShow = useStore((state) => state.setupdatemodalShow);

    const title = useStore((state) => state.title);
    const stage = useStore((state) => state.stage);
    const priority = useStore((state) => state.priority);
    const dis = useStore((state) => state.dis);


    const settitle = useStore((state) => state.settitle);
    const setstage = useStore((state) => state.setstage);
    const setpriority = useStore((state) => state.setpriority);
    const setdis = useStore((state) => state.setdis);


    useEffect(() => {
        setTimeout(() => {
            settitle(data?.title);
            setpriority(data?.priority);
            setstage(data?.stage);
            setdis(data?.dis);
        }, 1000);
    }, [data])







    return (
        <div>
            {loading && <Loading />}
            <button onClick={() => setupdatemodalShow(true)} className="bg-green-300 text-gray-50 cursor-pointer px-1 py-1 md:px-3 md:py-1 gap-1 flex items-center border rounded-md transition hover:scale-105">
                <FaRegEdit className="text-xs sm:text-sm md:text-md text-gray-100" />
                <span className="text-xs sm:text-sm md:text-md">Edit</span>
            </button>


            {
                updatemodalShow && <Modaler>
                    <div className="w-[300px] sm:w-[360px] md:w-[700px] lg:w-[1000px] h-fit">


                        <div className="w-full p-2">
                            <InputTextareaSeleteWrper name={"Task Title"}>
                                <Input value={title} setvalue={settitle} />
                            </InputTextareaSeleteWrper >


                            <InputTextareaSeleteWrper name={"Task Priority"}>
                                <Select value={priority} setvalue={setpriority} data={[{ name: "Low", value: "Low" }, { name: "Medium", value: "Medium" }, { name: "High", value: "High" }]} />
                            </InputTextareaSeleteWrper >


                            <InputTextareaSeleteWrper name={"Task Stage"}>
                                <Select value={stage} setvalue={setstage} data={[{ name: "Brief", value: "Brief" }, { name: "To-Do", value: "To-Do" }, { name: "In Progress", value: "In-Progress" }, { name: "Complete", value: "Complete" }]} />
                            </InputTextareaSeleteWrper >


                            <InputTextareaSeleteWrper name={"Task Discription"}>
                                <Textarea value={dis} setdis={setdis} />
                            </InputTextareaSeleteWrper >


                            <div className="w-full flex justify-end">
                                <Btn name={"Update Task"} id={data?.id} />
                            </div>

                        </div>

                    </div>
                </Modaler>

            }


        </div>
    )
}

export default EditBtn;