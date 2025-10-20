import React from 'react'

const themeSet = {
    primary: 'bg-white hover:bg-gray-50 text-[#38A1FF]  font-regular  ',
    warning: 'bg-[#F4B100] hover:bg-[#F4B100]-600 text-black',
    danger: 'bg-red-500 text-white',
}

const sizeSet = {
    sm: ' px-[10px] py-[10px] rounded text-[12px]',
    md: ' px-[30px] py-[15px] rounded-[10px] text-[16px]',
    lg: ' px-[35px] py-[18px] rounded-[12px] text-[20px]',
}

function Button({children, theme= 'primary', size='md'}) {
  return (
    <div className={`${themeSet[theme]} ${sizeSet[size]} cursor-pointer w-fit`}>
        {children}
    </div>
  )
}

export default Button