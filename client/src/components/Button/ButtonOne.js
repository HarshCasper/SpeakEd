import React from "react";
import "./ButtonOne.css";

export default function Button({ text, className, href, newTab }) {
  return (
    <div className="button">
    <div className="overlap-group">
        <div className="field poppins-bold-white-14px">
            <div className = {className}>

            <a className="main-button"    href={href} 
            target={newTab && "_blank"}
            >

            {text}
            </a>
            </div>
        </div>
        </div>
  </div>
  );
}
