import React from "react";

type InputFieldProps = {
  type: "email" | "password" | "text"| "number";
  placeholder: string;
  icons?: React.ReactNode;
  value: string,
  label: string,
  onChange: (value: string)=> void
};

const InputField: React.FC<InputFieldProps> = ({
  type,
  placeholder,
  icons,
  value,
  label,
  onChange
}) => {

    const bgColor =
  "focus-within:border-blue-800 focus-within:shadow-md";

  return (
    <div className="mb-4">
<label className="block mb-1 text-sm font-medium text-gray-700 ">{label}</label>
    
    <div className={` flex h-10 items-center mb-4 
  border-2 border-gray-300
  ${bgColor}
  transition-colors `}>
      <span className="w-12 flex items-center justify-center text-gray-500 ">
        {icons}
      </span>
      <span className="w-px h-4 bg-gray-300" />
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e)=>onChange(e.target.value)}
        className="flex-1 h-full px-3 text-sm outline-none bg-transparent"
      />
    </div>
    </div>
  );
};

export default InputField;
