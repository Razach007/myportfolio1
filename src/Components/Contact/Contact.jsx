import React from 'react';
import "./Contact.css";
import {useState} from 'react';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

 const Contact = () => {
    const form = useRef();

    const [done, setDone] = useState(false);
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_ygpzqwd', 'template_dl2vwly', form.current, 'lRJFCeJlFtmDzxRN6')
        .then((result) => {
            console.log(result.text);
            setDone(true);
        }, (error) => {
            console.log(error.text);
        });
    };





  return (
    <div className='contact-form'>
        <div className="w-left">
            <div className="awesome">
                <span>Get in Touch</span>
                <span>Contact me</span>
                <div
                className='blur s-blur1'
                style={{background : "#ABF1FF94"}}>

                </div>

            </div>
        </div>

        <div className='c-right'>
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name='user-name' className='user' placeholder='Name'/>
                <input type="email" name='user-email' className='user' placeholder='Email'/>
                <input name='message' className='user' placeholder='Message'/>
                <input type="submit" value="send" className='button'/>

                <span>{done && "Thanks for Contacting"}</span>

                <div
                className='blur c-blur1'
                style={{background :"var(--purple)"}}>

                </div>

            </form>
        </div>

    </div>
  )
}
 

export default Contact;