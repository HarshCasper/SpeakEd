import React from 'react'

import './Speakers.css'

import ButtonOne from '../Button/ButtonOne';

import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
function Speakers() {
    return (
        <div>
                <h1 className = 'speakers__heading' id = 'speakers'>Featured Speakers</h1>
                <p className = 'speakers__subheading'>Know About Our Speakers</p>
        <section className="card-section">
          <div className="card">
            <h3>Motivational Speaker</h3>
            <img className="animate-img" src="https://priya-kumar.com/wp-content/uploads/2019/05/Priya-Kumar-workshops.jpg" alt="bugra.work" />
            <div className="card-content">
              <p>Priya Kumar</p>
              <ul>
                <li>Job: Indian writer</li>
                <li>Phone: +91-9876543210</li>
                <li>Email: contact@priya.business</li>
              </ul>
            </div>
            <div className="card-footer animate-btn">
              <a href="#"> <InstagramIcon></InstagramIcon> </a>
              <a href="#"> <FacebookIcon></FacebookIcon> </a>
              <a href="#"> <TwitterIcon></TwitterIcon> </a>
              <a href="#"> <YouTubeIcon></YouTubeIcon> </a>
            </div>
            
          </div>
          <div className="card">
            <h3> Advocate</h3>
            <img className="animate-img" src="https://upload.wikimedia.org/wikipedia/commons/c/c0/Deepak_Chopra.jpg" alt="bugra.work" />
            <div className="card-content">
              <p>Deepak Chopra</p>
              <ul>
                <li>Job: Indian-American author</li>
                <li>Phone: +91-9876543210</li>
                <li>Email: contact@deepak.speaker</li>
              </ul>
            </div>
            <div className="card-footer animate-btn">
            <a href="#"> <InstagramIcon></InstagramIcon> </a>
              <a href="#"> <FacebookIcon></FacebookIcon> </a>
              <a href="#"> <TwitterIcon></TwitterIcon> </a>
              <a href="#"> <YouTubeIcon></YouTubeIcon> </a>
            </div>
          </div>
          <div className="card">
            <h3>Author and Columnist</h3>
            <img className="animate-img" src="https://economictimes.indiatimes.com/thumb/msid-63845903,width-1200,height-900,resizemode-4,imgsize-171424/every-time-chetan-bhagat-brought-the-house-down-with-his-tweets-and-got-trolled.jpg?from=mdr" alt="bugra.work" />
            <div className="card-content">
              <p>Chetan Bhagat</p>
              <ul>
                <li>Job: author and columnist</li>
                <li>Phone: +91-9876543210</li>
                <li>Email: contact@chetan.speaker</li>
              </ul>
            </div>
            <div className="card-footer animate-btn">
            <a href="#"> <InstagramIcon></InstagramIcon> </a>
              <a href="#"> <FacebookIcon></FacebookIcon> </a>
              <a href="#"> <TwitterIcon></TwitterIcon> </a>
              <a href="#"> <YouTubeIcon></YouTubeIcon> </a>
            </div>
    
          </div>
        </section>
        <div className = 'speaker__button'>
        <ButtonOne text = 'More Speakers'></ButtonOne>
        </div>
      </div>
    )
}

export default Speakers
