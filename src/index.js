import React from 'react';
import './index.css';

const Snow = ({ zIndex }) => {
    window.onload = () => {
        if (zIndex) {
            const docs = document.getElementsByClassName('winter');
            for (let i = 0; i < docs.length; i++) {
                docs.item(i).style.zIndex = zIndex;
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