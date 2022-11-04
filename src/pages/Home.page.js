import React from 'react';
import { Footer } from '../components/Footer.component';
import { Link } from 'react-router-dom'

export function Home() {
    return (
        <>
            <div className="share-button">
                <img
                    src="./images/share-desktop.svg"
                    alt=""
                    className="share-desktop"
                />
                <img src="./images/share-mobile.svg" alt="" className="share-mobile" />
            </div>
            <div className="avatar-container">
                <img
                    className="avatar"
                    src="./images/Tlamz-50.jpg"
                    alt="tlamz-pic"
                    id="profile_img"
                />
                <img className="edit" src="./images/hover-img.svg" alt="" />
                <h3 id="twitter" className="twitter-name">
                    Tlamz
                </h3>
                <h3 id="slack" className="slack-name">
                    Tlamz
                </h3>
            </div>
            {/* <h3 className='my_name'>Tlamz</h3> */}
            <div className="btns-container">
                <a href="https://twitter.com/T_lamz" target="_blank" id="twitter">
                    Twitter
                </a>
                <a href="https://training.zuri.team/" target="_blank" id="btn__zuri">
                    Zuri Team
                </a>
                <a href="https://books.zuri.team/" target="_blank" id="books">
                    Zuri Books
                </a>
                <a
                    href="https://books.zuri.team/python-for-beginners?ref_id=Tlamz"
                    target="_blank"
                    id="book__python"
                >
                    Python Books
                </a>
                <a href="https://background.zuri.team" target="_blank" id="pitch">
                    Background Check for Coders
                </a>
                <a
                    href="https://books.zuri.team/design-rules"
                    target="_blank"
                    id="book__design"
                >
                    Design Books
                </a>
                <Link to="/contact" id="contact">
                    Contact Me
                </Link>
            </div>
            <div className="wrk_icons">
                <img src="./images/slack.svg" alt="" />
                <img src="./images/github.svg" alt="" />
            </div>
            <hr />
            <Footer />
        </>
    )
}