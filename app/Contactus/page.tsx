"use client"
import React from 'react';
import styles from './contactus.module.css';
import { useForm } from "react-hook-form";
import { Input } from '../components/UI/input';

function ContactUs() {
  const { register, handleSubmit } = useForm();
  const handleRegistration = (data: any) => console.log(data);

  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.head}`}>
        <p className={`${styles.title}`}>Contact Us</p>
        <div className={`${styles.lineMf}`} />
      </div>

    </div>
  )
}

export default ContactUs