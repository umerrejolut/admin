import React from "react";

interface CustomInputProps {
    mandatory?: boolean;
    title?: string;
    placeholder?: string;
    multiline?: boolean;
    rightPart?: React.ReactNode;
    leftPart?: React.ReactNode;
    disabled?: boolean;
    type?: string;
    name?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
    value?: string | number;
  }

const CustomInput = ({
  mandatory,
  title,
  placeholder,
  multiline,
  rightPart,
  leftPart,
  disabled = false,
  type,
  name,
  onChange,
  onBlur,
  value,
  ...rest
}: CustomInputProps) => {
  return (
    <div className=" rounded-md w-full">
      {title && (
        <div className="flex items-center gap-2">
          <label className="text-sm font-normal mb-1 text-labelColor">
            {title}
          </label>
          {mandatory && <p className="text-red-600">*</p>}
        </div>
      )}
      <div className="flex items-center border rounded-md">
        {leftPart && (
          <div className="flex items-center justify-center absolute left-9">
            {" "}
            {leftPart}
          </div>
        )}
        {!multiline ? (
          <input
            type={type}
            placeholder={placeholder}
            disabled={disabled}
            className="flex-1 h-11 min-w-full px-3 text-base text-black border-modalBorder placeholder:text-gray-400 placeholder:focus:border-gray-500 focus:border-checkBoxBorder hover:border-checkBoxBorder outline-none border-1 relative rounded-md focus:ring-offset-0"
            {...rest}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            name={name}
          />
        ) : (
          <textarea
            cols={30}
            rows={10}
            placeholder={placeholder}
            disabled={disabled}
            className="flex-1 h-28 min-w-full px-3 text-base text-black border-labelColor placeholder:text-gray-400 placeholder:focus:border-gray-500 focus:border-checkBoxBorder hover:border-checkBoxBorder outline-none border-1 relative rounded-md"
            {...rest}
            // onChange={onChange}
            // onBlur={onBlur}
            value={value}
            name={name}
          ></textarea>
        )}
        {rightPart && (
          <div className="flex items-center justify-center absolute right-9">
            {" "}
            {rightPart}
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomInput;
