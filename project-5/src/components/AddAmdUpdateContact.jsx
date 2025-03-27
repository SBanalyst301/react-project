

import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Modal from "./Modal";
import { addDoc, collection, doc } from "firebase/firestore";
import { db } from "../config/firebase";
import { updateDoc,  } from 'firebase/firestore'
import * as Yup from"yup";
const contactValidationShema = Yup.object().shape({
    name:Yup.string().required("name is required"),
    email:Yup.string().email("invalid email").required("email is required")
})


const AddAndUpdateContact = ({ onclose,isOpen,children,isUpdate,contact }) => {

   const addContact=async(contact)=>{
   try {
    const ContactRef = collection(db,"contacts")
    await addDoc(ContactRef,contact)
    onclose()
   } catch (error) {
    console.log("this is your error",error);
    
   }

   }
   const updateContact=async(contact,id)=>{
   try {
    onclose()
    const ContactRef = doc(db,"contacts",id)
    await updateDoc(ContactRef,contact)
   } catch (error) {
    console.log("this is your error",error);
    
   }

   }


  return (
    <Modal isopen={isOpen}
     onclose={onclose}>
      <Formik
      validationSchema={contactValidationShema}
        initialValues={isUpdate?{
            name: contact.name,
            email: contact.email,
        }:{
          name: "",
          email: "",
        }}
        onSubmit={(values) => {
          console.log(values);
          isUpdate ? 
          updateContact(values,contact.id):
         
          addContact(values )
        }}
      >
        <Form className="flex flex-col gap-4 p-4">
          <div className="flex flex-col gap-1">
            <label htmlFor="name">Name</label>
            <Field name="name" className="border h-10 p-2" />
            <div className="text-red-900 text-lg">
                <ErrorMessage name="name" />
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="email">Email</label>
            <Field name="email" type="email" className="border h-10 p-2" />
            <div className="text-red-900 text-lg">
                <ErrorMessage name="email" />
            </div>
          </div>

          <button type="submit" className="bg-orange-400 px-3 py-1.5 border self-end">
            {isUpdate ? "update":"add"} Contact
          </button>
        </Form>
      </Formik>
    </Modal>
  );
};

export default AddAndUpdateContact;
