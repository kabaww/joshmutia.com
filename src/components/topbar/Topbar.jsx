import "./topbar.scss"
import { Mail } from '@mui/icons-material';

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="wrapper">
                <div className="topbarLeft">
                    <a href="#intro"><h1 className="myName">JOSH MUTIA</h1></a>
                </div>
                <div className="topbarRight">
                    right side
                </div>
            </div>
        </div>
    )
}
