'use client'

import { useStore } from "@/lib/store";
import Loading from "./Loading";
import AddButton from "./app/header/AddButton";

function AddBtn() {


    const loading = useStore((state) => state.loading);
    // const setLoading = useStore((state) => state.setLoading);
    // const modalShow = useStore((state) => state.modalShow);

    // const title = useStore((state) => state.title);
    // const stage = useStore((state) => state.stage);
    // const priority = useStore((state) => state.priority);
    // const dis = useStore((state) => state.dis);


    // const settitle = useStore((state) => state.settitle);
    // const setstage = useStore((state) => state.setstage);
    // const setpriority = useStore((state) => state.setpriority);
    // const setdis = useStore((state) => state.setdis);


    return (
        <div>
            {loading && <Loading />}
            <AddButton />
        </div>
    )
}

export default AddBtn;