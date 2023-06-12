import React from "react";
import {Link} from "react-router-dom";

const Home = () => {
    const linkStyle = {
        margin: "1rem",
        textDecoration: "none",
        color: 'black',
        display:'inline-block'
    };

    return (
        <div >

            <p>Welcome to Question Bank</p>
            <p><Link className={linkStyle} to="/ict">Internet và Elearning</Link></p>
            <p><Link className={linkStyle} to="/psd">Phát triển bản thân</Link></p>
            <p><Link className={linkStyle} to="/triethoc">Triết học</Link></p>
        </div>
    );
};
export default (Home);
