import Bar from "./Bar";
import BarHead from "./BarHead";
import SmallScreenContentController from "./smallScreenContentController";

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
        <div>

            <SmallScreenContentController />

            <div className="grid grid-cols-12 gap-5 justify-between items-center mt-1 lg:mt-6 h-[90%] w-full pl-1 md:pr-5">



                <div className="col-span-12 md:col-span-6 lg:col-span-3 rounded-md h-full">
                    < BarHead name={"Brief"} count={"4"} />

                    {
                        todo?.map((item, index) => {
                            return (
                                <Bar barData={item} key={index} />
                            )
                        })
                    }
                </div>





                <div className="col-span-12 md:col-span-6 lg:col-span-3 rounded-md h-full">


                    < BarHead name={"To-Do"} count={"2"} />

                    {
                        todo?.map((item, index) => {
                            return (
                                <Bar barData={item} key={index} />
                            )
                        })
                    }
                </div>


                <div className="col-span-12 md:col-span-6 lg:col-span-3 rounded-md h-full">

                    < BarHead name={"In Progress"} count={"3"} />

                    {
                        Progress?.map((item, index) => {
                            return (
                                <Bar barData={item} key={index} />
                            )
                        })
                    }

                </div>


                <div className="col-span-12 md:col-span-6 lg:col-span-3 rounded-md h-full">

                    < BarHead name={"Complete"} count={"1"} />
                    {
                        Complete?.map((item, index) => {
                            return (
                                <Bar barData={item} key={index} />
                            )
                        })
                    }
                </div>

            </div >
        </div>
    )
}

export default ContentSide;