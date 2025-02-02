import * as Yup from "yup";

// Custom validation method for companyNumber
const numberLength = (countryCode, min, max) => {
    return Yup.string()
        .matches(/^(7|8|9|6)(?!\1{9,14})\d{8,9}$/, "Mobile number should contain digits only.")
        .test("len", function (val) {
            const digitLength = val ? val.replace(/^\+/, "").length : 0;
            if (countryCode === "+234" && digitLength !== 10) {
                return this.createError({
                    message: "Please enter a valid Nigerian mobile number.",
                });
            }
            if (digitLength < min || digitLength > max) {
                return this.createError({
                    message: `Please enter a valid mobile number between ${min} and ${max} digits.`,
                });
            }
            return true;
        });
};

const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*()])(?=.*[A-Z]).{6,}$/;

const signUpValidationSchema = (countryCode) =>
    Yup.object({
        username: Yup.string().required("This field is required"),
        email: Yup.string().email("Invalid email").required("Email is required"),
        phoneNumber: numberLength(countryCode, 10, 15).required("Mobile number is required."),
        password: Yup.string()
            .min(6, "Password must be at least 6-8 characters")
            .matches(
                passwordRegex,
                "Password must contain at least one number, one special character, one uppercase letter, and be 6-8 characters long.",
            )
            .required("Password is required"),
    });

export { signUpValidationSchema, passwordRegex };
