import React from 'react'
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom' 
import './App.css'
import Header from './component/Header'
import Guide from './component/Guide'
import Video from './component/Video'
import Content from './component/Content'

function App() {
	const videos=[
        {
            id: 0,
            url: 'video_url',
            img: process.env.PUBLIC_URL+'/images/video_img.png',
            profile: process.env.PUBLIC_URL+'/images/video_profile.png',
            title: '루루가 디디에게 덤볐어요!',
            name: '크림히어로즈',
            view: '150만',
            time: '8개월 전'
        },
        {
            id: 1,
            url: 'video_url',
            img: process.env.PUBLIC_URL+'/images/video_img.png',
            profile: process.env.PUBLIC_URL+'/images/video_profile.png',
            title: '루루가 디디에게 덤볐어요!',
            name: '크림히어로즈',
            view: '150만',
            time: '8개월 전'
        },
        {
            id: 2,
            url: 'video_url',
            img: process.env.PUBLIC_URL+'/images/video_img.png',
            profile: process.env.PUBLIC_URL+'/images/video_profile.png',
            title: '루루가 디디에게 덤볐어요!',
            name: '크림히어로즈',
            view: '150만',
            time: '8개월 전'
        },
        {
            id: 3,
            url: 'video_url',
            img: process.env.PUBLIC_URL+'/images/video_img.png',
            profile: process.env.PUBLIC_URL+'/images/video_profile.png',
            title: '루루가 디디에게 덤볐어요!',
            name: '크림히어로즈',
            view: '150만',
            time: '8개월 전'
        },
        {
            id: 4,
            url: 'video_url',
            img: process.env.PUBLIC_URL+'/images/video_img.png',
            profile: process.env.PUBLIC_URL+'/images/video_profile.png',
            title: '루루가 디디에게 덤볐어요!',
            name: '크림히어로즈',
            view: '150만',
            time: '8개월 전'
        },
        {
            id: 5,
            url: 'video_url',
            img: process.env.PUBLIC_URL+'/images/video_img.png',
            profile: process.env.PUBLIC_URL+'/images/video_profile.png',
            title: '루루가 디디에게 덤볐어요!',
            name: '크림히어로즈',
            view: '150만',
            time: '8개월 전'
        },
        {
            id: 6,
            url: 'video_url',
            img: process.env.PUBLIC_URL+'/images/video_img.png',
            profile: process.env.PUBLIC_URL+'/images/video_profile.png',
            title: '루루가 디디에게 덤볐어요!',
            name: '크림히어로즈',
            view: '150만',
            time: '8개월 전'
        },
        {
            id: 7,
            url: 'video_url',
            img: process.env.PUBLIC_URL+'/images/video_img.png',
            profile: process.env.PUBLIC_URL+'/images/video_profile.png',
            title: '루루가 디디에게 덤볐어요!',
            name: '크림히어로즈',
            view: '150만',
            time: '8개월 전'
        },
        {
            id: 8,
            url: 'video_url',
            img: process.env.PUBLIC_URL+'/images/video_img.png',
            profile: process.env.PUBLIC_URL+'/images/video_profile.png',
            title: '루루가 디디에게 덤볐어요!',
            name: '크림히어로즈',
            view: '150만',
            time: '8개월 전'
        },
        {
            id: 9,
            url: 'video_url',
            img: process.env.PUBLIC_URL+'/images/video_img.png',
            profile: process.env.PUBLIC_URL+'/images/video_profile.png',
            title: '루루가 디디에게 덤볐어요!',
            name: '크림히어로즈',
            view: '150만',
            time: '8개월 전'
        },
        {
            id: 10,
            url: 'video_url',
            img: process.env.PUBLIC_URL+'/images/video_img.png',
            profile: process.env.PUBLIC_URL+'/images/video_profile.png',
            title: '루루가 디디에게 덤볐어요!',
            name: '크림히어로즈',
            view: '150만',
            time: '8개월 전'
        },
        {
            id: 11,
            url: 'video_url',
            img: process.env.PUBLIC_URL+'/images/video_img.png',
            profile: process.env.PUBLIC_URL+'/images/video_profile.png',
            title: '루루가 디디에게 덤볐어요!',
            name: '크림히어로즈',
            view: '150만',
            time: '8개월 전'
        },
        {
            id: 12,
            url: 'video_url',
            img: process.env.PUBLIC_URL+'/images/video_img.png',
            profile: process.env.PUBLIC_URL+'/images/video_profile.png',
            title: '루루가 디디에게 덤볐어요!',
            name: '크림히어로즈',
            view: '150만',
            time: '8개월 전'
        },
        {
            id: 13,
            url: 'video_url',
            img: process.env.PUBLIC_URL+'/images/video_img.png',
            profile: process.env.PUBLIC_URL+'/images/video_profile.png',
            title: '루루가 디디에게 덤볐어요!',
            name: '크림히어로즈',
            view: '150만',
            time: '8개월 전'
        },
    ]
	return (
		<BrowserRouter>
			<Header />
			<div id="body_container">
				<Guide />
                <Content>
                    {
                        videos.map((item, index)=>{
                            return <Video key={videos[index].id} id={index} videos={videos}/>
                        })
                    }
                    <Link to="/">Home</Link>
                    <Switch>
                        <Route path="/" exact>
                            <h2>Home</h2>
                        </Route>
                    </Switch>
                </Content>
			</div>
		</BrowserRouter>
	)
}

export default App
