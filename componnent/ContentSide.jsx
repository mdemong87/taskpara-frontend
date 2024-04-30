'use client'

import getTask from "@/utlite/getTask";
import { useState } from "react";
import { useQuery } from "react-query";
import Bar from "./Bar";
import BarHead from "./BarHead";
import Loading from "./Loading";
import SmallScreenContentController from "./smallScreenContentController";

function ContentSide() {

    const { data, isLoading, error, isError } = useQuery("AllTask", () => getTask(process.env.NEXT_PUBLIC_MOCKAPI_URL));



    const [controler, setcontroler] = useState("To-Do");


    const controllerItem = data?.filter((item) => {
        return item.stage === controler;
    })

    const brif = data?.filter((item) => {
        return item.stage === 'Brief';
    });

    const todo = data?.filter((item) => {
        return item.stage === 'To-Do';
    });

    const Progress = data?.filter((item) => {
        return item.stage === 'In-Progress';
    });


    const Complete = data?.filter((item) => {
        return item.stage === 'Complete';
    });



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
                    < BarHead name={"Brief"} count={"4"} />

                    {
                        brif?.map((item, index) => {
                            return (
                                <Bar barData={item} key={index} />
                            )
                        })
                    }
                </div>





                <div className="col-span-12 md:col-span-6 lg:col-span-3 rounded-md h-full hidden lg:block">


                    < BarHead name={"To-Do"} count={"2"} />

                    {
                        todo?.map((item, index) => {
                            return (
                                <Bar barData={item} key={index} />
                            )
                        })
                    }
                </div>


                <div className="col-span-12 md:col-span-6 lg:col-span-3 rounded-md h-full hidden lg:block">

                    < BarHead name={"In Progress"} count={"3"} />

                    {
                        Progress?.map((item, index) => {
                            return (
                                <Bar barData={item} key={index} />
                            )
                        })
                    }

                </div>


                <div className="col-span-12 md:col-span-6 lg:col-span-3 rounded-md h-full hidden lg:block">

                    < BarHead name={"Complete"} count={"1"} />
                    {
                        Complete?.map((item, index) => {
                            return (
                                <Bar barData={item} key={index} />
                            )
                        })
                    }
                </div>


                <div className="grid gap-5 grid-cols-12 col-span-12 w-full lg:hidden rounded-md h-full">
                    {
                        controllerItem?.map((item, index) => {
                            return (
                                <div className="col-span-12 md:col-span-6" key={index}>
                                    <Bar barData={item} />
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