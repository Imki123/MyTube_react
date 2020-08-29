import React from 'react'
import {NavLink, Link} from 'react-router-dom' 

function Guide(){
    return(
    <div id="guide">
            <div className="guide_division" id="guide_1">
                <ul>
                    <NavLink to="/" exact activeClassName="li_active"><li><img alt="home_icon_red" src={process.env.PUBLIC_URL+"/images/home_icon_red.png"}/>홈</li></NavLink>
                    <NavLink to="/trending" activeClassName="li_active"><li><img alt="trending_icon_gray" src={process.env.PUBLIC_URL+"/images/trending_icon_gray.png"}/>인기</li></NavLink>
                    <li><img alt="subscribtions_icon_gray" src={process.env.PUBLIC_URL+"/images/subscribtions_icon_gray.png"}/>구독</li>
                    <li><img alt="originals_icon_gray" src={process.env.PUBLIC_URL+"/images/originals_icon_gray.png"}/>Originals</li>
                </ul>
            </div>
            <div className="guide_division" id="guide_2">
                <ul>
                    <li><img alt="library_icon_gray" src={process.env.PUBLIC_URL+"/images/library_icon_gray.png"}/>보관함</li>
                    <li><img alt="history_icon_gray" src={process.env.PUBLIC_URL+"/images/history_icon_gray.png"}/>시청 기록</li>
                    <li><img alt="my_videos_icon_gray" src={process.env.PUBLIC_URL+"/images/my_videos_icon_gray.png"}/>내 동영상</li>
                    <li><img alt="purchases_icon_gray" src={process.env.PUBLIC_URL+"/images/purchases_icon_gray.png"}/>구입한 동영상</li>
                    <li><img alt="wl_icon_gray" src={process.env.PUBLIC_URL+"/images/wl_icon_gray.png"}/>나중에 볼 동영상</li>
                    <li><img alt="more_icon_gray" src={process.env.PUBLIC_URL+"/images/more_icon_gray.png"}/>더보기</li>
                </ul>
            </div>
            <div className="guide_division" id="guide_3">
                <ul>
                    <li className="no_hover">구독</li>
                    <li><img alt="subscribtions_profile" src={process.env.PUBLIC_URL+"/images/subscribtions_profile.png"}/>크림히어로즈</li>
                    <li><img alt="subscribtions_profile" src={process.env.PUBLIC_URL+"/images/subscribtions_profile.png"}/>크림히어로즈</li>
                    <li><img alt="subscribtions_profile" src={process.env.PUBLIC_URL+"/images/subscribtions_profile.png"}/>크림히어로즈</li>
                    <li><img alt="subscribtions_profile" src={process.env.PUBLIC_URL+"/images/subscribtions_profile.png"}/>크림히어로즈</li>
                    <li><img alt="subscribtions_profile" src={process.env.PUBLIC_URL+"/images/subscribtions_profile.png"}/>크림히어로즈</li>
                    <li><img alt="subscribtions_profile" src={process.env.PUBLIC_URL+"/images/subscribtions_profile.png"}/>크림히어로즈</li>
                    <li><img alt="subscribtions_profile" src={process.env.PUBLIC_URL+"/images/more_icon_gray.png"}/>더보기</li>
                </ul>
            </div>
            <div className="guide_division" id="guide_4">
                <ul>
                    <li className="no_hover">YOUTUBE 더보기</li>
                    <li><img alt="movie_icon_gray" src={process.env.PUBLIC_URL+"/images/movie_icon_gray.png"}/>영화</li>
                    <li><img alt="movie_icon_gray" src={process.env.PUBLIC_URL+"/images/movie_icon_gray.png"}/>게임</li>
                    <li><img alt="movie_icon_gray" src={process.env.PUBLIC_URL+"/images/movie_icon_gray.png"}/>실시간</li>
                    <li><img alt="movie_icon_gray" src={process.env.PUBLIC_URL+"/images/movie_icon_gray.png"}/>학습</li>
                </ul>
            </div>
            <div className="guide_division" id="guide_5">
                <ul>
                    <li><img alt="movie_icon_gray" src={process.env.PUBLIC_URL+"/images/movie_icon_gray.png"}/>설정</li>
                    <li><img alt="movie_icon_gray" src={process.env.PUBLIC_URL+"/images/movie_icon_gray.png"}/>신고 기록</li>
                    <li><img alt="movie_icon_gray" src={process.env.PUBLIC_URL+"/images/movie_icon_gray.png"}/>고객센터</li>
                    <li><img alt="movie_icon_gray" src={process.env.PUBLIC_URL+"/images/movie_icon_gray.png"}/>의견보내기</li>
                </ul>
            </div>
            <div className="guide_division" id="guide_6">
                <Link to=''>정보</Link>
                <Link to=''>프레스</Link>
                <Link to=''>저작권</Link>
                <Link to=''>문의하기</Link>
                <Link to=''>크리에이터</Link>
                <Link to=''>광고</Link>
                <Link to=''>개발자</Link>
                <br/><br/>
                <Link to=''>이용약관</Link>
                <Link to=''>개인정보 보호</Link>
                <Link to=''>정책 및 안전</Link>
                <Link to=''>YouTube 작동의 원리</Link>
                <Link to=''>새로운 기능 테스트하기</Link>
                <br/><br/><br/>
                <div id="guide_footer">
                    © 2020 imki123<br/>
                    회사명: imki123<br/>
                    CEO: Kiyoung Im<br/>
                    주소: Daejeon, ROK.<br/>
                    전화: +8210-0000-0000<br/>
                </div>
            </div>
        </div>
    )
}

export default Guide