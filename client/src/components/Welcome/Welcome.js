// import React from 'react'
import { greeting, illustration } from '../../SpeakEd'
import { BrowserRouter as Router, Link, NavLink } from 'react-router-dom';
// import { Fade } from 'react-reveal';
// css
import './Welcome.css'

// import ButtonOne from '../Button/ButtonOne';
function Welcome() {
    return (
        <div>
          
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
        {/* <Fade left duration = {1000}> */}
            
          <div className="greeting-text-div">
            <div>
              <h1
                className= 'greeting-text'
              >
              {greeting.title}
              </h1>
                <br></br>
              <p
                className= 'greeting-text-p subTitle'
              >
                {greeting.subTitle}
              </p>
              
              <div className="button-greeting-div">
              {/* <Link to = '/getstarted' className = 'header__button' >
           
              <ButtonOne  text = 'GET STARTED'  ></ButtonOne>
          </Link> */}
              </div>

            </div>
          </div>
            {/* </Fade> */}
            {/* <Fade right duration = {1000}> */}

          <div className="greeting-image-div">

            {!illustration.animated ? (
            //   <DisplayLottie animationData={skillsOne} />
            <h1>hey</h1>
            ) : (
              <img
                alt="Megaphone"
                src= 'https://image.freepik.com/free-vector/tiny-people-marketing-manager-with-megaphone-push-advertising-push-advertising-traditional-marketing-strategy-interruption-marketing-concept-illustration_335657-2571.jpg'
              ></img>
            )}
          </div>
            {/* </Fade> */}
        </div>
      </div>
        </div>
    )
}

export default Welcome
