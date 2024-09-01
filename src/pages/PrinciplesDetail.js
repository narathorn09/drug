import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BottomMenu from '../components/BottomMenu.js';
import { getDataPrinciplesStore } from "../redux/dataSlice.js";
import { useSelector } from "react-redux";
import DisplayText from '../components/DisplayText.js';
import ImageCoverBG from '../components/ImageCoverBG.js';

const PrinciplesDetail = () => {
    const { id } = useParams();
    const dataStore = useSelector(getDataPrinciplesStore);
    const dataByID = dataStore.find((e) => e?.ID === id);

    return (
        <div>
            <ImageCoverBG title={dataByID?.Title} />
            <div className='container'>
                <div className='card-detail-container' >
                    <div>
                        <p className='title-item'>ความหมาย</p>
                        <DisplayText text={dataByID?.Meaning} />
                    </div>
                    <div>
                        <p className='title-item'>ตัวอย่าง</p>
                        <DisplayText text={dataByID?.Example} />
                    </div>
                </div>
            </div>
            <BottomMenu />
        </div>
    );
};

export default PrinciplesDetail;
