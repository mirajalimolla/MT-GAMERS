import { Link } from "react-router-dom";
import { TextInput, SubmitBtn, Or } from "../components/Form";

function ForgotPassword() {
    return (
        <section style={{ background: "linear-gradient(rgb(0 0 0 / 30%)), url('../src/assets/2.jpg') no-repeat", backgroundSize: "cover", backgroundPosition: "center" }} className="h-screen grid place-items-center">
            <form className="bg-white px-3 py-4 rounded-2xl grid gap-3 w-[90%] sm:w-[70%] md:w-[60%] lg:w-[50%] xl:w-[40%]">
                <h1 className="text-center font-extrabold sm:font-bold text-xl sm:text-3xl">RESET YOUR PASSWORD</h1>
                <TextInput type={"email"} errorMsg={"Invalid email"} customErrorStyle={"mb-[-10px]"} placeholder={"Email"} />
                <SubmitBtn />
                <Or />
                <div className="flex gap-0.5 underline font-semibold text-lg m-auto text-gray-800">
                    <Link className="hover:underline" to={'/login'}>Back to Login</Link>
                </div>
            </form>
        </section>
    );
}

export default ForgotPassword;