import { Link } from "react-router-dom";
import { Or, PasswordInput, SubmitBtn, TextInput } from "../components/Form";

function Signup() {
    return (
        <section style={{background:"linear-gradient(90deg, rgb(0 0 0 / 0%), rgb(0 0 0 / 70%), rgb(0 0 0 / 70%)), url('./src/assets/contact.jpg') no-repeat", backgroundSize:"cover"}} className="h-screen">
            <h1 className="text-center text-5xl text-white font-bold pt-2">REGESTRATION IN MT GAMERS</h1>
            <form className="relative grid gap-4 text-white w-[45%] float-end right-22 top-10">
                <TextInput type={"text"} placeholder={"Full name"} errorMsg={"This is Error"} customStyle={"border-[0] py-2.5 bg-[url('./src/assets/aboutBg.jpg')] bg-center bg-fixed"}/>
                <TextInput type={"email"} placeholder={"Email"} errorMsg={"This is Error"} customStyle={"border-[0] py-2.5 bg-[url('./src/assets/aboutBg.jpg')] bg-center bg-fixed"}/>
                <TextInput type={"number"} placeholder={"Number"} customStyle={"border-[0] py-2.5 bg-[url('./src/assets/aboutBg.jpg')] bg-center bg-fixed"}/>
                <PasswordInput customStyle={"border-[0] py-2.5 bg-[url('./src/assets/aboutBg.jpg')] bg-center bg-fixed"} customIconStyle={"text-white"}/>
                <PasswordInput customStyle={"border-[0] py-2.5 bg-[url('./src/assets/aboutBg.jpg')] bg-center bg-fixed"} customIconStyle={"text-white"}/>
                <SubmitBtn onClick={(e) => c(e)} customStyle={"border-[0] py-2.5 bg-[url('./src/assets/aboutBg.jpg')] mt-3 text-[15px] font-bold bg-center bg-fixed"}/>
                <Or />
                <div className="flex gap-0.5 underline font-semibold text-lg m-auto text-gray-400">
                    <Link className="hover:underline font-bold" to={'/login'}>I have a Account/Login</Link>
                </div>
            </form>
        </section>
    );
}

export default Signup;