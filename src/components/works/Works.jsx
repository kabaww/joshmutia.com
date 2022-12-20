import "./works.scss"
import VideoPlayer from "../videojs/videojs"
import React from 'react';
import works from "./Workslist"

export default function Works() {
    let workdivs = {};

    if (works) {
        workdivs = Object.keys(works).slice(1).map(key => 
            <div value={key}>
                <VideoPlayer {...works[key].options} />
                <div className="highlightVideoText">
                    <span>{works[key].lefttext}</span>
                    <span>{works[key].centertext}</span>
                    <span>{works[key].righttext}</span>
                </div>
            </div>
        )
    }

    return (
        <div className="works" id="works">
            {workdivs}
        </div>
    )
}
