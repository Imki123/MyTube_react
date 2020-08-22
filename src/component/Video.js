import React from 'react'



function Video(props) {
    const {id, videos} = props
    console.log(id, videos[id])
	return (
		<div className="grid_video">
			<div className="video_img">
				<a href={videos[id].url}>
					<img alt="" src={videos[id].img} />
				</a>
			</div>
			<div className="video_content">
				<div className="video_profile">
					<a href={videos[id].name}>
						<img alt="" src={videos[id].profile} />
					</a>
				</div>
				<div className="video_text">
					<div className="video_title">{videos[id].title}</div>
					<div className="video_name">
						<a href="#video_name">{videos[id].name}</a>
					</div>
					<div className="video_viewAndTime">조회수 {videos[id].view}회 ㆍ {videos[id].time}</div>
				</div>
			</div>
		</div>
	)
}

export default Video
