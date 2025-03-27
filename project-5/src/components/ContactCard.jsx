    import { deleteDoc, doc } from 'firebase/firestore'
    import React, { useState } from 'react'
    import { HiOutlineUserCircle } from 'react-icons/hi'
    import { IoMdTrash } from 'react-icons/io'
    import { RiEditCircleLine } from 'react-icons/ri'
    import { db } from '../config/firebase'
    import AddAndUpdateContact from './AddAmdUpdateContact'
    import Usedisclouse from '../hooks/Usedisclouse'
    import { toast } from 'react-toastify'

    const ContactCard = ({ contact }) => {
        const {isOpen,setOpen,onclose} = Usedisclouse()
          // const [close,setCLose] = useState(false)
        
          
        
        const deleteContact = async(id)=>{
       try {
        await deleteDoc(doc(db,"contacts",id))
        toast.success("contact deleted")
       } catch (error) {
        console.log(error);
        
       }
        }
        return(
            <>
            <div key={contact.id} className="bg-yellow-200 flex justify-between items-center p-2 rounded-lg">
        <div className="flex gap-2">
        <HiOutlineUserCircle className="text-orange-400 text-4xl"/>

            <div className="">
        <h1 className="font-medium">{contact.name}</h1>
        <p className="text-sm">{contact.email}</p>
        </div>
        </div>
            
        <div className="flex text-3xl ">
        
        <RiEditCircleLine onClick={setOpen} className='cursor-pointer' />
        <IoMdTrash onClick={()=>deleteContact(contact.id)} className="text-orange-400" />
        </div>
            </div>
            <AddAndUpdateContact contact={contact} isUpdate isOpen={isOpen} onclose={onclose}/>
            </>
            )
    }

    export default ContactCard