import { useEffect, useRef, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export function TextInput({ type, placeholder, customStyle, customIconStyle, length, data, errorMsg, isError=false, isPasswordField = false }) {
    const [isPassword, setIsPassword] = useState(true);

    return (
        <div className="relative">
            <div className={`${isError ? "mb-2" : "m-2"}`}>
                <input type={isPasswordField ? (isPassword ? "password" : "text") : type} placeholder={`Enter your ${placeholder}`} onChange={data} name={type} id={type} className={`${customStyle} outline-0 border-2 border-gray-500 font-semibold text-[16px] p-2 rounded-lg w-full`} style={{ borderColor: `${isError ? "red" : ""}` }} />
                <label htmlFor={type} className={`${isError ? `text-red-600 ml-3.5 font-semibold` : ""}`}>{isError ? errorMsg : ""}</label>
            </div>
            {
                isPasswordField ? <div onClick={() => setIsPassword(!isPassword)} className={`${customIconStyle} absolute text-gray-600 -translate-1/2 cursor-pointer ${isError ? "top-[31%] right-1.5" : "top-1/2 right-4"}`}>
                    {isPassword ? <FaEye size={20} /> : <FaEyeSlash size={20} />}
                </div> : ""
            }
        </div>
    );
}

export function SubmitBtn({ customStyle, submit }) {
    return (
        <input type={"submit"} value={"Submit"} onClick={submit} className={`${customStyle} bg-green-700 text-white text-lg sm:text-xl w-[40%] m-auto mb-2 p-2 rounded-lg cursor-pointer`} />
    )
}

export function Or({ customStyle }) {
    return (
        <div className="relative flex items-center justify-center gap-6.5 w-1/2 m-auto h-5">
            <div className="h-0.5 w-1/2 bg-gray-500 rounded-2xl"></div>
            <span className={`${customStyle} absolute font-semibold text-orange-400 text-xl sm:text-2xl left-1/2 top-[30%] sm:pl-0.5 -translate-1/2 bg-transparent`}>or</span>
            <div className="h-0.5 w-1/2 bg-gray-500 rounded-2xl"></div>
        </div>
    )
}