import React from 'react'
import {Link} from 'react-router-dom'

function Video(props) {
    const {id, videos} = props
	return (
		<div className="grid_video">
			<div className="video_img">
				<Link to={`/watch?v=${videos[id].url}`}>
					<img alt="" src={videos[id].img} />
				</Link>
			</div>
			<div className="video_content">
				<div className="video_profile">
					<Link to={videos[id].name}>
						<img alt="" src={videos[id].profile} />
					</Link>
				</div>
				<div className="video_text">
					<div className="video_title">{videos[id].title}</div>
					<div className="video_name">
						<Link to={videos[id].name}>
                            {videos[id].name}
                        </Link>
					</div>
					<div className="video_viewAndTime">조회수 {videos[id].view}회 ㆍ {videos[id].time}</div>
				</div>
			</div>
		</div>
	)
}

export default Video
