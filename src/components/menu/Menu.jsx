import "./menu.scss"

export default function Menu({fullMenu, menuOpen, setMenuOpen}) {
    return (
        <div className={"hamburgerMenu " + (fullMenu && "fullMenu ") + (menuOpen && "active")}>
            <ul>
                <li><a href="#works" onClick={()=> fullMenu && setMenuOpen(!menuOpen)}>W.I.P.</a></li>
                <li><a href="https://www.youtube.com/@joshmutia/videos" onClick={()=> fullMenu && setMenuOpen(!menuOpen)} target="_blank" rel="noopener noreferrer" >Films</a></li>
                <li><a href="#contact" onClick={()=> fullMenu && setMenuOpen(!menuOpen)}>Contact</a></li>
            </ul>
        </div>
    )
}
