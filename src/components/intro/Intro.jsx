import "./intro.scss"

export default function Intro() {
    return (
        <div className="intro" id="intro">
            <div className="highlightVideo">
                <iframe src="https://player.vimeo.com/video/649567721?h=9646d300ce" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen>
                </iframe>
            </div>
            <div className="highlightVideoText">
                <span>Homeroom (2022)</span>
                <span>post production</span>
            </div>
        </div>
    )
}
