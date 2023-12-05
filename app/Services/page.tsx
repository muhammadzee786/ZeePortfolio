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
          "description": "Tailored and responsive websites crafted to enhance your online presence and encourage meaningful interactions",
          "modalTitle": "Our Customer-Centric Approach",
          "modalContent": "From concept to development, we believe in taking a customer-centric approach to app development that emphasizes turning their ideas into reality. Whether you need to build a custom mobile app or a powerful desktop solution, our app developers and UI/UX designers take over it. So, place the order today and get benefitted from our exclusive value-added services.",
          "pointOne": "Latest web technologies like ReactJS, Node.js, and many more",
          "pointTwo": "Economical and Wallet-friendly engagement models to hire developers.",
          "pointThree": "Free and complimentary full-cycle quality assurance",
     },
     {
          "icon": <ReactNativeIcon />,
          "title": "Mobile App",
          "description": "Bring your concepts to life by creating immersive and user-friendly mobile experiences, elevating your digital presence and fostering increased user engagement.",
          "modalTitle": "Our Customer-Centric Approach",
          "modalContent": "From concept to development, we believe in taking a customer-centric approach to app development that emphasizes turning their ideas into reality. Whether you need to build a custom mobile app or a powerful desktop solution, our app developers and UI/UX designers take over it. So, place the order today and get benefitted from our exclusive value-added services.",
          "pointOne": "Latest tech stacks like Flutter, React Native, Xamarin, swift, and many more.",
          "pointTwo": "Economic and wallet-friendly engagement models to hire remote app developers.",
          "pointThree": "Free consultation for mobile app services",
     },
     {
          "icon": <UiUxIcon />,
          "title": "UI/UX",
          "description": "Captivating visuals and artistic proficiency to effectively communicate your brand's message, creating a lasting and impactful impression.",
          "modalTitle": "Visuals that Speak, Designs that Impress",
          "modalContent": "Establish a distinct brand identity with our captivating logo designs and comprehensive branding solutions.",
          "pointOne": "Elevate your brand presence with custom-designed banners for trade shows, exhibitions, and outdoor advertising.",
          "pointTwo": "Create visual impact and attract attention with striking poster designs for advertising, events, or promotional campaigns.",
          "pointThree": "Leave a lasting impression during networking opportunities with unique and impactful business card designs.",
     },
]

function Services() {

     const [isModalOpen, setModalOpen] = useState(false);
     const [modalData, setModalData] = useState<any>(null)

     const openModal = (data: any) => {
          debugger
          setModalData(data)
          setModalOpen(true);
     };

     const closeModal = () => {
          setModalOpen(false);
     };

     return (
          <div id="ServicesSection" className={`${styles.container}`}>
               <div className={`${styles.serviceHead}`}>
                    <p className={`${styles.serviceTitle}`}>Services</p>
                    <div className={`${styles.lineMf}`} />
               </div>

               <div className={`${styles.innerContainer}`}>
                    {services.map((data: any, index: number) => {
                         return (
                              <div key={index} className={`${styles.listInner}`} onClick={() => openModal(data)}>
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
                    {/* <img
                         src={'https://images.unsplash.com/photo-1700222015171-6797e2a753ca?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
                         alt='Profile'
                         className='w-full h-96'
                    /> */}

                    <div className='my-4'>
                         <h2 className='text-[22px] font-bold'>{modalData?.modalTitle ? modalData?.modalTitle : "Developement"}</h2>
                         <br/>
                         <p>{modalData?.modalContent ? modalData?.modalContent : "Developement"}</p>
                         <br/>
                         {modalData?.pointOne && <p>&#8226; {modalData?.pointOne}</p>}
                         <br/>
                         {modalData?.pointTwo && <p>&#8226; {modalData?.pointTwo}</p>}
                         <br/>
                         {modalData?.pointThree && <p>&#8226; {modalData?.pointThree}</p>}
                    </div>
               </CustomModal>

          </div>
     )
}

export default Services
