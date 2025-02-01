import React from "react";

const InputField = ({
    type,
    placeholder,
    disabled,
    onChange,
    name,
    id,
    onBlur,
    className,
    value,
    defaultValue,
    htmlFor,
    onFocus,
    label,
    autoComplete,
    labelFontSize,
    multiple,
    maxLength,
}) => {
    const defaultClass = "h-[41px]  border-1 border-textColor text-xs font-normal";
    return (
        <div className="flex flex-col">
            {label && (
                <label
                    className={`font-normal ${labelFontSize ? "text-sm" : "text-xs"} text-textColor mb-[10px]`}
                    htmlFor={htmlFor}
                >
                    {label}
                </label>
            )}
            <input
                className={`${className} ${defaultClass}`}
                type={type}
                placeholder={placeholder}
                disabled={disabled}
                onChange={onChange}
                name={name}
                id={id}
                onBlur={onBlur}
                value={value}
                onWheel={(e) => e.target.blur()}
                onFocus={onFocus}
                multiple={multiple}
                defaultValue={defaultValue}
                autoComplete={autoComplete}
                maxLength={maxLength}
            />
        </div>
    );
};

export default InputField;
