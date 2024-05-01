import CrossBtn from "./modal/CrossBtn";

function Modaler({ children, setisshow }) {

    return (
        <div className="fixed top-0 left-0 trBg w-screen h-screen flex justify-center items-center">
            <div className="w-fit h-fit bg-white rounded-lg shadow-xl relative">

                <CrossBtn />

                {/* children data here */}
                <div className="p-6 w-fit h-fit">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Modaler;