import React from 'react'
import Footer from '../components/footer'

import SocialMedia from '../components/icons/SocialMedia'

export function FooterContainer(){
    return(
        <Footer>
          <Footer.Wrapper>
              <Footer.Row>
                  <Footer.Row>
                      SpeakEd is the place where you can 
                      Search for the events.
                      <SocialMedia/>
                  </Footer.Row>
              <Footer.Column>
                  <Footer.Title>SpeakEd Links</Footer.Title>
                  <Footer.Link href="#">Home</Footer.Link>
                  <Footer.Link href="#">About Us</Footer.Link>
                  <Footer.Link href="#">Speakers</Footer.Link>
                  <Footer.Link href="#">Events</Footer.Link>
                  <Footer.Link href="#">Contact Us</Footer.Link>
                </Footer.Column>

                <Footer.Column>
                    <Footer.Title>Contact Us</Footer.Title>
                    <Footer.Row>speaker2021@gmail.com</Footer.Row>
                    <Footer.Column>9987339305</Footer.Column>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Title>SpeakEd Speakers</Footer.Title>
                </Footer.Column>
                </Footer.Row>
          </Footer.Wrapper>
        </Footer>
    )
}

