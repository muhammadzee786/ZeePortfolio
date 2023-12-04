import React from 'react'
import styles from './Portfolio.module.css'

const portfolioData = [
     {
          image: '/images/stampbox.jpg',
          title: 'Lorem impsum dolor',
          subTitle: 'Web Design',
          date: '18 Sep. 2018',
          link: 'https://nationwide-surveyors.org.uk/'
     },
     {
          image: 'https://bootstrapmade.com/demo/templates/DevFolio/assets/img/work-1.jpg',
          title: 'Lorem impsum dolor',
          subTitle: 'Web Design',
          date: '18 Sep. 2018',
          link: 'https://www.coachlist.com/'
     },
     {
          image: 'https://bootstrapmade.com/demo/templates/DevFolio/assets/img/work-1.jpg',
          title: 'Lorem impsum dolor',
          subTitle: 'Web Design',
          date: '18 Sep. 2018',
          link: 'https://nationwide-surveyors.org.uk/'
     },
     {
          image: 'https://bootstrapmade.com/demo/templates/DevFolio/assets/img/work-1.jpg',
          title: 'Lorem impsum dolor',
          subTitle: 'Web Design',
          date: '18 Sep. 2018',
          link: 'https://nationwide-surveyors.org.uk/'
     },
     {
          image: 'https://bootstrapmade.com/demo/templates/DevFolio/assets/img/work-1.jpg',
          title: 'Lorem impsum dolor',
          subTitle: 'Web Design',
          date: '18 Sep. 2018',
          link: 'https://nationwide-surveyors.org.uk/'
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
                    {portfolioData.map((data, index) => {
                         return (
                              <div key={index} className={`${styles.card}`}>
                                   <img
                                        src={data.image}
                                        alt='title image'
                                   />
                                   <div className='mt-2'>
                                        <h2 className={`${styles.cardTitle}`}>{data.title}</h2>
                                        <div>
                                             <span>{data.subTitle}</span>
                                             <span> / {data.date}</span>
                                        </div>
                                        <a target="_blank" href={data.link} className={`${styles.fullProjLink}`}>
                                        <button>See full project</button>
                                        </a>
                                   </div>
                              </div>
                         )
                    })}
               </div>
          </div>
     )
}
export default Portfolio