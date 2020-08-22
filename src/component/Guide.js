import React from 'react'

function Guide(){
    return(
    <div id="guide">
            <div className="guide_division" id="guide_1">
                <ul><li><img alt="home_icon_red" src="images/home_icon_red.png"/>홈</li>
                    <li><img alt="trending_icon_gray" src="images/trending_icon_gray.png"/>인기</li>
                    <li><img alt="subscribtions_icon_gray" src="images/subscribtions_icon_gray.png"/>구독</li>
                    <li><img alt="originals_icon_gray" src="images/originals_icon_gray.png"/>Originals</li>
                </ul>
            </div>
            <div className="guide_division" id="guide_2">
                <ul>
                    <li><img alt="library_icon_gray" src="images/library_icon_gray.png"/>보관함</li>
                    <li><img alt="history_icon_gray" src="images/history_icon_gray.png"/>시청 기록</li>
                    <li><img alt="my_videos_icon_gray" src="images/my_videos_icon_gray.png"/>내 동영상</li>
                    <li><img alt="purchases_icon_gray" src="images/purchases_icon_gray.png"/>구입한 동영상</li>
                    <li><img alt="wl_icon_gray" src="images/wl_icon_gray.png"/>나중에 볼 동영상</li>
                    <li><img alt="more_icon_gray" src="images/more_icon_gray.png"/>더보기</li>
                </ul>
            </div>
            <div className="guide_division" id="guide_3">
                <ul>
                    <li className="no_hover">구독</li>
                    <li><img alt="subscribtions_profile" src="images/subscribtions_profile.png"/>크림히어로즈</li>
                    <li><img alt="subscribtions_profile" src="images/subscribtions_profile.png"/>크림히어로즈</li>
                    <li><img alt="subscribtions_profile" src="images/subscribtions_profile.png"/>크림히어로즈</li>
                    <li><img alt="subscribtions_profile" src="images/subscribtions_profile.png"/>크림히어로즈</li>
                    <li><img alt="subscribtions_profile" src="images/subscribtions_profile.png"/>크림히어로즈</li>
                    <li><img alt="subscribtions_profile" src="images/subscribtions_profile.png"/>크림히어로즈</li>
                    <li><img alt="subscribtions_profile" src="images/more_icon_gray.png"/>더보기</li>
                </ul>
            </div>
            <div className="guide_division" id="guide_4">
                <ul>
                    <li className="no_hover">YOUTUBE 더보기</li>
                    <li><img alt="movie_icon_gray" src="images/movie_icon_gray.png"/>영화</li>
                    <li><img alt="movie_icon_gray" src="images/movie_icon_gray.png"/>게임</li>
                    <li><img alt="movie_icon_gray" src="images/movie_icon_gray.png"/>실시간</li>
                    <li><img alt="movie_icon_gray" src="images/movie_icon_gray.png"/>학습</li>
                </ul>
            </div>
            <div className="guide_division" id="guide_5">
                <ul>
                    <li><img alt="movie_icon_gray" src="images/movie_icon_gray.png"/>설정</li>
                    <li><img alt="movie_icon_gray" src="images/movie_icon_gray.png"/>신고 기록</li>
                    <li><img alt="movie_icon_gray" src="images/movie_icon_gray.png"/>고객센터</li>
                    <li><img alt="movie_icon_gray" src="images/movie_icon_gray.png"/>의견보내기</li>
                </ul>
            </div>
            <div className="guide_division" id="guide_6">
                <a>정보</a>
                <a>프레스</a>
                <a>저작권</a>
                <a>문의하기</a>
                <a>크리에이터</a>
                <a>광고</a>
                <a>개발자</a>
                <br/><br/>
                <a>이용약관</a>
                <a>개인정보 보호</a>
                <a>정책 및 안전</a>
                <a>YouTube 작동의 원리</a>
                <a>새로운 기능 테스트하기</a>
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