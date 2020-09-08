import React from 'react';
import './Header.scss';

const Header = (props)=>{
    return(
        <div className="header bg-gray">
            <div className="header-container">
                <div className="left-box">
                    <div className="logo">
                        <img src={require("../../Assets/Images/logo/logo.png")} alt="logo"/>
                    </div>
                    <div className="info-box">
                        <div className="client">
                            Jewlia Jones
                        </div>
                        <div className="star">
                        <img src={require("../../Assets/Images/dec/star.png")} alt="|" />
                        </div>
                        <div className="instructor">
                            Ms.Roberts
                        </div>
                    </div>
                </div>
                <div className="right-box">
                    <div className="date">
                        07-12-2020
                    </div>
                    <div className="time">
                        10:00 am - 10:30 am
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header;