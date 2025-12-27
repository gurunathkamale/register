import React from 'react'

type buttonProps={
    label?: string,
    onClick?: ()=> void,
    type?: "submit"  | "reset" | "button",
    disabled?: boolean

}

const Button: React.FC<buttonProps> = ({
    label,
    onClick,
    type="button",
    disabled
}) => {
  return (
    <button
    type={type}
    onClick={onClick}
    disabled={disabled}
    className=' w-full h-11 mt-2
        rounded-full
        bg-green-600 text-white font-semibold
        hover:bg-green-700
        transition
        disabled:opacity-50 disabled:cursor-not-allowed'

    >
{label}
    </button>
  )
}

export default Button;