import React from 'react'
import './Watch.css'
import RelatedVideo from './RelatedVideo'

function Watch(props) {
    const {id, videos} = props
	return (
		<div id="columns">
			<div id="primary">
				<div id="video">
					<iframe
						title="video"
						width="560"
						height="315"
						src={"https://www.youtube.com/embed/"+videos[id].url}
						frameBorder="0"
						allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
					></iframe>
				</div>

				<div id="info">
                    <div id="infoTitle">
                        <div className="title">{videos[id].title}</div>
                    </div>
                    <div id="infoContent">

                    </div>
                </div>
				<div id="comments">
                    comments
                </div>
			</div>
			<div id="secondary">
                <div id="secondaryTitle">
                    <div id="nextVideo">다음 동영상</div> 
                    <div id="autoPlay">자동재생 <button>ON</button></div> 
                </div>
                {
                    videos.map((item, index) => {
                        return <RelatedVideo id={index} videos={videos}/>
                    })
                }
                
            </div>
		</div>
	)
}

export default Watch
