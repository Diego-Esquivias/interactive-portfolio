"use client"

import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactUs() {
const form = useRef();

const sendEmail = (e) => {
    e.preventDefault();

    emailjs
    .sendForm('service_tftra6o', 'template_dlv433r', form.current, {
        publicKey: 'YsymmhDppur3l7-9f',
    })
    .then(
        () => {
        console.log('SUCCESS!');
        },
        (error) => {
        console.log('FAILED...', error.text);
        },
    );
};

return (
    <form ref={form} onSubmit={sendEmail} className='bg-gray-500 py-10 rounded-2xl text-black w-1/2 mx-auto grid grid-cols-1 grid-rows-5 place-items-center'>
        <div>
            <label>Title</label>
            <input type="text" name="title" className='bg-white rounded-xl'/>
        </div>
        <br />

        <div>
            <label>Name</label>
            <input type="text" name="name" className='bg-white rounded-xl'/>
        </div>
        <br />

        <div>
            <label>Email</label>
            <input type="email" name="email" className='bg-white rounded-xl'/>
        </div>
        <br />

        <div>
            <label>Message</label>
            <textarea name="message" className='bg-white rounded-xl'/>
        </div>
        <br />

        <div>
            <button type="submit">Send</button>
        </div>
    {/* <input type="submit" value="Send" /> */}
    </form>
);
};