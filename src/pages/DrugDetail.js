import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import FetchCSVData from '../api/fetchCSVData.js';
import { getFileIdFromUrl } from '../util/getFileIdFromUrl.js';
import { getImageUrlFromDriveId } from '../util/getImageUrlFromDriveId.js';

const DrugDetail = () => {
    const { id } = useParams();
    console.log("id", id);

    // Fetch drug data
    const drugsData = FetchCSVData("Drug");
    console.log("Fetched drug data:", drugsData);

    const drugDataById = drugsData.find((e) => e?.ID === id);
    console.log("Filtered drug data by ID:", drugDataById);
    
    
    const fileId = getFileIdFromUrl(drugDataById?.ImageLink);
    const imageUrl = getImageUrlFromDriveId(fileId);
    // Handle cases where data is not found

    return (
        <div className='container'>
            <h3>{drugDataById?.DrugName}</h3>
            <p>{drugDataById?.Indications}</p>
            <p>{drugDataById?.MechanismOfAction}</p>
            <p>{drugDataById?.SideEffects}</p>
            {/* Display the image with the transformed URL */}
            {imageUrl ? (
                <img
                    style={{ maxWidth: '100%', height: 'auto' }}
                    src={imageUrl}
                    alt={drugDataById?.DrugName}
                />
            ) : (
                <p>No image available</p>
            )}
        </div>
    );
};

export default DrugDetail;
