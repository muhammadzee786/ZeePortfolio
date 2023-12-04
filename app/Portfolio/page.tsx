import React from 'react'
import styles from './Portfolio.module.css'

const portfolioData = [
     {
          image: '/images/coachlist.jpg',
          title: 'CoachList',
          subTitle: 'Web Design',
          date: '01 December. 2022',
          link: 'https://www.coachlist.com/'
     },
     {
          image: '/images/nationawide.jpg',
          title: 'Nationwide Surveyors: Landlord Certificates',
          subTitle: 'Web Design',
          date: '15 July. 2022',
          link: 'https://nationwide-surveyors.org.uk/'
     },
     {
          image: '/images/stampbox.jpg',
          title: 'StampBox-Philatelists platform',
          subTitle: 'Mobile App',
          date: '01 March 2023',
          link: 'https://play.google.com/store/apps/details?id=com.stampbox&hl=en&gl=US&pli=1'
     },
     {
          image: '/images/chex.jpg',
          title: 'CHEX.AI',
          subTitle: 'Web App',
          date: '10 Sep. 2021',
          link: 'https://www.chex.ai/ReqADemo/'
     },
     {
          image: '/images/perkwiz.jpg',
          title: 'PerkWiz: Local & Web Talent',
          subTitle: 'Mobile App',
          date: '15 Mar. 2020',
          link: 'https://play.google.com/store/apps/details?id=com.perkwizmobile.prod&hl=en&gl=US'
     },
     {
          image: '/images/bringfresh.jpg',
          title: 'Bring Fresh',
          subTitle: 'Web & Mobile App',
          date: '20 Sep. 2019',
          link: 'https://bringfresh.eu/'
     },
]

function Portfolio() {
     return (
          <div id="PortfolioSection" className={`${styles.container}`}>
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
