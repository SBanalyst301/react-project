import { AiOutlineClose } from "react-icons/ai";
import React from 'react'
import {createPortal} from 'react-dom'
const Modal = ({onclose,isopen,children}) => {
  return createPortal(
   <>
   {isopen && 
   <>
   <div className=' z-50 relative min-h-52 max-w-[80%] bg-white p-4 m-auto'>
    <div className='flex justify-end'>
  
    <AiOutlineClose className='text-2xl' onClick={onclose} />
    </div>

    {children}
   </div>
   <div onClick={onclose} className=' m-auto backdrop-blur h-screen w-screen absolute top-0 z-40'/>
   </>
   }
   
   </>
  ,document.getElementById("modal-root"))
}

export default Modal