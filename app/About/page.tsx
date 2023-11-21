import React from 'react'
import styles from './About.module.css'

const user = {
  "Name": "Morgan Freeman",
  "Profile": "full stack developer",
  "Email": "contact@example.com",
  "Phone": "(617) 557-0089",
}

const skills = {
  "HTML": "85%",
  "CSS": "85%",
  "Tailwind": "50%",
  "Redux": "85%",
  "React": "85%",
  "React Native": "85%"
}

function About() {
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.leftContainer}`}>
        <div className={`${styles.displayFlex}`}>
          <img src={'https://bootstrapmade.com/demo/templates/DevFolio/assets/img/testimonial-2.jpg'} alt='Profile'/>
          <div>
            {Object.keys(user).map((key, value) => (
              <div className={`${styles.userInfo}`}>
              <span className={`${styles.userInfoKey}`}>{key}: </span>
              <span>{user[key as keyof typeof user]}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <p className={`${styles.title1}`}>Skill</p>
          {Object.keys(skills).map((key) => {
            return(
              <div>
                <div className={`${styles.displayFlex}`}>
                  <p className="mr-3">{key }</p>
                  <p>{skills[key as keyof typeof skills]}</p>
                </div>
                <progress value={parseInt(skills[key as keyof typeof skills])} max="100" className='w-full progress-blue-700'></progress>
              </div>
            )
          })}
        </div>
      </div>
      <div className={`${styles.leftContainer}`}>
        <h1 className={`${styles.aboutTitle}`}>About me</h1>
        <p>
        Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Curabitur arcu erat,
         accumsan id imperdiet et, porttitor at sem. Praesent sapien massa, convallis a 
         pellentesque nec, egestas non nisi. Nulla porttitor accumsan tincidunt.
        </p>
        <p>
        Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Curabitur arcu erat,
         accumsan id imperdiet et, porttitor at sem. Praesent sapien massa, convallis a 
         pellentesque nec, egestas non nisi. Nulla porttitor accumsan tincidunt.
        </p>
        <p>
        Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Curabitur arcu erat,
         accumsan id imperdiet et, porttitor at sem. Praesent sapien massa, convallis a 
         pellentesque nec, egestas non nisi. Nulla porttitor accumsan tincidunt.
        </p>
      </div>
    </div>
  )
}

export default About
