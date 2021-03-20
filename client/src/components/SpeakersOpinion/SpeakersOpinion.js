import React from 'react'
import { Fade } from 'react-reveal'
import speakerone from '../../assets1/speakerone.svg';

import './SpeakersOpinion.css'
function SpeakersOpinion() {
    return (
        <div>
            <div className = 'speakersop__info'>
            <h1 className = 'speakerop__heading'> 
                    What our Speakers are saying
                        </h1>
            <div className="aboutus__maindiv" id = 'aboutus'>
                <Fade left duration={2000} >
                   <div className = 'speakersop__img'>
                   <img
  class="mask-group"
  src={speakerone}
/>
                   <div className = 'speakers__name'>
                       <h2>Ujjwal Patni</h2>
                       <h4>Speaker</h4>
                   </div>
                   </div>
                </Fade>

                {/* text in right side */}

                <Fade right duration={2000}>
                    <div className="aboutus-text-div">
                        <p className = ' speakop-text-subtitle'>
                        SpeakEd is a Community Platform developed for Community Leads and Volunteers as well as Speakers to come on a single Unified Platforms leading to greater visibility, helping you to find the right Speaker for your Event. With an integrated Portfolio Feature
                        </p>
                    </div>
                </Fade>
            </div>
        </div>
        </div>
    )
}

export default SpeakersOpinion
