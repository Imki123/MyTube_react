import React from 'react'

function Header(){
    return(
        <div id="header">
            <div id="start">
                <img className="img_button" id="guide_icon" alt="guide_icon" src="images/guide_icon.png"/>
                <img className="img_button" id="youtube_logo" alt="youtube_logo" src="images/youtube_logo.png"/>
            </div>
            <div id="center">
                <div id="search_bar">
                    <input placeholder="검색"/>
                    <img className="img_button" alt="keyboard_icon" src="images/keyboard_icon.png"/>
                </div>
                <button id="search_button" className="img_button">
                    <img alt="search_icon" src="images/search_icon.png"/>
                </button>
            </div>
            <div id="end">
                <img className="img_button" alt="video_icon" src="images/video_icon.png"/>
                <img className="img_button" alt="apps_icon" src="images/apps_icon.png"/>
                <img className="img_button" alt="alarm_icon" src="images/alarm_icon.png"/>
                <img className="img_button" alt="profile_icon" src="images/profile_icon.png"/>
            </div>
        </div>
    )
}

export default Header
