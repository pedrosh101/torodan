import React from 'react'
import Navbar from "@/src/Navbar";
import ContactForm from '@/src/ContactForm';

export default function Contact() {
  return (
    <>
    <Navbar />
    <div className="lg:flex min-h-screen bg-clr2 pt-32 px-4 lg:px-28 pb-12">

    <ContactForm />
    </div>
    </>
  )
}

