import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import InputField from "../../layouts/components/InputField";
import Contact from "../../layouts/components/ContactInput";
import { Eye, EyeOff } from "lucide-react";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";

import { signup } from "../../appstate/slices/authSlice";
import toast from "react-hot-toast";
import { signUpValidationSchema } from "../../validation/SignUpValidation";
const SignupPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [selectedCountryCode, setSelectedCountryCode] = useState("+234");

    const defaultClass = "h-[41px]  border-1 border-textColor text-xs font-normal";
    const [togglepassword, setTogglePassword] = useState("password");

    const handlePhoneCountryChange = (selectedCountryCode) => {
        setSelectedCountryCode(selectedCountryCode); // Update selected country code in state
    };

    const formik = useFormik({
        initialValues: {
            username: "",
            email: "",
            phoneNumber: "",
            password: "",
        },
        validationSchema: signUpValidationSchema(selectedCountryCode),
        onSubmit: (values) => {
            const phoneNumberWithCountryCode = `${selectedCountryCode}${values.phoneNumber}`;

            const handleSignup = () => {
                // e.preventDefault();

                if (formik.isValid) {
                    dispatch(
                        signup({
                            username: values.username,
                            email: values.email,
                            phoneNumber: phoneNumberWithCountryCode,
                            password: values.password,
                        }),
                    );
                    // alert("Signup successful! Please log in.");
                    toast.success("Signup successful! Please log in.");
                    // console.log("successfull");
                    navigate("/login");
                } else {
                    toast.error("Please fill all fields.");
                }
            };
            handleSignup();
        },
    });

    // To control disabled button

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
                    <form
                        className="space-y-4"
                        onSubmit={formik.handleSubmit}
                    >
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
                                // value={username}
                                // onChange={(e) => setUsername(e.target.value)}
                                id="username"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.username}
                            />

                            {formik.touched.username && formik.errors.username ? (
                                <p className="mt-[8px] w-[300px] text-xs text-red-600 md:w-[424px]">{formik.errors.username}</p>
                            ) : null}
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
                                // value={email}
                                // onChange={(e) => setEmail(e.target.value)}
                                id="email"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                            />

                            {formik.touched.email && formik.errors.email ? (
                                <p className="mt-[8px] w-[300px] text-xs text-red-600 md:w-[424px]">{formik.errors.email}</p>
                            ) : null}
                        </div>
                        <div>
                            <label className="mb-1 block text-sm text-[#252D3C]">Phone Number</label>
                            <Contact
                                name="phoneNumber"
                                // title={"Contact Number"}
                                id="phoneNumber"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.phoneNumber}
                                onCountryCodeChange={handlePhoneCountryChange}
                            />

                            {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                                <p className="mt-[8px] w-[300px] text-xs text-red-600 md:w-[424px]">{formik.errors.phoneNumber}</p>
                            ) : null}
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
                                            id="password"
                                            type={togglepassword}
                                            // id={id}
                                            className={`${defaultClass} flex-1 bg-[#F9F9FA] focus:outline-none`}
                                            placeholder="password "
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.password}
                                            // autoComplete="new-password"
                                            // value={password}
                                            // onChange={(e) => setPassword(e.target.value)}
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

                                    {formik.touched.password && formik.errors.password ? (
                                        <div className="mb-5 mt-[8px] flex w-[300px] text-xs text-red-600 md:w-[424px]">{formik.errors.password}</div>
                                    ) : null}
                                </div>
                            </div>
                            {/* <label className="mb-1 block text-sm text-gray-600">Password</label> */}
                        </div>

                        <div>
                            <button
                                className={`item-center mt-5 flex w-full justify-center rounded-md bg-[#9A1725] py-[18px] text-center text-white transition ${formik.isValid ? "cursor-pointer" : "cursor-not-allowed"}`}
                                // onClick={handleSignup}
                                disabled={!formik.isValid}
                                type="submit"
                            >
                                Sign Up
                            </button>
                        </div>

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
