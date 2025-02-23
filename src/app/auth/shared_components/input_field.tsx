import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export type InputFieldProps = {
    id: string;
    name: string;
    label: string;
    type: string;
    placeholder: string;
};

export const InputField: React.FC<InputFieldProps> = ({
    id,
    name,
    label,
    type,
    placeholder,
}) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="flex flex-col space-y-1 relative">
            <label htmlFor={id} className="text-white">{label}</label>
            <div className="relative">
                <input
                    type={type === "password" && !showPassword ? "password" : "text"}
                    name={name}
                    placeholder={placeholder}
                    id={id}
                    className="text-black w-full px-2 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0f0f0f]"
                />
                {type === "password" && (
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700"
                    >
                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                )}
            </div>
        </div>
    );
};
