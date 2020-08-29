import React from 'react'
import './RelatedVideo.css'
import {Link} from 'react-router-dom'
 
function RelatedVideo(props) {
    const {id, videos} = props
	return (
		<div className="relatedVideo">
			<div className="videoImg">
				<Link to={`/watch?v=${videos[id].url}`}>
					<img alt="" src={videos[id].img} />
				</Link>
			</div>
			<div className="videoContent">
				<div className="videoTitle">{videos[id].title}</div>
				<div className="videoName">
					<Link to={videos[id].name}>
						{videos[id].name}
					</Link>
				</div>
				<div className="videoViewAndTime">조회수 {videos[id].view}회 ㆍ {videos[id].time}</div>
			</div>
		</div>
	)
}

export default RelatedVideo
