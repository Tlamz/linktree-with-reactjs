import React from "react";
import picture from "./../images/zuri.svg";
import picture2 from "./../images/I4G.svg";

export function Footer() {
    return (<footer>
            <div>
                <img src={picture} alt="Zuri" />
            </div>
            <div>
                <p>HNG Internship 9 Frontend Task</p>
            </div>
            <div>
                <img src={picture2} alt="Ingressive4Good" />
            </div>
        </footer>);
}