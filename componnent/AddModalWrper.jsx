import { useStore } from "@/lib/store";
import Input from "./Input";
import Loading from "./Loading";
import Modaler from "./Modaler";
import Select from "./Select";
import Textarea from "./Textarea";
import Btn from "./modal/Btn";
import InputTextareaSeleteWrper from "./modal/InputTextareaSeleteWrer";


function AddModalWper({ refetch }) {

    const modalShow = useStore((state) => state.modalShow);
    const loading = useStore((state) => state.loading);

    const title = useStore((state) => state.title);
    const stage = useStore((state) => state.stage);
    const priority = useStore((state) => state.priority);
    const dis = useStore((state) => state.dis);


    const settitle = useStore((state) => state.settitle);
    const setstage = useStore((state) => state.setstage);
    const setpriority = useStore((state) => state.setpriority);
    const setdis = useStore((state) => state.setdis);




    return (
        <>
            {loading && <Loading />}
            {
                modalShow && <Modaler>
                    <div className="w-[300px] sm:w-[360px] md:w-[700px] lg:w-[1000px] h-fit">
                        <div className="w-full p-2">

                            <InputTextareaSeleteWrper name={"Task Title"}>
                                <Input setvalue={settitle} />
                            </InputTextareaSeleteWrper >

                            <InputTextareaSeleteWrper name={"Task Priority"}>
                                <Select setvalue={setpriority} data={[{ name: "Low", value: "Low" }, { name: "Medium", value: "Medium" }, { name: "High", value: "High" }]} />
                            </InputTextareaSeleteWrper >


                            <InputTextareaSeleteWrper name={"Task Stage"}>
                                <Select setvalue={setstage} data={[{ name: "Brief", value: "Brief" }, { name: "To-Do", value: "To-Do" }, { name: "In-Progress", value: "In Progress" }, { name: "Complete", value: "Complete" }]} />
                            </InputTextareaSeleteWrper >


                            <InputTextareaSeleteWrper name={"Task Discription"}>
                                <Textarea setdis={setdis} />
                            </InputTextareaSeleteWrper >


                            <div className="w-full flex justify-end">
                                <Btn name="Add Task" refetch={refetch} />
                            </div>

                        </div>
                    </div>
                </Modaler>

            }
        </>
    )
}

export default AddModalWper;