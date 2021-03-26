import React from 'react'
import {Fade} from 'react-reveal'
import { aboutusData, illustration } from '../../SpeakEdData'
import Aboutus from '../../assets/aboutus.svg';
import ButtonOne from '../Button/ButtonOne'
import './AboutUs.css'
function AboutUs() {
    return (
        <div>
            <div className = 'aboutus'>
            <div className="aboutus__maindiv" id = 'aboutus'>
                <Fade left duration={2000} >
                    <div className="aboutus__imageDiv">
                        {! illustration.animated ?(
                            // <DisplayLottie animationData = {aboutus}></DisplayLottie>
                            <h1>hey</h1>
                        ): (
                            <img 
                            alt = 'man is working'
                            src = {Aboutus}
                            ></img>
                        )}
                    </div>
                </Fade>

                {/* text in right side */}

                <Fade right duration={2000}>
                    <div className="aboutus-text-div">
                        <h1 className = 'aboutus__heading'> 
                            {aboutusData.title}{''}
                        </h1>
                        {/* subttitle */}
                        <p className = ' aboutus-text-subtitle'>
                            {aboutusData.Info}
                        </p>

                        <div className="button-greeting-div">
           
              <ButtonOne  text = 'More About-Us'  ></ButtonOne>
          {/* </Link> */}
              </div>
                    </div>
                </Fade>
            </div>
        </div>
        </div>
    )
}

export default AboutUs
