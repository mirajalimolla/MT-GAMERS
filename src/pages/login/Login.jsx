import { Link } from "react-router-dom";
import ForgotPassword from "./forgotPassword";
import {PasswordInput, TextInput, SubmitBtn, Or} from "../components/Form.jsx"

function Login() {
    return (
        <section style={{ background: "linear-gradient(rgb(0 0 0 / 41%), rgb(0 0 0 / 41%)), url('./src/assets/login.jpg') no-repeat", backgroundPosition:"center" ,backgroundSize: "cover" }} className="grid place-items-center h-screen bg">
            <form className="p-3 rounded-2xl bg-white grid gap-3 w-[40%]">
                <h1 className="text-center text-3xl font-bold">LOGIN FORM</h1>

                <TextInput type={"email"} errorMsg={"Invalid email"} customErrorStyle={"mb-[-10px]"} placeholder={"Email"} />
                <PasswordInput errorMsg={"Password do not mached"} customErrorStyle={"mb-[-10px]"} />
                <SubmitBtn />
                <Or />

                <div className="flex gap-0.5 font-semibold text-lg m-auto text-gray-800">
                    <Link to={'./forgotPassword'} className="underline" >Forgot Password</Link>
                    <p className="text-orange-400 text-xl">/</p>
                    <Link to={'/signup'} className="underline" >Create your account</Link>
                </div>
            </form>
        </section>
    );
}

export default Login;