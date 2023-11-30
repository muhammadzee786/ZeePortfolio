import React from 'react'
import styles from './Portfolio.module.css'

const portfolioData = [
     {
          image: 'https://bootstrapmade.com/demo/templates/DevFolio/assets/img/work-1.jpg',
          title: 'Lorem impsum dolor',
          subTitle: 'Web Design',
          date: '18 Sep. 2018'
     },
     {
          image: 'https://bootstrapmade.com/demo/templates/DevFolio/assets/img/work-1.jpg',
          title: 'Lorem impsum dolor',
          subTitle: 'Web Design',
          date: '18 Sep. 2018'
     },
     {
          image: 'https://bootstrapmade.com/demo/templates/DevFolio/assets/img/work-1.jpg',
          title: 'Lorem impsum dolor',
          subTitle: 'Web Design',
          date: '18 Sep. 2018'
     },
     {
          image: 'https://bootstrapmade.com/demo/templates/DevFolio/assets/img/work-1.jpg',
          title: 'Lorem impsum dolor',
          subTitle: 'Web Design',
          date: '18 Sep. 2018'
     },
     {
          image: 'https://bootstrapmade.com/demo/templates/DevFolio/assets/img/work-1.jpg',
          title: 'Lorem impsum dolor',
          subTitle: 'Web Design',
          date: '18 Sep. 2018'
     },
]

function Portfolio() {
     return (
          <div className={`${styles.container}`}>
               <div className={`${styles.portfolioHead}`}>
                    <p className={`${styles.portfolioTitle}`}>Portfolio</p>
                    <div className={`${styles.lineMf}`} />
               </div>

               <div className='flex gap-4 flex-wrap'>
               {portfolioData.map((data,index) => {
                    return(
                         <div className={`${styles.card}`}>
                    <img
                         src='https://bootstrapmade.com/demo/templates/DevFolio/assets/img/work-1.jpg'
                         alt='title image'
                    />
                    <div className='mt-2'>
                         <h2 className={`${styles.cardTitle}`}>Leorm title</h2>
                         <div>
                              <span className={`${styles.stackName}`}>web Design</span>
                              <span> / 18 sep, 2018</span>
                         </div>
                    </div>
               </div>
                    )
               })}
               </div>
          </div>
     )
}
export default Portfolio