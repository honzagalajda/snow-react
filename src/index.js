import React from 'react';
import './index.css';

const Snow = ({ zIndex, zNear, zMid, zFar }) => {
    window.onload = () => {
        if (zIndex) {
            const docs = document.getElementsByClassName('winter');
            for (let i = 0; i < docs.length; i++) {
                docs.item(i).style.zIndex = zIndex;
            }
        }
        if (zNear) {
            const near = document.getElementsByClassName('snow--near');
            for (let i = 0; i < near.length; i++) {
                near.item(i).style.zIndex = zNear;
            }
        }
        if (zMid) {
            const mid = document.getElementsByClassName('snow--mid');
            for (let i = 0; i < mid.length; i++) {
                mid.item(i).style.zIndex = zMid;
            }
        }
        if (zFar) {
            const far = document.getElementsByClassName('snow--far');
            for (let i = 0; i < far.length; i++) {
                far.item(i).style.zIndex = zFar;
            }
        }
    }

    return (
        <div className="winter">

            <div className="snow snow--near"></div>
            <div className="snow snow--near snow--alt"></div>

            <div className="snow snow--mid"></div>
            <div className="snow snow--mid snow--alt"></div>

            <div className="snow snow--far"></div>
            <div className="snow snow--far snow--alt"></div>
        </div>
    )
}

export default Snow;