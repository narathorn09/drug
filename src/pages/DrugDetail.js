import React from 'react';
import { useParams } from 'react-router-dom';
import { getFileIdFromUrl } from '../util/getFileIdFromUrl.js';
import { getImageUrlFromDriveId } from '../util/getImageUrlFromDriveId.js';
import ImageCover from '../components/ImageCover.js';
import { CiPill } from "react-icons/ci";
import BottomMenu from '../components/BottomMenu.js';
import { getDataDrugStore } from "../redux/dataSlice.js";
import { useSelector } from "react-redux";
import DisplayText from '../components/DisplayText.js';

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
                        <DisplayText text={dataByID?.Indications} />
                    </div>
                    <div>
                        <p className='title-item'>กลไกการออกฤทธิ์</p>
                        <DisplayText text={dataByID?.MechanismOfAction} />
                    </div>
                    <div>
                        <p className='title-item'>ผลข้างเคียง</p>
                        <DisplayText text={dataByID?.SideEffects} />
                    </div>
                </div>
            </div>
            <BottomMenu />
        </div>
    );
};

export default DrugDetail;
