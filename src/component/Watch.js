import React from 'react'
import './Watch.css'
import RelatedVideo from './RelatedVideo'

function Watch(props) {
	const {videos} = props
	//location에서 video url을 뽑아내서 videos에서 해당 id의 video정보를 가져옴
	const searchs = window.location.search.replace('?','').split('&')
	let url, id = -1, video
	for(let i of searchs){ //searchs에서 url을 가져옴
		if(i.match('v=')){
			url = i.replace('v=','')
			break;
		}
	}
	for(let i of videos){ //url이 videos에 있으면 해당 video를 선택
		if(i.url === url){
			id = i.id
		}
	}
	if(id === -1){
		video = false
	}else{
		video = videos[id] //video
	}

	return (
		<div id="columns">
			<div id="primary">
				<div id="video">
					<iframe
						title="video"
						width="560"
						height="315"
						src={"https://www.youtube.com/embed/"+url}
						frameBorder="0"
						allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
					></iframe>
				</div>

				{video && 
				<div>
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
				</div>}
			</div>
			<div id="secondary">
                <div id="secondaryTitle">
                    <div id="nextVideo">다음 동영상</div> 
                    <div id="autoPlay">자동재생 <button>ON</button></div> 
                </div>
                {
                    videos.map((item, index) => {
                        return <RelatedVideo key={videos[index].id} id={index} videos={videos}/>
                    })
                }
                
            </div>
		</div>
	)
}

export default Watch
