import React from 'react'
import {Link} from 'react-router-dom'

function Header(){
    return(
        <div id="header">
            <div id="start">
                <img className="img_button" id="guide_icon" alt="guide_icon" src={process.env.PUBLIC_URL+"/images/guide_icon.png"}/>
                <Link to="/"><img className="img_button" id="youtube_logo" alt="youtube_logo" src={process.env.PUBLIC_URL+"/images/youtube_logo.png"}/></Link>
            </div>
            <div id="center">
                <div id="search_bar">
                    <input placeholder="검색"/>
                    <img className="img_button" alt="keyboard_icon" src={process.env.PUBLIC_URL+"/images/keyboard_icon.png"}/>
                </div>
                <button id="search_button" className="img_button">
                    <img alt="search_icon" src={process.env.PUBLIC_URL+"/images/search_icon.png"}/>
                </button>
            </div>
            <div id="end">
                <img className="img_button" alt="video_icon" src={process.env.PUBLIC_URL+"/images/video_icon.png"}/>
                <img className="img_button" alt="apps_icon" src={process.env.PUBLIC_URL+"/images/apps_icon.png"}/>
                <img className="img_button" alt="alarm_icon" src={process.env.PUBLIC_URL+"/images/alarm_icon.png"}/>
                <img className="img_button" alt="profile_icon" src={process.env.PUBLIC_URL+"/images/profile_icon.png"}/>
            </div>
        </div>
    )
}

export default Header
