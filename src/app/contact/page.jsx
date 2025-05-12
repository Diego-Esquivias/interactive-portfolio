"use client"

import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactUs() {
const form = useRef();

const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    formData.append("sent_time", new Date().toLocaleString());

    emailjs
    .sendForm('service_tftra6o', 'template_dlv433r', form.current, {
        publicKey: 'YsymmhDppur3l7-9f',
    })
    .then(
        () => {
        console.log('SUCCESS!');
        window.location.reload();
        alert("Email Successfully Sent!")
        },
        (error) => {
        console.log('FAILED...', error.text);
        },
    );
};

return (
    <form ref={form} onSubmit={sendEmail} className='bg-none border-2 border-[#6D696A] py-10 rounded-2xl text-white w-1/3 mx-auto mt-15 grid grid-cols-1 grid-rows-5 place-items-center gap-y-2'>
        <h1 className='font-extrabold text-4xl'>Contact Form</h1>
        <div>
            <label className='text-xl'>Title: </label>
            <input type="text" name="title" className='bg-white rounded-xl text-black pl-2'/>
        </div>

        <div>
            <label>Name: </label>
            <input type="text" name="name" className='bg-white rounded-xl text-black pl-2'/>
        </div>

        <div>
            <label>Message: </label>
            <textarea name="message" className='bg-white rounded-xl text-black pl-2'/>
        </div>

        <input type="hidden" name="time" value={new Date().toLocaleString()} />

        <div>
            <button type="submit" className='bg-[#D8B4A6] text-black text-lg py-1 px-6 rounded-full'>Send</button>
        </div>
    </form>
);
};