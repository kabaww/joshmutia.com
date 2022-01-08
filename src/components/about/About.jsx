import "./about.scss"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebookMessenger, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import Chip from '@mui/material/Chip';
import Tooltip from '@mui/material/Tooltip';
import { useState } from "react";

export default function About() {
    const myEmail = 'josh.mutia@benilde.edu.ph';
    const [open, setOpen] = useState(false);

    const closeToolTip = function () {
        setOpen(false);
    }

    const openToolTip = function () {
        setOpen(true);
        copyEmailToClipboard();
        setTimeout(closeToolTip, 1000);
    }

    const copyEmailToClipboard = function () {
        navigator.clipboard.writeText(myEmail)
    }

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
                        <li>
                            <FontAwesomeIcon icon={faEnvelope}/> 
                            <span>josh.mutia@benilde.edu.ph</span> 
                            <Tooltip
                                PopperProps={{
                                disablePortal: true,
                                }}
                                onClose={closeToolTip}
                                open={open}
                                disableFocusListener
                                disableHoverListener
                                disableTouchListener
                                placement="right"
                                title="Copied to clipboard!"
                            >
                                <Chip className="copyChip" label="copy" size="small" variant="outlined" onClick={openToolTip}/>
                            </Tooltip>
                            
                        </li>
                        <li><a href="https://fb.me/photoshoplolpersonal" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebookMessenger}/> <span>fb.me/photoshoplolpersonal</span></a></li>
                        <li><a href="https://linkedin.com/in/joshmutia" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin}/> <span>linkedin.com/in/joshmutia</span></a></li>
                    </ul>
                </div>
            </div>
            
        </div>
    )
}
