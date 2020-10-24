import React from 'react';
import './Footer.css';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import GTranslateIcon from '@material-ui/icons/GTranslate';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import MailIcon from '@material-ui/icons/Mail';
import PhoneIcon from '@material-ui/icons/Phone';


function Footer(props) {
    return (
    <div>
        <footer className="footer pt-2">
        <div className="container">
            <div className="row">             
                <div className="col-4 offset-1 col-sm-2">
                    <h5>Links</h5>
                    <ul className="list-unstyled">
                        <li><HomeIcon /><a href="#">Home</a></li>
                        <li><InfoIcon /><a href="#">About</a></li>
                        <li><AccessibilityIcon /><a href="#">Services</a></li>
                        <li><PermContactCalendarIcon /><a href="#">Contact</a></li>
                    </ul>
                </div>
                <div className="col-7 col-sm-5">
                    <h5>Our Address</h5>
                    <p>
		              121, Clear Water Bay Road
                      Clean City Indore M.P. India.
                      <br />
                      <a  href="phoneto:"><PhoneIcon/>+91987654321</a>
                      <br />
                      <a  href="phoneto:"><PhoneIcon/>+91888888888</a>
		           </p>
                </div>
                <div className="col-12 col-sm-4 align-self-center">
                    <div className="text-center">
                    <a href="http://google.com/+"><GTranslateIcon /></a>
                        <a  href="http://www.facebook.com/profile.php?id="><FacebookIcon/></a>
                        <a  href="http://www.linkedin.com/in/"><LinkedInIcon/></a>
                        <a  href="http://twitter.com/"><TwitterIcon/></a>
                        <a  href="http://youtube.com/"><YouTubeIcon/></a>
                        <a  href="mailto:"><MailIcon/></a>
                    </div>
                </div>
           </div>
           <div className="row justify-content-center">             
                <div className="col-auto">
                    <p>© Copyright 2020 Acro-XF</p>
                </div>
           </div>
        </div>
    </footer>
</div>
    );
}

export default Footer;