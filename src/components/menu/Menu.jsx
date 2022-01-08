import "./menu.scss"

export default function Menu({fullMenu, menuOpen, setMenuOpen}) {
    return (
        <div className={"hamburgerMenu " + (fullMenu && "fullMenu ") + (menuOpen && "active")}>
            <ul>
                <li><a href="#intro" onClick={()=>setMenuOpen(!menuOpen)}>About</a></li>
                <li><a href="#works" onClick={()=>setMenuOpen(!menuOpen)}>Films</a></li>
                <li><a href="#contact" onClick={()=>setMenuOpen(!menuOpen)}>Contact</a></li>
            </ul>
        </div>
    )
}
