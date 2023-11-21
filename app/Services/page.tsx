import React from 'react'
import styles from './Services.module.css'

function Services() {
     return (
          <div className={`${styles.container}`}>
               <div className={`${styles.serviceHead}`}>
                    <p className={`${styles.serviceTitle}`}>Services</p>
                    <p className={`${styles.serviceSubHead}`}>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    <div className={`${styles.lineMf}`}/>
               </div>

               <div className={`${styles.serviceBox}`}>
                    <div className={`${styles.serviceIco}`}>
                         <span className={`${styles.icoCircle}`}>
                              <i className=''></i>
                         </span>
                    </div>
               </div>
          </div>
     )
}

export default Services