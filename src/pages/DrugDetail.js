import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import FetchCSVData from '../api/fetchCSVData.js';
import { getFileIdFromUrl } from '../util/getFileIdFromUrl.js';
import { getImageUrlFromDriveId } from '../util/getImageUrlFromDriveId.js';
import ImageCover from '../components/ImageCover.js';
import { CiPill } from "react-icons/ci";
import BottomMenu from '../components/BottomMenu.js';
import { getDataDrugStore } from "../redux/dataSlice.js";
import { useSelector } from "react-redux";

const DrugDetail = () => {
    const { id } = useParams();
    const dataStore = useSelector(getDataDrugStore);
    const dataByID = dataStore.find((e) => e?.ID === id);
    const fileId = getFileIdFromUrl(dataByID?.ImageLink);
    const imageUrl = getImageUrlFromDriveId(fileId);

    return (
        <div>
            <ImageCover image={imageUrl} />
            <div className='container'>
                <div className='card-detail-container'>
                    <CiPill className='pill-icon' />
                    <h1>
                        {dataByID?.DrugName}
                    </h1>
                    <div className='divider'></div>
                    <div>
                        <p className='title-item'>ข้อบ่งใช้</p>
                        <p>{dataByID?.Indications}</p>
                    </div>
                    <div>
                        <p className='title-item'>กลไกการออกฤทธิ์</p>
                        <p>{dataByID?.MechanismOfAction}</p>
                    </div>
                    <div>
                        <p className='title-item'>ผลข้างเคียง</p>
                        <p>{dataByID?.SideEffects}</p>
                    </div>
                </div>
            </div>
            <BottomMenu />
        </div>
    );
};

export default DrugDetail;
