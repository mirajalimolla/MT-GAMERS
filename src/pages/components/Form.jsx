import { useEffect, useRef, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export function TextInput({ type, placeholder, customStyle, customErrorStyle, length }) {
    const [isError, setIsError] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    
    return (
        <div className="relative">
            <input type={type} placeholder={`Enter your ${placeholder}`} name={type} id={type} className={`${customStyle} outline-0 border-2 ${isError ? "border-red-600" : "border-gray-500"} font-semibold text-[16px] p-2 rounded-lg w-full`} />
            <p className={`${isError ? `${customErrorStyle} text-red-600 -mb-3 ml-3.5 font-semibold` : ""}`}>{errorMsg}</p>
        </div>
    );
}

export function PasswordInput({ customStyle, customIconStyle, customErrorStyle }) {
    const [isPassword, setIsPassword] = useState(true);
    const [isError, setIsError] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    const password = () => {
        setIsPassword(!isPassword);
    }

    return (
        <div className="relative">
            <input type={isPassword ? "password" : "text"} name="password" id="password" placeholder="Enter your Password" className={`${customStyle} outline-0 border-2 ${isError ? "border-red-600" : "border-gray-500"} font-semibold text-[16px] p-2 rounded-lg w-full`} autoComplete="off" />
            <div onClick={password} className={`${customIconStyle} absolute text-gray-600 top-1/2 right-1.5 -translate-1/2 cursor-pointer`}>
                {isPassword ? <FaEye size={20} /> : <FaEyeSlash size={20} />}
            </div>
            <p className={`${isError ? `${customErrorStyle} text-red-600 -mb-3 ml-3.5 font-semibold` : ""}`}>{errorMsg}</p>
        </div>
    )
}


export function SubmitBtn({ customStyle }) {
    return (
        <input type={"submit"} value={"Submit"} className={`${customStyle} bg-green-700 text-white text-lg sm:text-xl w-[40%] m-auto p-2 rounded-lg cursor-pointer`} />
    )
}

export function Or({ customStyle }) {
    return (
        <div className="relative flex items-center justify-center gap-6.5 w-1/2 m-auto -mb-3 h-5">
            <div className="h-0.5 w-1/2 bg-gray-500 rounded-2xl"></div>
            <span className={`${customStyle} absolute font-semibold text-orange-400 text-xl sm:text-2xl left-1/2 top-[30%] sm:pl-0.5 -translate-1/2 bg-transparent`}>or</span>
            <div className="h-0.5 w-1/2 bg-gray-500 rounded-2xl"></div>
        </div>
    )
}