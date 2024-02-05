import { ImCross } from "react-icons/im";

const Modal = ({setOpenModal}) => {
 
  return (
    <>
    <div className='flex flex-col gap-2 bg-red-600 rounded-sm shadow-black shadow-md w-1/3 py-3 px-4 relative'>
    <input type="text" placeholder='Your name...'/>
        <input type="number" placeholder='Your name...'/>
        <input type="text" placeholder='Your name...'/>
        <div className='absolute -top-8 -right-4 border-[2px] rounded-full p-1 text-sm border-red-600 text-red-600 cursor-pointer' onClick={()=>setOpenModal(false)}><ImCross /></div>
    </div>
    </>
  )
}

export default Modal