import { useState } from "react"

const Usedisclouse = () => {
    const [isOpen,setOpen] = useState(false)
      // const [close,setCLose] = useState(false)
    
      
      const onOpen =() =>{
        setOpen(true)
      }
      const onclose =() =>{
        setOpen(false)
      }
  return (
  {onclose,isOpen,setOpen}
  )
}

export default Usedisclouse