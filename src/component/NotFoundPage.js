import React from 'react'
import { Link } from 'react-router-dom';
import './NotFoundPage.css'

function NotFoundPage(){
    console.log('Not found page!')
    console.log('Go https://imki123.github.io/mytube_react/')
    return(
        <div className="notFound">
            Not Found Page
            <div className="goHome">
                <Link to="/">Go Home</Link>
            </div>
        </div>
    )
}
export default NotFoundPage