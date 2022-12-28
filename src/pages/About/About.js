import React from 'react'
import './about.css'
import line from './images/line.svg'
import familyphoto from './images/family.svg'
import love from './images/favlove.svg'
import team from './images/teambg.svg'
import GH from './images/github.svg'
import twit from './images/twitter.svg'
import linkedin from './images/linkedin.svg'

const About = () => {
  return (
    <>
      <div className='about-container'>
        <div className='aboutus'>
          <h1> About Us </h1>
          <img src={line} alt='line-img' />
          <h4>You want to learn more about us? You are in the right place. Read to learn how this all came about and understand our story.</h4>  
        </div>
        <img src={familyphoto} alt='family' id='family'/>
        <div className='hero-section'>
            <h3> Our Story </h3>
            <img src={love} alt='love-img' />
            <div className='stories'>
            <h4> My mum used to say you can never be fully prepared for the birth of a baby. This idea of a story was birthed from stories of mothers who had interesting pregnancy journies from conception to delivery at different stages. We decided to create a social media app specifically for expectant mothers and other women to relate with each other, ask questions and share ideas, whilst socializing.</h4>
            <h4>Mothers don't really have a space where they can share amazing and wonderful stories what it takes and what to do to make it easier on others. We hope to reach as many women who are finding it difficult to get through. Also, we do our best to make it fun, you can meet other mothers, expectant mothers or to-be mothers and make new friends.</h4>
            </div>
        </div>
        <div className='team-mates'>
            <h3>Meet The Team</h3>
            <h4>The amazing members of the Kiciti team that has made this possible. Ready to meet them? Here you go...</h4>
            <div className='team'>
                <div className='left-card'>
                    <div className='left-card-front'>
                      <img src={team} alt='team-pic' id='team-pic'/>
                      <h3>Perpetual Meninwa</h3>
                      <h5> Please hover on the image to learn more...</h5>
                    </div>
                    <div className='left-card-back'>
                      <h4>Frontend Developer</h4>
                      <h5>Perpetual is a frontend developer and researcher. She worked on the beautiful designs we can see on the screen and a great mummy lover.</h5>
                      <div className='team-social'>
                        <a href='https://github.com/Perpy-del'>
                          <img src={GH} alt='GitHub' />
                        </a>
                        <a href='https://twitter.com/pominpirational'>
                          <img src={twit} alt='Twitter' />
                        </a>
                        <a href='https://www.linkedin.com/in/perpydev'>
                          <img src={linkedin} alt='LinkedIn' />
                        </a>
                      </div>
                    </div>
                </div>
                <div className='right-card'>
                    <div className='right-card-front'>
                      <img src={team} alt='team-pic' id='team-pic2'/>
                      <h3>Perpetual Meninwa</h3>
                      <h5> Please hover on the image to learn more...</h5>
                    </div>
                    <div className='right-card-back'>
                      <h4>Frontend Developer</h4>
                      <h5>Perpetual is a frontend developer and researcher. She worked on the beautiful designs we can see on the screen and a great mum lover.</h5>
                      <div className='team-social2'>
                        <a href='https://github.com/Perpy-del'>
                          <img src={GH} alt='GitHub' />
                        </a>
                        <a href='https://twitter.com/pominpirational'>
                          <img src={twit} alt='Twitter' />
                        </a>
                        <a href='https://www.linkedin.com/in/perpydev'>
                          <img src={linkedin} alt='LinkedIn' />
                        </a>
                      </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default About