import React from 'react';
import './index.css';

const Snow = ({ zIndex, zNear, zMid, zFar, nearSpeed, midSpeed, farSpeed }) => {
    const setSpeed = () => {
        //Near speed
        const near = document.getElementsByClassName('snow--near');
        const nearAlt = document.getElementsByClassName('snow--near--alt');
        const nearTime = (document.body.clientHeight * 2) / (21.6 * nearSpeed);
        const nearDelay = nearTime / 2;
        for (let i = 0; i < near.length; i++) {
            near.item(i).style.animationDuration = nearTime + 's';
        }
        for (let i = 0; i < nearAlt.length; i++) {
            nearAlt.item(i).style.animationDelay = nearDelay + 's';
        }
        //Mid speed
        const mid = document.getElementsByClassName('snow--mid');
        const midAlt = document.getElementsByClassName('snow--mid--alt');
        const midTime = (document.body.clientHeight * 2) / (10.8 * midSpeed);
        const midDelay = midTime / 2;
        for (let i = 0; i < mid.length; i++) {
            mid.item(i).style.animationDuration = midTime + 's';
        }
        for (let i = 0; i < midAlt.length; i++) {
            midAlt.item(i).style.animationDelay = midDelay + 's';
        }
        //Far speed
        const far = document.getElementsByClassName('snow--far');
        const farAlt = document.getElementsByClassName('snow--far--alt');
        const farTime = (document.body.clientHeight * 2) / (7.2 * farSpeed);
        const farDelay = farTime / 2;
        for (let i = 0; i < far.length; i++) {
            far.item(i).style.animationDuration = farTime + 's';
        }
        for (let i = 0; i < farAlt.length; i++) {
            farAlt.item(i).style.animationDelay = farDelay + 's';
        }
    }

    window.onload = () => {
        //Set winter height
        const winters = document.getElementsByClassName('winter');
        for (let i = 0; i < winters.length; i++) {
            winters.item(i).style.height = document.body.clientHeight + 'px';
        }
        //Set constant speed

        if (!nearSpeed) {
            nearSpeed = 10;
        }
        if (!midSpeed) {
            midSpeed = 10;
        }
        if (!farSpeed) {
            farSpeed = 10;
        }

        setSpeed();
        //Set z-index
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
            <div className="snow snow--near snow--near--alt"></div>

            <div className="snow snow--mid"></div>
            <div className="snow snow--mid snow--mid--alt"></div>

            <div className="snow snow--far"></div>
            <div className="snow snow--far snow--far--alt"></div>
        </div>
    )
}

export default Snow;