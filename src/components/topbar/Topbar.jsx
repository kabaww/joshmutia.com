import "./topbar.scss"

import Menu from '../menu/Menu'

export default function Topbar({menuOpen, setMenuOpen}) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="topbarLeft">
                    <a href="#intro"><h1 className="myName">JOSH MUTIA</h1></a>
                </div>
                <div className="topbarRight">
                    <div className="navbar">
                        <Menu />
                    </div>
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
