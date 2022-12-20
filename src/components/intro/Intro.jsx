import "./intro.scss"
import VideoPlayer from "../videojs/videojs"
import React from 'react';
import works from "../works/Workslist"

export default function Intro() {
    return (
        <div className="intro" id="intro">
            <div className="introVideo">
                <VideoPlayer {...works[1].options} autoplay="any"/>
            </div>
            <div className="highlightVideoText">
                <span>{works[1].lefttext}</span>
                <span>{works[1].centertext}</span>
                <span>{works[1].righttext}</span>
            </div>
        </div>
    )
}
