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
            <h2>Motivational Speaker</h2>
            <img className="animate-img" src="https://priya-kumar.com/wp-content/uploads/2019/05/Priya-Kumar-workshops.jpg" alt="bugra.work" />
            <div className="card-content">
              <h3>Priya Kumar</h3>
              <ul>
                <li><p>Job: Indian writer</p></li>
                <li><p>Phone: +91-9876543210</p></li>
                <li><p>Email: contact@priya.business</p></li>
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
            <h2> Advocate</h2>
            <img className="animate-img" src="https://upload.wikimedia.org/wikipedia/commons/c/c0/Deepak_Chopra.jpg" alt="bugra.work" />
            <div className="card-content">
              <h3>Deepak Chopra</h3>
              <ul>
                <li><p>Job: Indian-American author</p></li>
                <li><p>Phone: +91-9876543210</p></li>
                <li><p>Email: contact@deepak.speaker</p></li>
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
            <h2>Author and Columnist</h2>
            <img className="animate-img" src="https://economictimes.indiatimes.com/thumb/msid-63845903,width-1200,height-900,resizemode-4,imgsize-171424/every-time-chetan-bhagat-brought-the-house-down-with-his-tweets-and-got-trolled.jpg?from=mdr" alt="bugra.work" />
            <div className="card-content">
              <h3>Chetan Bhagat</h3>
              <ul>
                <li><p>Job: author and columnist</p></li>
                <li><p>Phone: +91-9876543210</p></li>
                <li><p>Email: contact@chetan.speaker</p></li>
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
