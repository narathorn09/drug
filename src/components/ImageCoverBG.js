import React from 'react';
import { CiCircleChevLeft } from "react-icons/ci";

const ImageCoverBG = ({ title,  }) => {

    const handleGoBack = () => {
        window.history.back(); // This function will navigate the user back to the previous page
    };

    return (
        <section className="hero-section" style={{ backgroundImage: `url(https://hips.hearstapps.com/hmg-prod/images/types-of-doctors-1600114658.jpg?crop=1xw:0.8425829875518672xh;center,top&resize=1200:*)` }}>
            <div className="overlay"></div>
            <div className="hero-content">
                <h1>{title}</h1>
            </div>
            <button className="go-back-button" onClick={handleGoBack}>
                <CiCircleChevLeft className="go-back-icon" />
                <p>ย้อนกลับ</p>
            </button>
        </section>
    );
};

export default ImageCoverBG;
