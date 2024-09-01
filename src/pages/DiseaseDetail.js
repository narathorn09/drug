import React from 'react';
import { useParams } from 'react-router-dom';
import { getFileIdFromUrl } from '../util/getFileIdFromUrl.js';
import { getImageUrlFromDriveId } from '../util/getImageUrlFromDriveId.js';
import ImageCover from '../components/ImageCover.js';
import { CiVirus } from "react-icons/ci";
import BottomMenu from '../components/BottomMenu.js';
import { getDataDiseaseStore } from "../redux/dataSlice.js";
import { useSelector } from "react-redux";
import DisplayText from '../components/DisplayText.js';

const DiseaseDetail = () => {
    const { id } = useParams();
    const dataStore = useSelector(getDataDiseaseStore);
    const dataByID = dataStore.find((e) => e?.ID === id);
    const fileId = getFileIdFromUrl(dataByID?.ImageLink);
    const imageUrl = getImageUrlFromDriveId(fileId);

    return (
        <div>
            <ImageCover image={imageUrl} />
            <div className='container'>
                <div className='card-detail-container'>
                    <CiVirus className='pill-icon' />
                    <h1>
                        {dataByID?.DiseaseName}
                    </h1>
                    <div className='divider'></div>
                    <div>
                        <p className='title-item'>พยาธิสภาพ</p>
                        <DisplayText text={dataByID?.Pathology} />
                    </div>
                    <div>
                        <p className='title-item'>สาเหตุ</p>
                        <DisplayText text={dataByID?.Cause} />
                    </div>
                    <div>
                        <p className='title-item'>อาการ</p>
                        <DisplayText text={dataByID?.Symptom} />
                    </div>
                    <div>
                        <p className='title-item'>ภาวะแทรกซ้อน</p>
                        <DisplayText text={dataByID?.Complications} />
                    </div>
                    <div>
                        <p className='title-item'>การวินิจฉัย</p>
                        <DisplayText text={dataByID?.Diagnosis} />
                    </div>
                    <div>
                        <p className='title-item'>การรักษา</p>
                        <DisplayText text={dataByID?.Treatment} />
                    </div>
                </div>
            </div>
            <BottomMenu />
        </div>
    );
};

export default DiseaseDetail;
