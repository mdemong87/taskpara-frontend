'use client'

import { useStore } from "@/lib/store";
import getTask from "@/utlite/getTask";
import { useState } from "react";
import { useQuery } from "react-query";
import Bar from "./Bar";
import BarHead from "./BarHead";
import Loading from "./Loading";
import SmallScreenContentController from "./smallScreenContentController";

function ContentSide() {

    //get data from the via the react query
    const { data, isLoading, error, isError } = useQuery("AllTask", () => getTask(process.env.NEXT_PUBLIC_MOCKAPI_URL));

    //local state 
    const [controler, setcontroler] = useState("To-Do");
    const [drag, setdrag] = useState(false);


    // global state from the Store
    const search = useStore((state) => state.search);


    //filter data by the condition of user search    
    let filter = [];
    for (let i = 0; i < data?.length; i++) {
        // check if the search text match the system or not
        if (data[i]?.title?.indexOf(search) > -1) {
            filter.push(data[i]);
        }
    }



    //catagorise
    const controllerItem = filter?.filter((item) => {
        return item.stage === controler;
    })

    const brif = filter?.filter((item) => {
        return item.stage === 'Brief';
    });

    const todo = filter?.filter((item) => {
        return item.stage === 'To-Do';
    });

    const Progress = filter?.filter((item) => {
        return item.stage === 'In-Progress';
    });


    const Complete = filter?.filter((item) => {
        return item.stage === 'Complete';
    });




    //if there is an error
    if (isError) {
        return (
            <h1>{error.message}</h1>
        )
    }



    return (
        <div>
            {isLoading && <Loading />}

            <SmallScreenContentController setcontroler={setcontroler} />

            <div className="grid grid-cols-12 gap-5 justify-between items-center mt-1 lg:mt-6 h-[90%] w-full pl-1 md:pr-5">



                <div className="col-span-12 md:col-span-6 lg:col-span-3 rounded-md h-full hidden lg:block">
                    < BarHead name={"Brief"} count={brif?.length} />

                    {
                        brif?.map((item, index) => {
                            return (
                                <Bar barData={item} key={index} catagory={'Brief'} drag={drag} setdrag={setdrag} />
                            )
                        })
                    }
                </div>





                <div className="col-span-12 md:col-span-6 lg:col-span-3 rounded-md h-full hidden lg:block">


                    < BarHead name={"To-Do"} count={todo?.length} />

                    {
                        todo?.map((item, index) => {
                            return (
                                <Bar barData={item} key={index} catagory={'To-Do'} drag={drag} setdrag={setdrag} />
                            )
                        })
                    }
                </div>


                <div className="col-span-12 md:col-span-6 lg:col-span-3 rounded-md h-full hidden lg:block">

                    < BarHead name={"In Progress"} count={Progress?.length} />

                    {
                        Progress?.map((item, index) => {
                            return (
                                <Bar barData={item} key={index} catagory={'In-Progress'} drag={drag} setdrag={setdrag} />
                            )
                        })
                    }

                </div>


                <div className="col-span-12 md:col-span-6 lg:col-span-3 rounded-md h-full hidden lg:block">

                    < BarHead name={"Complete"} count={Complete?.length} />
                    {
                        Complete?.map((item, index) => {
                            return (
                                <Bar barData={item} key={index} catagory={'Complete'} drag={drag} setdrag={setdrag} />
                            )
                        })
                    }
                </div>


                <div className="grid gap-5 grid-cols-12 col-span-12 w-full lg:hidden rounded-md h-full">
                    {
                        controllerItem?.map((item, index) => {
                            return (
                                <div className="col-span-12 md:col-span-6" key={index}>
                                    <Bar barData={item} drag={drag} setdrag={setdrag} />
                                </div>
                            )
                        })
                    }
                </div>



            </div >
        </div>
    )
}

export default ContentSide;