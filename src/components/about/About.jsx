import "./about.scss"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebookMessenger, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function About() {
    return (
        <div className='contact' id="contact">
            <div className="aboutLeft">
                <div className="imgContainer">
                    <img src="josh-photo-field.png" alt="" />
                </div>
            </div>
            <div className="aboutRight">
                <h2> Hello! I'm Josh.</h2>

                <span> I am an aspiring documentary filmmaker, web developer, and student.</span>
                
                <div className="socialMedia">
                    <ul>
                        <li><FontAwesomeIcon icon={faEnvelope}/> <span>josh.mutia@benilde.edu.ph</span></li>
                        <li><FontAwesomeIcon icon={faFacebookMessenger}/> <span>fb.me/photoshoplolpersonal</span></li>
                        <li><FontAwesomeIcon icon={faLinkedin}/> <span>linkedin.com/in/joshmutia</span></li>
                    </ul>
                </div>
            </div>
            
        </div>
    )
}
