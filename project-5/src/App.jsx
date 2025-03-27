import { FiSearch } from "react-icons/fi";
import { FaCirclePlus } from "react-icons/fa6";
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar'; // Make sure "Navbar" is capitalized correctly
import { collection, doc, getDoc, getDocs, onSnapshot} from "firebase/firestore"
import { db } from './config/firebase';
import { HiOutlineUserCircle } from "react-icons/hi";
// import { CiUser } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";
import { IoMdTrash } from "react-icons/io";
import { RiEditCircleLine } from "react-icons/ri";
import ContactCard from "./components/ContactCard";
import Modal from "./components/Modal";
import AddAmdUpdateContact from "./components/AddAmdUpdateContact";
import Usedisclouse from "./hooks/Usedisclouse";
import { ToastContainer, toast } from 'react-toastify';








function App() {
  const [contacts,setContacts] = useState([])
  
  // const [isOpen,setOpen] = useState(false)
  // const [close,setCLose] = useState(false)
  const {isOpen,setOpen,onclose} = Usedisclouse()

 

  useEffect(()=>{
    const getContacts = async ()=>{
 try {
  
  const contactRef = collection(db,"contacts")
  onSnapshot(contactRef,(snapshot)=>{
    const contactLists = snapshot.docs.map((doc) => {
      return{
        id:doc.id ,
        ...doc.data() 
      }
    })
    setContacts(contactLists)
    return contactLists
  })
 
 } catch (error) {
  
 }
    }
    getContacts()
  },[ ])

  const filterData = (e)=>{
const value = e.target.value;

  
  const contactRef = collection(db,"contacts")
  onSnapshot(contactRef,(snapshot)=>{
    const contactLists = snapshot.docs.map((doc) => {
      return{
        id:doc.id ,
        ...doc.data() 
      }
    })


    const  filerdContacts = contactLists.filter(contact =>contact.name.toLowerCase().includes(value.toLowerCase()))
    setContacts(filerdContacts)
    return filerdContacts
  })
 
 


  }
  return (
    <>
     <div className='max-w-[370px] mx-auto px-4'> 

     <Navbar/>
      <div className="flex gap-2 ">
      <div className='flex relative items-center flex-grow '>
     <FiSearch className="text-white text-3xl absolute ml-1 " />

      <input onChange={filterData} type="text" className=' flex-grow h-10 border border-white rounded-md bg-transparent text-white pl-9 ' />
     </div>
   
     <FaCirclePlus onClick={setOpen} className="text-5xl text-white cursor-pointer" />

  
      </div>
      <div className="mt-4 gap-3 flex flex-col">{
        contacts.map((contact) =>{
           return(
            <ContactCard key={contact.id} contact={contact}/>
           )
        })
        }</div>
     </div>
    <AddAmdUpdateContact isOpen={isOpen}
    onclose={onclose}
    />
    <ToastContainer
    position="bottom-center"
    />
    </> 

  );
}

export default App;


    