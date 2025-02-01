import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import InputField from "../../layouts/components/InputField";
import Contact from "../../layouts/components/ContactInput";
import { Eye, EyeOff } from "lucide-react";

const SignupPage = () => {
    const [username, setUsername] = useState("");
    const navigate = useNavigate();

    const handleSignup = () => {
        if (username.trim()) {
            localStorage.setItem("user", username);
            navigate("/login");
        }
    };
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [user, setUser] = [localStorage.getItem("user")];

    const handleLogin = () => {
        // login(email, password);

        if (user) {
            navigate("/");
        }
    };

    const defaultClass = "h-[41px]  border-1 border-textColor text-xs font-normal";
    const [togglepassword, setTogglePassword] = useState("password");

    return (
        <>
            {" "}
            {/* second page */}
            <div className="flex min-h-screen items-center justify-center bg-gray-100">
                <div className="w-full max-w-md rounded-[10px] bg-white p-8 shadow-md md:min-w-[530px] lg:min-w-[530px]">
                    {/* <button className="absolute right-4 top-4 text-lg text-gray-500">&times;</button> */}
                    <h2 className="text-[18px] font-semibold tracking-normal text-[#252D3C]">Please enter your details </h2>
                    {/* <p className="my-2 text-center text-sm text-gray-500">Or</p> */}
                    <div className="my-4 flex items-center justify-center">
                        <div className="h-[1px] w-full bg-[#C0C4CA]"></div>
                        <span className="px-3 text-sm font-medium text-[#777F8C]">Or</span>
                        <div className="h-[1px] w-full bg-[#C0C4CA]"></div>
                    </div>
                    <form className="space-y-4">
                        <div>
                            <label className="mb-1 block text-[15px] text-[#252D3C]">Name</label>
                            {/* <input
                                type="text"
                                className="w-full rounded-md border px-3 py-2 focus:outline-none focus:ring focus:ring-gray-300"
                                placeholder="Enter your name"
                            /> */}
                            <InputField
                                className={"h-[48px] w-full rounded-md border-[0.6px] border-gray-300 bg-[#F9F9FA] px-3 py-5 focus:outline-none"}
                                placeholder={"Name"}
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div>
                            <label className="mb-1 block text-[15px] text-[#252D3C]">Email</label>
                            {/* <input
                                type="text"
                                className="w-full rounded-md border px-3 py-2 focus:outline-none focus:ring focus:ring-gray-300"
                                placeholder="Enter your name"
                            /> */}
                            <InputField
                                className={"h-[48px] w-full rounded-md border-[0.6px] border-gray-300 bg-[#F9F9FA] px-3 py-5 focus:outline-none"}
                                placeholder={"Email"}
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <label className="mb-1 block text-sm text-[#252D3C]">Phone Number</label>
                            <Contact />
                        </div>
                        <div>
                            <div className="flex w-full justify-between">
                                <label className="mb-1 block text-sm text-[#252D3C]">Password</label>
                                {/* <label className="mb-1 block text-[14px] text-[#9A1725]">Forgot Password</label> */}
                            </div>

                            <div>
                                <div className="flex h-[48px] w-full flex-col rounded-md border-[0.6px] border-gray-300 bg-[#F9F9FA] px-3 focus:outline-none">
                                    <label
                                        htmlFor="phone"
                                        className="text-textColor text-xs font-normal"
                                    >
                                        {/* {title} */}
                                    </label>

                                    <div className="item-center relative mt-1 flex">
                                        <input
                                            // defaultValue={defaultValue}
                                            // disabled={disabled}
                                            type={togglepassword}
                                            name={name}
                                            // id={id}
                                            className={`${defaultClass} flex-1 bg-[#F9F9FA] focus:outline-none`}
                                            placeholder="password "
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            // onChange={onChange}
                                            // onBlur={onBlur}
                                            // value={value}
                                            // maxLength={maxLength}
                                        />
                                        <div className="mr-1 flex h-full w-fit cursor-pointer items-center bg-transparent py-2 text-xs text-gray-500 outline-none">
                                            {togglepassword === "password" ? (
                                                <Eye
                                                    onClick={() => setTogglePassword("text")}
                                                    className="text-[#777F8C]"
                                                />
                                            ) : (
                                                <EyeOff
                                                    onClick={() => setTogglePassword("password")}
                                                    className="text-[#777F8C]"
                                                />
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <label className="mb-1 block text-sm text-gray-600">Password</label> */}
                        </div>
                        <button
                            className="item-center flex w-full justify-center rounded-md bg-[#9A1725] py-[18px] text-center text-white transition"
                            onClick={handleSignup}
                        >
                            Sign Up
                        </button>
                        <div className="text-gray-60 font-poppins items-center justify-start text-[14px] font-semibold text-[#344054]">
                            Already have an account?{" "}
                            <Link
                                className="font-poppins text-[14px] font-semibold text-[#9A1725]"
                                to={"/login"}
                            >
                                Login
                            </Link>
                        </div>
                    </form>
                    <div className="text-gray-60 font-poppins mt-4 items-center justify-start text-start text-[14px] font-medium leading-normal text-[#777F8C]">
                        Please visit{" "}
                        <a
                            href="#"
                            className="underline"
                        >
                            Afrikobo Privacy Statement
                        </a>{" "}
                        to learn more about personal data processing at Afrikobo. The Afrikobo{" "}
                        <a
                            href="#"
                            className="underline"
                        >
                            Privacy Policy
                        </a>{" "}
                        and
                        <a
                            href="#"
                            className="underline"
                        >
                            {" "}
                            Terms of Service
                        </a>{" "}
                        apply.
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignupPage;
