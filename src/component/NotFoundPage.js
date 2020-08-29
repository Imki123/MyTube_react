import React from 'react'
import { Link } from 'react-router-dom';
import './NotFoundPage.css'

function NotFoundPage(){
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