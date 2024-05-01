
function InputTextareaSeleteWrper({ name, children }) {
    return (
        <div className={`flex flex-col md:flex-row justify-between w-full gap-2 md:gap-4 my-5 ${name === "Task Discription" ? "items-start" : "items-center"}`}>
            <div className="w-full md:w-[30%] flex justify-between items-center">
                <span className="text-xl font-semibold text-gray-500">{name}</span>
                <span>:</span>
            </div>
            <div className="w-full md:w-[70%]">
                {children}
            </div>
        </div>
    )
}

export default InputTextareaSeleteWrper;