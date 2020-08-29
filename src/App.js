import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom' 
import './App.css'
import Header from './component/Header'
import Guide from './component/Guide'
import Video from './component/Video'
import Content from './component/Content'
import Watch from './component/Watch'
import NotFoundPage from './component/NotFoundPage';

function App() {
	const videos=[
        {
            id: 0,
            url: 'HRY1jHX2YTc',
            img: process.env.PUBLIC_URL+'/images/video_img.png',
            profile: process.env.PUBLIC_URL+'/images/video_profile.png',
            title: '루루가 디디에게 덤볐어요!',
            name: '크림히어로즈',
            view: '150만',
            time: '8개월 전'
        },
        {
            id: 1,
            url: 'HRY1jHX2YTc',
            img: process.env.PUBLIC_URL+'/images/video_img.png',
            profile: process.env.PUBLIC_URL+'/images/video_profile.png',
            title: '루루가 디디에게 덤볐어요!',
            name: '크림히어로즈',
            view: '150만',
            time: '8개월 전'
        },
        {
            id: 2,
            url: 'HRY1jHX2YTc',
            img: process.env.PUBLIC_URL+'/images/video_img.png',
            profile: process.env.PUBLIC_URL+'/images/video_profile.png',
            title: '루루가 디디에게 덤볐어요!',
            name: '크림히어로즈',
            view: '150만',
            time: '8개월 전'
        },
        {
            id: 3,
            url: 'HRY1jHX2YTc',
            img: process.env.PUBLIC_URL+'/images/video_img.png',
            profile: process.env.PUBLIC_URL+'/images/video_profile.png',
            title: '루루가 디디에게 덤볐어요!',
            name: '크림히어로즈',
            view: '150만',
            time: '8개월 전'
        },
        {
            id: 4,
            url: 'HRY1jHX2YTc',
            img: process.env.PUBLIC_URL+'/images/video_img.png',
            profile: process.env.PUBLIC_URL+'/images/video_profile.png',
            title: '루루가 디디에게 덤볐어요!',
            name: '크림히어로즈',
            view: '150만',
            time: '8개월 전'
        },
        {
            id: 5,
            url: 'HRY1jHX2YTc',
            img: process.env.PUBLIC_URL+'/images/video_img.png',
            profile: process.env.PUBLIC_URL+'/images/video_profile.png',
            title: '루루가 디디에게 덤볐어요!',
            name: '크림히어로즈',
            view: '150만',
            time: '8개월 전'
        },
        {
            id: 6,
            url: 'HRY1jHX2YTc',
            img: process.env.PUBLIC_URL+'/images/video_img.png',
            profile: process.env.PUBLIC_URL+'/images/video_profile.png',
            title: '루루가 디디에게 덤볐어요!',
            name: '크림히어로즈',
            view: '150만',
            time: '8개월 전'
        },
        {
            id: 7,
            url: 'HRY1jHX2YTc',
            img: process.env.PUBLIC_URL+'/images/video_img.png',
            profile: process.env.PUBLIC_URL+'/images/video_profile.png',
            title: '루루가 디디에게 덤볐어요!',
            name: '크림히어로즈',
            view: '150만',
            time: '8개월 전'
        },
        {
            id: 8,
            url: 'HRY1jHX2YTc',
            img: process.env.PUBLIC_URL+'/images/video_img.png',
            profile: process.env.PUBLIC_URL+'/images/video_profile.png',
            title: '루루가 디디에게 덤볐어요!',
            name: '크림히어로즈',
            view: '150만',
            time: '8개월 전'
        },
        {
            id: 9,
            url: 'HRY1jHX2YTc',
            img: process.env.PUBLIC_URL+'/images/video_img.png',
            profile: process.env.PUBLIC_URL+'/images/video_profile.png',
            title: '루루가 디디에게 덤볐어요!',
            name: '크림히어로즈',
            view: '150만',
            time: '8개월 전'
        },
        {
            id: 10,
            url: 'HRY1jHX2YTc',
            img: process.env.PUBLIC_URL+'/images/video_img.png',
            profile: process.env.PUBLIC_URL+'/images/video_profile.png',
            title: '루루가 디디에게 덤볐어요!',
            name: '크림히어로즈',
            view: '150만',
            time: '8개월 전'
        },
        {
            id: 11,
            url: 'HRY1jHX2YTc',
            img: process.env.PUBLIC_URL+'/images/video_img.png',
            profile: process.env.PUBLIC_URL+'/images/video_profile.png',
            title: '루루가 디디에게 덤볐어요!',
            name: '크림히어로즈',
            view: '150만',
            time: '8개월 전'
        },
        {
            id: 12,
            url: 'HRY1jHX2YTc',
            img: process.env.PUBLIC_URL+'/images/video_img.png',
            profile: process.env.PUBLIC_URL+'/images/video_profile.png',
            title: '루루가 디디에게 덤볐어요!',
            name: '크림히어로즈',
            view: '150만',
            time: '8개월 전'
        },
        {
            id: 13,
            url: 'HRY1jHX2YTc',
            img: process.env.PUBLIC_URL+'/images/video_img.png',
            profile: process.env.PUBLIC_URL+'/images/video_profile.png',
            title: '루루가 디디에게 덤볐어요!',
            name: '크림히어로즈',
            view: '150만',
            time: '8개월 전'
        },
    ]
	return (
        <>
            <Switch>
                <Route path="/" exact>
                    <Header />
                    <div id="body_container">
                        <Guide />
                        <Content>
                            {
                                videos.map((item, index)=>{
                                    return <Video key={videos[index].id} id={index} videos={videos}/>
                                })
                            }
                        </Content>
                    </div>
                </Route>
                <Route path="/trending">
                    <Header />
                    <div id="body_container">
                        <Guide />
                        <Content>
                            <h2>trending</h2>
                        </Content>
                    </div>
                </Route>
                <Route path="/watch">
                    <Header />
                    <Watch videos={videos}></Watch>
                </Route>
                <Route path="*" to="/NotFoundPage" component={NotFoundPage}/>
            </Switch>
        </>
	)
}

export default App
