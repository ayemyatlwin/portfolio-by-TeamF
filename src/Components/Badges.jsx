import React from 'react'

const Badges = ({children}) => {
  return (
<div className="flex flex-row gap-3 my-5">
    <div className=" border-b-2 my-auto w-12"></div>
<span class="bg-[#fcf1e7] text-red-500 font-normal tracking-wide mr-2 px-4 py-1 capitalize rounded-none ">{children}</span>

   
</div>
  )
}

export default Badges
