import React from "react";
import { FontAwesomeIcon } from "react-icons";


// material ui

import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';

export default function SocialMedia() {
  return (
    <div>
      <div class="social-container">

<a href="https://www.youtube.com"
  className="youtube social" style={{
    alignItems:"center",
    margin:"10px",
      color:"white",
      flexWrap:"wrap"}}>
  {/* <FontAwesomeIcon icon={faYoutube} size="2x" /> */}
<YouTubeIcon></YouTubeIcon>
</a>
<a href="https://www.facebook.com"
className="facebook social" style={{
    alignItems:"center",
    margin:"10px",
    color:"white"}}>
{/* <FontAwesomeIcon icon={faFacebook} size="2x" /> */}
<FacebookIcon></FacebookIcon>
</a>
<a href="https://www.twitter.com" className="twitter social"
style={{
    alignItems:"center",
    margin:"10px",
    color:"white"}}>
{/* <FontAwesomeIcon icon={faTwitter} size="2x" /> */}
<TwitterIcon></TwitterIcon>
</a>
{ <a href="https://www.instagram.com"
className="instagram social" style={{
    alignItems:"center",
    margin:"10px",
    color:"white"}}>
{/* <FontAwesomeIcon icon={faInstagram} size="2x" /> */}
<InstagramIcon></InstagramIcon>
</a>
}
</div>
    </div>
  )
}
