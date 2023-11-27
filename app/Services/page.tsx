import React from 'react'
import styles from './Services.module.css'
import ReactIcon from '../assests/svg/reactIcon'

const services = [
     {
          "icon": <ReactIcon />,
          "title": "Web Design",
          "description": "Most common methods for designing websites that work well on desktop.."
     },
     {
          "icon": <ReactIcon />,
          "title": "Mobile App",
          "description": "Most common methods for designing websites that work well on desktop.."
     },
     {
          "icon": <ReactIcon />,
          "title": "UI/UX",
          "description": "Most common methods for designing websites that work well on desktop.."
     },
     {
          "icon": <ReactIcon />,
          "title": "SEO Marketing",
          "description": "Most common methods for designing websites that work well on desktop.."
     },
]

function Services() {
     return (
          <div className={`${styles.container}`}>
               <div className={`${styles.serviceHead}`}>
                    <p className={`${styles.serviceTitle}`}>Services</p>
                    <p className={`${styles.serviceSubHead}`}>What I do</p>
                    {/* <div className={`${styles.lineMf}`}/> */}
               </div>

               <div className={`${styles.innerContainer}`}>
                    {services.map((data: any, index: number) => {
                         return (
                              <div className={`${styles.listInner}`}>
                                   <span className={`${styles.icon}`}>
                                        {data.icon}
                                   </span>
                                   <h3 className={`${styles.title}`}>{data.title}</h3>
                                   <p>{data.description}</p>
                              </div>
                         )
                    })}
               </div>

          </div>
     )
}

export default Services