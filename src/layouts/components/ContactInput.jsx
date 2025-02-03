import { useState } from "react";

const countryCodes = [
    { code: "+1", country: "" },
    { code: "+44", country: "" },
    { code: "+61", country: "" },
    { code: "+91", country: "" },
    { code: "+234", country: "" },
];

const Contact = ({ onChange, onBlur, value, name, id, className, disabled, defaultValue, title, onCountryCodeChange, maxLength }) => {
    const defaultClass = "w-full  border-gray-300  outline-none block pl-2 pr-10 py-2 text-xs  border-gray-300 bg-[#F9F9FA]";

    const [countryCode, setCountryCode] = useState("+234");

    const handleCountryChange = (e) => {
        const selectedCountryCode = e.target.value;
        setCountryCode(selectedCountryCode);
        onCountryCodeChange(selectedCountryCode);
    };
    return (
        <div>
            <div className="flex h-[48px] w-full flex-col rounded-md border-[0.6px] border-gray-300 bg-[#F9F9FA] px-3 focus:outline-none">
                <label
                    htmlFor="phone"
                    className="text-textColor mb-[10px] text-xs font-normal"
                >
                    {title}
                </label>
                <div className="relative mt-1 flex">
                    <div className="itemscenter mr-1 flex">
                        <label
                            htmlFor="phone-country"
                            className="sr-only"
                        >
                            Country
                        </label>
                        <select
                            disabled={disabled}
                            id="phone-country"
                            name="phone-country"
                            className="h-full w-fit cursor-pointer bg-transparent py-2 text-xs text-gray-500 outline-none"
                            onChange={handleCountryChange}
                            value={countryCode}
                        >
                            {countryCodes?.map(({ code, country }) => (
                                <option
                                    key={code}
                                    value={code}
                                    className="cursor-pointer text-[#7a7a7a]"
                                >
                                    {country} {code}
                                </option>
                            ))}
                        </select>
                    </div>
                    <input
                        defaultValue={defaultValue}
                        disabled={disabled}
                        type="tel"
                        name={name}
                        id={id}
                        className={`${defaultClass} ${className}`}
                        placeholder=""
                        onChange={onChange}
                        onBlur={onBlur}
                        value={value}
                        maxLength={maxLength}
                    />
                </div>
            </div>
        </div>
    );
};

export default Contact;
