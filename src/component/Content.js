import React from 'react'

function Content(props){
    return(
        <div id="content">
            <div id="grid">
                <div id="grid_video_wrapper">
                    {
                        props.children
                    }
                </div>
            </div>
        </div>
    )
}

export default Content

