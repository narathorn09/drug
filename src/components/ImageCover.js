import React from 'react';
import { CiCircleChevLeft } from "react-icons/ci";

const ImageCover = ({ image }) => {
    const backgroundImage = image !== "" ? `url(${image})` : `uri('assets/drug_default.png')`;

    const handleGoBack = () => {
        window.history.back(); // This function will navigate the user back to the previous page
    };

    return (
        <section className="image-cover" style={{ backgroundImage }}>
            <button className="go-back-button" onClick={handleGoBack}>
            <CiCircleChevLeft className="go-back-icon" /> 
            <p>ย้อนกลับ</p> 
            </button>
        </section>
    );
};

export default ImageCover;
