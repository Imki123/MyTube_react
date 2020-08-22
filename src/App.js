import React from 'react'
import './App.css'
import Header from './component/Header'
import Guide from './component/Guide'
import Video from './component/Video'

function App() {
	const videos=[
        {
            id: 0,
            url: 'video_url',
            img: 'images/video_img.png',
            profile: 'images/video_profile.png',
            title: '루루가 디디에게 덤볐어요!',
            name: '크림히어로즈',
            view: '150만',
            time: '8개월 전'
        },
        {
            id: 1,
            url: 'video_url',
            img: 'images/video_img.png',
            profile: 'images/video_profile.png',
            title: '루루가 디디에게 덤볐어요!',
            name: '크림히어로즈',
            view: '150만',
            time: '8개월 전'
        },
        {
            id: 2,
            url: 'video_url',
            img: 'images/video_img.png',
            profile: 'images/video_profile.png',
            title: '루루가 디디에게 덤볐어요!',
            name: '크림히어로즈',
            view: '150만',
            time: '8개월 전'
        },
        {
            id: 3,
            url: 'video_url',
            img: 'images/video_img.png',
            profile: 'images/video_profile.png',
            title: '루루가 디디에게 덤볐어요!',
            name: '크림히어로즈',
            view: '150만',
            time: '8개월 전'
        },
        {
            id: 4,
            url: 'video_url',
            img: 'images/video_img.png',
            profile: 'images/video_profile.png',
            title: '루루가 디디에게 덤볐어요!',
            name: '크림히어로즈',
            view: '150만',
            time: '8개월 전'
        },
        {
            id: 5,
            url: 'video_url',
            img: 'images/video_img.png',
            profile: 'images/video_profile.png',
            title: '루루가 디디에게 덤볐어요!',
            name: '크림히어로즈',
            view: '150만',
            time: '8개월 전'
        },
        {
            id: 6,
            url: 'video_url',
            img: 'images/video_img.png',
            profile: 'images/video_profile.png',
            title: '루루가 디디에게 덤볐어요!',
            name: '크림히어로즈',
            view: '150만',
            time: '8개월 전'
        },
        {
            id: 6,
            url: 'video_url',
            img: 'images/video_img.png',
            profile: 'images/video_profile.png',
            title: '루루가 디디에게 덤볐어요!',
            name: '크림히어로즈',
            view: '150만',
            time: '8개월 전'
        },
        {
            id: 6,
            url: 'video_url',
            img: 'images/video_img.png',
            profile: 'images/video_profile.png',
            title: '루루가 디디에게 덤볐어요!',
            name: '크림히어로즈',
            view: '150만',
            time: '8개월 전'
        },
        {
            id: 6,
            url: 'video_url',
            img: 'images/video_img.png',
            profile: 'images/video_profile.png',
            title: '루루가 디디에게 덤볐어요!',
            name: '크림히어로즈',
            view: '150만',
            time: '8개월 전'
        },
        {
            id: 6,
            url: 'video_url',
            img: 'images/video_img.png',
            profile: 'images/video_profile.png',
            title: '루루가 디디에게 덤볐어요!',
            name: '크림히어로즈',
            view: '150만',
            time: '8개월 전'
        },
        {
            id: 6,
            url: 'video_url',
            img: 'images/video_img.png',
            profile: 'images/video_profile.png',
            title: '루루가 디디에게 덤볐어요!',
            name: '크림히어로즈',
            view: '150만',
            time: '8개월 전'
        },
        {
            id: 6,
            url: 'video_url',
            img: 'images/video_img.png',
            profile: 'images/video_profile.png',
            title: '루루가 디디에게 덤볐어요!',
            name: '크림히어로즈',
            view: '150만',
            time: '8개월 전'
        },
        {
            id: 6,
            url: 'video_url',
            img: 'images/video_img.png',
            profile: 'images/video_profile.png',
            title: '루루가 디디에게 덤볐어요!',
            name: '크림히어로즈',
            view: '150만',
            time: '8개월 전'
        },
    ]
	return (
		<>
			<Header />
			<div id="body_container">
				<Guide />
				<div id="content">
					<div id="grid">
						<div id="grid_video_wrapper">
                            {
                                videos.map((item, index)=>{
                                    return <Video id={index} videos={videos}/>
                                })
                            }
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default App
