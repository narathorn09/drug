import React from 'react';
import { Link } from 'react-router-dom';
import FetchCSVData from '../api/fetchCSVData.js';
import { getFileIdFromUrl } from '../util/getFileIdFromUrl.js';
import { getImageUrlFromDriveId } from '../util/getImageUrlFromDriveId.js';

const Drug = () => {
    // Fetch drug data
    const drugDataTypeCD = FetchCSVData("Drug").filter((e) => e?.Type === "CD");
    const drugDataTypeP = FetchCSVData("Drug").filter((e) => e?.Type === "P");

    return (
        <div className='container'>
            <h2>ยาโรคเรื้อรัง</h2>
            {drugDataTypeCD?.map((e, i) => {
                const fileId = getFileIdFromUrl(e?.ImageLink);
                const imageUrl = getImageUrlFromDriveId(fileId);

                return (
                    <div key={i}>
                        <h3>{e?.DrugName}</h3>
                        <p>{e?.Indications}</p>
                        <p>{e?.MechanismOfAction}</p>
                        <p>{e?.SideEffects}</p>
                        {/* Display the image with the transformed URL */}
                        {fileId ? (
                            <img
                                style={{ maxWidth: '100%', height: 'auto' }}
                                src={imageUrl}
                                alt={e?.DrugName}
                            />
                        ) : (
                            <p>No image available</p>
                        )}
                        <Link to={`/drug/${e?.ID}`}>ดูรายละเอียด</Link>
                    </div>
                );
            })}
            <h2>ยาโรคเม็ด</h2>
            {drugDataTypeP?.map((e, i) => {
                const fileId = getFileIdFromUrl(e?.ImageLink);
                const imageUrl = getImageUrlFromDriveId(fileId);

                return (
                    <div key={i}>
                        <h3>{e?.DrugName}</h3>
                        <p>{e?.Indications}</p>
                        <p>{e?.MechanismOfAction}</p>
                        <p>{e?.SideEffects}</p>
                        {/* Display the image with the transformed URL */}
                        {fileId ? (
                            <img
                                style={{ maxWidth: '100%', height: 'auto' }}
                                src={imageUrl}
                                alt={e?.DrugName}
                            />
                        ) : (
                            <p>No image available</p>
                        )}
                        <Link to={`/drug/${e?.ID}`}>ดูรายละเอียด</Link>
                    </div>
                );
            })}
        </div>
    );
};

export default Drug;
