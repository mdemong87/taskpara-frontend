import { FaPlus } from "react-icons/fa6";
import Bar from "./Bar";

function ContentSide({ data }) {


    const todo = data.filter((item) => {
        return item.stage === 'To-Do';
    });

    const Progress = data.filter((item) => {
        return item.stage === 'In-Progress';
    });


    const Complete = data.filter((item) => {
        return item.stage === 'Complete';
    });



    return (
        <div className="grid grid-cols-12 gap-5 justify-between items-center mt-6 h-[90%] w-full pl-1 pr-5">




            <div className="col-span-12 md:col-span-6 lg:col-span-3 rounded-md h-full"><div className="flex justify-between items-center px-1 pb-2 border-b-2 border-gray-300">
                <div className="flex gap-3 items-center">
                    <h3 className="text-md font-semibold">Brief</h3>
                    <span>4</span>
                </div>
                <FaPlus className="text-gray-400" />
            </div>
                {
                    todo?.map((item, index) => {
                        return (
                            <Bar barData={item} key={index} />
                        )
                    })
                }
            </div>





            <div className="col-span-12 md:col-span-6 lg:col-span-3 rounded-md h-full">
                <div className="flex justify-between items-center px-1 pb-2 border-b-2 border-gray-300">
                    <div className="flex gap-3 items-center">
                        <h3 className="text-md font-semibold">To-Do</h3>
                        <span>2</span>
                    </div>
                    <FaPlus className="text-gray-400" />
                </div>
                {
                    todo?.map((item, index) => {
                        return (
                            <Bar barData={item} key={index} />
                        )
                    })
                }
            </div>


            <div className="col-span-12 md:col-span-6 lg:col-span-3 rounded-md h-full">

                <div className="flex justify-between items-center px-1 pb-2 border-b-2 border-gray-300">
                    <div className="flex gap-3 items-center">
                        <h3 className="text-md font-semibold">In Progress</h3>
                        <span>3</span>
                    </div>
                    <FaPlus className="text-gray-400" />
                </div>
                {
                    Progress?.map((item, index) => {
                        return (
                            <Bar barData={item} key={index} />
                        )
                    })
                }

            </div>


            <div className="col-span-12 md:col-span-6 lg:col-span-3 rounded-md h-full">
                <div className="flex justify-between items-center px-1 pb-2 border-b-2 border-gray-300">
                    <div className="flex gap-3 items-center">
                        <h3 className="text-md font-semibold">Complete</h3>
                        <span>1</span>
                    </div>
                    <FaPlus className="text-gray-400" />
                </div>
                {
                    Complete?.map((item, index) => {
                        return (
                            <Bar barData={item} key={index} />
                        )
                    })
                }
            </div>

        </div>
    )
}

export default ContentSide;