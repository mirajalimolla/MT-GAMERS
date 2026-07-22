function Heading({text}) {
    return (
        <div className="w-fit m-auto flex items-center justify-center">
            <h1 className="flex items-center sm:text-[40px] text-[30px] font-extrabold text-[crimson] after:block sm:after:w-6 after:w-4 after:mt-1 sm:after:h-1.75 after:h-1.25 after:bg-[crimson] after:rounded-br-md after:rounded-tr-md before:block sm:before:w-6 before:w-4 before:mt-1 sm:before:h-1.75 before:h-1.25 before:bg-[crimson] before:rounded-bl-md before:rounded-tl-md">{text}</h1>
        </div>
    );
}

export default Heading;