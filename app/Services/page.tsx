"use client"
import React, { useState } from 'react'
import styles from './Services.module.css'
import ReactIcon from '../assests/svg/reactIcon'
import CustomModal from '../components/CustomModal'
import UiUxIcon from '../assests/svg/UiUxIcon'
import ReactNativeIcon from '../assests/svg/reactNativeIcon'

const services = [
     {
          "icon": <ReactIcon />,
          "title": "Web Design",
          "description": "Tailored and responsive websites crafted to enhance your online presence and encourage meaningful interactions"
     },
     {
          "icon": <ReactNativeIcon />,
          "title": "Mobile App",
          "description": "Bring your concepts to life by creating immersive and user-friendly mobile experiences, elevating your digital presence and fostering increased user engagement."
     },
     {
          "icon": <UiUxIcon />,
          "title": "UI/UX",
          "description": "Captivating visuals and artistic proficiency to effectively communicate your brand's message, creating a lasting and impactful impression."
     },
     // {
     //      "icon": <ReactIcon />,
     //      "title": "SEO Marketing",
     //      "description": "Most common methods for designing websites that work well on desktop.."
     // },
]

function Services() {

     const [isModalOpen, setModalOpen] = useState(false);

     const openModal = () => {
          debugger
          setModalOpen(true);
     };

     const closeModal = () => {
          setModalOpen(false);
     };

     return (
          <div className={`${styles.container}`}>
               <div className={`${styles.serviceHead}`}>
                    <p className={`${styles.serviceTitle}`}>Services</p>
                    <div className={`${styles.lineMf}`} />
               </div>

               <div className={`${styles.innerContainer}`}>
                    {services.map((data: any, index: number) => {
                         return (
                              <div key={index} className={`${styles.listInner}`} onClick={openModal}>
                                   <span className={`${styles.icon}`}>
                                        {data.icon}
                                   </span>
                                   <h3 className={`${styles.title}`}>{data.title}</h3>
                                   <p>{data.description}</p>
                              </div>
                         )
                    })}
               </div>

               <CustomModal isOpen={isModalOpen} onClose={closeModal}>
                    <img
                         src={'https://images.unsplash.com/photo-1700222015171-6797e2a753ca?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
                         alt='Profile'
                         className='w-full h-96'
                    />

                    <div className='my-4'>
                         <h2 className='text-[22px] font-bold'>Seo Marketing</h2>
                         <p>Arlo is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates,
                              and maximize your revenue to help grow your business and achieve your goals.</p>
                         <p>
                              In today's digital world, your website is the first interaction consumers have with
                              your business. That's why almost 95 percent of a user's first impression relates to
                              web design. Its also why web design services can have an immense impact on your
                              companys bottom line.
                         </p>
                         <p>
                              In todays digital world, your website is the first interaction consumers have with
                              your business. That's why almost 95 percent of a user's first impression relates to
                              web design. Its also why web design services can have an immense impact on your
                              companys bottom line.
                         </p>
                    </div>
               </CustomModal>

          </div>
     )
}

export default Services