import React, {useRef} from 'react'
// CSS
import "./Contact.css";
// components
import { motion } from 'framer-motion';
import transition from '../../transition';
import emailjs from "@emailjs/browser";
import { useNavigate } from 'react-router-dom';



const Contact = () => {
  const formRef = useRef();
  
  const PUBLIC_KEY = "VjBzJ-IYXPm4LhEt7";
  const TEMPLATE_ID = "template_jcmx7uz";
  const SERVICE_ID = "service_ynw55d6";

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
        publicKey: PUBLIC_KEY,
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );

      formRef.current.from_name.value = "";
      formRef.current.reply_to.value = "";
      formRef.current.message.value = "";
    }

  return (
    <div id="contact-page">   
      <div className="left-text">
        <h1>Let's Connect!</h1>
        <h3>I'll be glad to answer your questions</h3>
      </div>
      <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
        <h2>Contact Me</h2>
        <label><h6>Name</h6></label>
        <input type="text" name="from_name"  placeholder="Enter your name" />
        <label><h6>Email</h6></label>
        <input type="email" name="reply_to"  placeholder="Enter your email" />
        <label><h6>Your Message</h6></label>
        <textarea name="message" placeholder="Enter your message" />
        <motion.input initial={{ scale: 1 }} whileHover={{ scale: 1.1 }}  type="submit" className="btn-submit" value="Submit"/>
      </form>
    </div>
  )
}

export default transition(Contact);
