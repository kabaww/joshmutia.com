import "./menu.scss"

export default function Menu({fullMenu, menuOpen, setMenuOpen}) {
    return (
        <div className={"hamburgerMenu " + (fullMenu && "fullMenu ") + (menuOpen && "active")}>
            <ul>
                <li><a href="#intro" onClick={()=>setMenuOpen(!menuOpen)}>W.I.P.</a></li>
                {/* <li><a href="#works" onClick={()=>setMenuOpen(!menuOpen)}>Films</a></li> */}
                <li><a href="https://www.youtube.com/user/Nightmare1124" onClick={()=>setMenuOpen(!menuOpen)} target="_blank" rel="noopener noreferrer" >Films</a></li>
                <li><a href="#contact" onClick={()=>setMenuOpen(!menuOpen)}>Contact</a></li>
            </ul>
        </div>
    )
}
