import React from 'react'
import './RelatedVideo.css'

function RelatedVideo(props) {
    const {id, videos} = props
	return (
		<div className="relatedVideo">
			<div className="videoImg">
				<a href={`/mytube_react/watch?v=${videos[id].url}`}>
					<img alt="" src={videos[id].img} />
				</a>
			</div>
			<div className="videoContent">
				<div className="videoTitle">{videos[id].title}</div>
				<div className="videoName">
					<a href={videos[id].name}>
						{videos[id].name}
					</a>
				</div>
				<div className="videoViewAndTime">조회수 {videos[id].view}회 ㆍ {videos[id].time}</div>
			</div>
		</div>
	)
}

export default RelatedVideo
