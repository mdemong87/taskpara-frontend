

import { RxCross2 } from "react-icons/rx";

function Modaler({ children, setisshow }) {
    return (
        <div className="fixed top-0 left-0 trBg w-screen h-screen flex justify-center items-center">
            <div className="w-fit h-fit bg-white rounded-lg shadow-xl relative">
                <div onClick={() => setisshow(false)} className="absolute -top-3 cursor-pointer -right-3 p-2 pBg rounded-full R360">
                    <RxCross2 className="text-white text-xl" />
                </div>

                {/* children data here */}
                <div className="p-6 w-fit h-fit">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Modaler;