import { Link } from "react-router-dom";
import ForgotPassword from "./forgotPassword";
import { TextInput, SubmitBtn, Or } from "../components/Form.jsx"
import { useEffect, useState } from "react";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailErrorMsg, setEmailErrorMsg] = useState("");
    const [passwordErrorMsg, setPasswordErrorMsg] = useState("");
    const [isEmailErr, setIsEmailErr] = useState(false);
    const [isPasswordErr, setIsPasswordErr] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if(email === ""){
            setIsEmailErr(true);
            setEmailErrorMsg("Email is empty");
        }else {
            setIsEmailErr(false);
        }

        if(password === ""){
            setIsPasswordErr(true);
            setPasswordErrorMsg("Password is empty");
        }else {
            setIsPasswordErr(false);
        }
    }

    return (
        <section style={{ background: "url('./src/assets/login.jpg') no-repeat", backgroundPosition: "center", backgroundSize: "cover" }} className="grid place-items-center h-screen bg">
            <form className="sm:p-3 p-2 rounded-2xl bg-white grid w-[95%] sm:w-[70%] md:w-[60%] lg:w-[50%] xl:w-[40%]">
                <h1 className="text-center text-3xl font-bold">LOGIN FORM</h1>

                <TextInput type={"email"} errorMsg={emailErrorMsg} isError={isEmailErr} data={(e) => setEmail(e.target.value)} customErrorStyle={"mb-[-10px]"} placeholder={"Email"} />
                <TextInput type={"password"} errorMsg={passwordErrorMsg} isError={isPasswordErr} data={(e) => setPassword(e.target.value)} customErrorStyle={"mb-[-10px]"} placeholder={"Password"} isPasswordField={true} />
                <SubmitBtn submit={handleSubmit} />
                <Or />

                <div className="flex items-center gap-0.5 font-semibold text-[16px] md:text-lg m-auto text-gray-800">
                    <Link to={'./forgotPassword'} className="underline" >Forgot Password</Link>
                    <p className="text-orange-400 text-lg sm:text-xl">/</p>
                    <Link to={'/signup'} className="underline" >Create your account</Link>
                </div>
            </form>
        </section>
    );
}

export default Login;