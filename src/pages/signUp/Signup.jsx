import { Link } from "react-router-dom";
import { Or, SubmitBtn, TextInput } from "../components/Form";
import { useState } from "react";

function Signup() {
    // Input states
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [password, setPassword] = useState("");
    const [cPassword, setCpassword] = useState("");

    // Error states
    const [nameErrMsg, setNameErrMsg] = useState("");
    const [emailErrMsg, setEmailErrMsg] = useState("");
    const [numberErrMsg, setNumberErrMsg] = useState("");
    const [passwordErrMsg, setPasswordErrMsg] = useState("");
    const [cPasswordErrMsg, setCpasswordErrMsg] = useState("");
    const [isNameErr, setIsNameErr] = useState(false);
    const [isEmailErr, setIsEmailErr] = useState(false);
    const [isNumberErr, setIsNumberErr] = useState(false);
    const [isPassowrdErr, setIsPassowrdErr] = useState(false);
    const [isCpassowrdErr, setIsCpassowrdErr] = useState(false);
    const [alartBox, setAlartBox] = useState(false);
    let isSuccess = false;


    // Name validation
    const nameValidation = () => {
        if (name === "") {
            setIsNameErr(true);
            setNameErrMsg("Name is empty");
        } else {
            if (name.length < 3) {
                setIsNameErr(true);
                setNameErrMsg("Name required min 3 char");
            } else {
                if (name.length > 10) {
                    setIsNameErr(true);
                    setNameErrMsg("Name max char is 10");
                } else {
                    setIsNameErr(false);
                }
            }
        }
    }

    // Email validation
    const emailValidation = () => {
        if (email !== "") {
            if ((email.includes("@") && email.includes(".")) === false) {
                setIsEmailErr(true);
                setEmailErrMsg("This email can't filled the requirments")
            } else {
                if (email.indexOf("@") < 4) {
                    if (email.indexOf(".") < (email.indexOf("@") + 7)) {
                        setIsEmailErr(true);
                        setEmailErrMsg("Invalid++ email")
                    }
                } else {
                    setIsEmailErr(false);
                }
            }
        } else {
            setIsEmailErr(true);
            setEmailErrMsg("Email should'n be empty");
        }
    }

    // Number validation
    const numberValidation = () => {
        if (number === "") {
            setIsNumberErr(true);
            setNumberErrMsg("Number is empty");
        } else {
            if (number.length !== 10) {
                setIsNumberErr(true);
                setNumberErrMsg("Number must be 10");
            } else {
                setIsNumberErr(false);
            }
        }
    }

    // Password validation
    const passwordValidation = () => {
        if (password === "") {
            setIsPassowrdErr(true);
            setPasswordErrMsg("Password is empty");
        } else {
            if (password.length < 6) {
                setIsPassowrdErr(true);
                setPasswordErrMsg("Password should >6");
            } else {
                setIsPassowrdErr(false);
            }
        }
    }

    // Confirm password validation
    const cPasswordValidation = () => {
        if (cPassword === "") {
            setIsCpassowrdErr(true);
            setCpasswordErrMsg("Confirm password is empty");
        } else {
            if (password !== cPassword) {
                setIsCpassowrdErr(true);
                setCpasswordErrMsg("Password is not mached");
            } else {
                setIsCpassowrdErr(false);
            }
        }
    }

    // Submit handler function
    const handler = (e) => {
        e.preventDefault();
        nameValidation();
        emailValidation();
        numberValidation();
        passwordValidation();
        cPasswordValidation();
        setAlartBox(true);
        if((isNameErr && isEmailErr && isNumberErr && isPassowrdErr && isCpassowrdErr) === false) {
            isSuccess = true;
        } else {
            isSuccess = false;
        }
    }

    return (
        <section style={{ background: "linear-gradient(90deg, rgb(0 0 0 / 0%), rgb(0 0 0 / 70%), rgb(0 0 0 / 70%)), url('./src/assets/contact.jpg') no-repeat", backgroundSize: "cover" }} className="h-screen">
            <h1 className="text-center text-3xl sm:text-4xl lg:text-5xl text-white font-bold pt-2 sm:block hidden">REGESTRATION IN MT GAMERS</h1>
            <form className="relative grid text-white w-[85%] m-auto md:w-[60%] lg:w-[50%] xl:w-[45%] md:float-end md:right-10 lg:right-22 top-6">
                <TextInput type={"text"} data={(e) => setName(e.target.value)} placeholder={"Full name"} isError={isNameErr} errorMsg={nameErrMsg} customStyle={"border-transparent py-2.5 bg-[url('./src/assets/aboutBg.jpg')] bg-center bg-fixed"} />
                <TextInput type={"email"} data={(e) => setEmail(e.target.value)} placeholder={"Email"} isError={isEmailErr} errorMsg={emailErrMsg} customStyle={"border-transparent py-2.5 bg-[url('./src/assets/aboutBg.jpg')] bg-center bg-fixed"} />
                <TextInput type={"number"} data={(e) => setNumber(e.target.value)} placeholder={"Number"} isError={isNumberErr} errorMsg={numberErrMsg} customStyle={"border-transparent py-2.5 bg-[url('./src/assets/aboutBg.jpg')] bg-center bg-fixed"} />
                <TextInput type={"password"} data={(e) => setPassword(e.target.value)} placeholder={"Password"} isError={isPassowrdErr} errorMsg={passwordErrMsg} customStyle={"border-transparent py-2.5 bg-[url('./src/assets/aboutBg.jpg')] bg-center bg-fixed"} isPasswordField={true} customIconStyle={"text-white"} />
                <TextInput type={"password"} data={(e) => setCpassword(e.target.value)} placeholder={"Confirm password"} isError={isCpassowrdErr} errorMsg={cPasswordErrMsg} customStyle={"border-transparent py-2.5 bg-[url('./src/assets/aboutBg.jpg')] bg-center bg-fixed"} isPasswordField={true} customIconStyle={"text-white"} />
                <SubmitBtn submit={handler} customStyle={"border-transparent py-2.5 bg-[url('./src/assets/aboutBg.jpg')] mt-3 text-[15px] font-bold bg-center bg-fixed"} />

                <div className={`${alartBox ? "block" : "hidden"} grid place-items-center w-[70%] m-auto py-2 ${isSuccess ? "bg-[#00ff0036]" : "bg-[#ff00003b]"}`}>
                    <h3 className="text-lg font-semibold">{isSuccess ? "Account created succesfully" : "Something is wrong"}</h3>
                </div>

                <Or />
                <div className="flex gap-0.5 underline font-semibold text-lg m-auto text-gray-400">
                    <Link className="hover:underline font-bold" to={'/login'}>I have a Account/Login</Link>
                </div>
            </form>
        </section>
    );
}

export default Signup;