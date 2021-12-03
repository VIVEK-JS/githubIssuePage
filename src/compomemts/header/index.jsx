import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/icon.png'
import './style.css'

const Header = () =>{
    return(
        <div className="header-container">
            <div className="git-repo-name-watch-star-container">
                <div className="git-repo-name">
                <img src={img}></img>
                
                <Link style={{ textDecoration: 'none' }} to="https://github.com/facebook"><span className="facebook-name">facebook</span>
                </Link>
                <span className="slash">/</span>
                <Link style={{ textDecoration: 'none'}} to="https://github.com/facebook/react"><span style={{fontWeight:600,marginRight:"8px"}} className="facebook-name">react</span>
                </Link>
                <span className="public-lable">Public</span>
                </div>
            </div>

        </div>
    )
}

export default Header;