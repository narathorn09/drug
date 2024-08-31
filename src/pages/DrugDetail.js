import React from 'react';
import FetchCSVData from '../api/fetchCSVData.js';
import { getFileIdFromUrl } from '../util/getFileIdFromUrl.js';
import { getImageUrlFromDriveId } from '../util/getImageUrlFromDriveId.js';

const DrugDetail = ({ID}) => {
    // Fetch drug data
    const drugDataTypeCD = FetchCSVData("Drug").find((e) => e?.ID === ID);


    return (
        <div className='container'>

        </div>
    );
};

export default DrugDetail;
