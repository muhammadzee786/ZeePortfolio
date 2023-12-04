import React from 'react'
import styles from './About.module.css'

const user = {
  "Name": "Hafiz Muhammad Zeeshan",
  "Profile": "full stack developer",
  "Email": "hafiz.zee343@example.com",
  "Phone": "(92) 305 5083272",
}

const skills = {
  "React": "95%",
  "React Native": "95%",
  "CSS": "90%",
  "NextJs": "90%",
  "Redux": "85%",
  "Tailwind": "80%",
  "Node": "70%",
}

function About() {
  return (
    <div id="AboutSection" className={`${styles.container}`}>
      <div className={`${styles.leftContainer}`}>
        <div className={`${styles.displayFlex}`}>
          <img src={'https://bootstrapmade.com/demo/templates/DevFolio/assets/img/testimonial-2.jpg'} alt='Profile' />
          <div>
            {Object.keys(user).map((key, index) => (
              <div key={index} className={`${styles.userInfo}`}>
                <span className={`${styles.userInfoKey}`}>{key}: </span>
                <span>{user[key as keyof typeof user]}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <p className={`${styles.title1}`}>Skill</p>
          {Object.keys(skills).map((key, index) => {
            return (
              <div key={index}>
                <div className={`${styles.displayFlex}`}>
                  <p className="mr-3">{key}</p>
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
          As a dedicated Frontend developer and aspiring Master, I bring a fusion of design
          finesse and technical expertise to the table. Proficient in React, React Native,
          TailwindCSS, HTML5, CSS, Typescript, Next, and Figma to design, google maps,
          firebase, NodeJs, MongoDb ⭐⭐⭐⭐⭐,
        </p>
        <p>
          I am committed to transforming client ideas into reality. Offering comprehensive
          services in both frontend and backend development, I am well-versed in React Native,
          React JS, HTML &apos; CSS, JavaScript, and Node JS. Moreover, my creativity extends to
          crafting full-stack web apps and websites using React.js, Next.js, MongoDB, Node.js,
          and Express.js. Whether it's small businesses or ambitious projects, I am passionate
          about bringing visions to life with precision and flair.
        </p>
        <p>
          Let's collaborate to make your digital presence exceptional. 💻🚀🎨
        </p>
      </div>
    </div>
  )
}

export default About
