'use client'

import { useStore } from "@/lib/store";
import { useRouter } from "next/navigation";
import { toast } from 'react-toastify';

function Btn({ name, id, refetch }) {


    //router from next js useRouter api
    const router = useRouter();

    //get data from the store
    const setLoading = useStore((state) => state.setLoading);
    const setmodalShow = useStore((state) => state.setmodalShow);
    const deletemodalShow = useStore((state) => state.deletemodalShow);
    const setdeletemodalShow = useStore((state) => state.setdeletemodalShow);
    const setupdatemodalShow = useStore((state) => state.setupdatemodalShow);
    const title = useStore((state) => state.title);
    const stage = useStore((state) => state.stage);
    const priority = useStore((state) => state.priority);
    const dis = useStore((state) => state.dis);
    const settitle = useStore((state) => state.settitle);
    const setstage = useStore((state) => state.setstage);
    const setpriority = useStore((state) => state.setpriority);
    const setdis = useStore((state) => state.setdis);



    // handleing adding task
    async function handleTaskCreate() {

        if (title === "" || priority === "" || stage === "" || dis === "") {
            toast.warn("Enter All filed");
        } else {
            setLoading(true);

            const response = await fetch(`${process.env.NEXT_PUBLIC_MOCKAPI_URL}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ title, priority, stage, dis })
            });
            const res = await response.json();
            setLoading(false);
            settitle('');
            setpriority('Low');
            setstage('Brief');
            setdis('');
            setmodalShow(false);
            refetch();
            toast.success("Task Create Successfull");
        }
    }




    //handleing updating task
    async function handleTaskUpdate(id) {

        try {

            const updateData = {
                title: title,
                priority: priority,
                stage: stage,
                dis: dis
            }

            setLoading(true);
            const response = await fetch(`${process.env.NEXT_PUBLIC_MOCKAPI_URL}/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(updateData)
            });
            const res = await response.json();
            setLoading(false);
            setupdatemodalShow(false);
            toast.success("Edit Task Successull");
            setTimeout(() => {
                router.push('/app');
            }, 1000);
        } catch (error) {
            console.log(error);
            console.error("Error updating task:", error.message);
        }
    }





    //handleing deleteing task
    const handleDelete = async (id) => {

        try {

            setLoading(true);
            const response = await fetch(`${process.env.NEXT_PUBLIC_MOCKAPI_URL}/${id}`, {
                method: "DELETE"
            });
            const res = await response.json();
            setLoading(false);
            setdeletemodalShow(false);
            toast.success("Task Delete Successfull");
            setTimeout(() => {
                router.push("/app");
            }, 1000);
        } catch (error) {
            console.log(error);
            console.error("Error updating task:", error.message);
        }

    }


    return (

        <button onClick={() => { name === "Add Task" ? handleTaskCreate() : name === "Yes" ? handleDelete(id) : name === "Update Task" ? handleTaskUpdate(id) : null }} className="bg-gray-800 cursor-pointer rounded-md text-gray-100 px-3 py-2 transition hover:scale-105">{name}</button>

    )
}

export default Btn;