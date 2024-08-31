import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FetchCSVData from '../api/fetchCSVData.js';
import { getFileIdFromUrl } from '../util/getFileIdFromUrl.js';
import { getImageUrlFromDriveId } from '../util/getImageUrlFromDriveId.js';
import BottomMenu from '../components/BottomMenu.js';
import HeroImage from '../components/HeroImage.js';
import { CiRead } from "react-icons/ci";
import SkeletonLoader from '../components/SkeletonLoader.js';
import { getIsLoading, getDataDiseaseStore } from "../redux/dataSlice.js";
import { useSelector } from "react-redux";

const Disease = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const isLoading = useSelector(getIsLoading);
    const dataStore = useSelector(getDataDiseaseStore);

    FetchCSVData("Disease");

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value.toLowerCase());
    };

    const filteredDiseases = dataStore.filter((e) => {
        const DiseaseName = e?.DiseaseName?.toLowerCase() || '';
        return DiseaseName.includes(searchTerm);
    });

    return (
        <div>
            <HeroImage
                image="https://www.merck.com/wp-content/uploads/sites/124/2020/02/infection-disease.jpeg?resize=666,664"
                title="โรค"
                subtitle="( Disease )"
            />
            <div className='container'>
                <div className='search-bar'>
                    <input
                        type="text"
                        placeholder="ค้นหาชื่อโรค"
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                </div>

                <div className='container-Disease-list' >
                    {isLoading ? (
                        <SkeletonLoader />
                    ) : (
                        filteredDiseases.length > 0 ? (
                            filteredDiseases.map((e, i) => {
                                const fileId = getFileIdFromUrl(e?.ImageLink);
                                const imageUrl = getImageUrlFromDriveId(fileId);

                                return (
                                    <div className='card-item' key={i} >
                                        <div className='card-item-child'>
                                            <div className='card-container-img'>
                                                {fileId ? (
                                                    <img
                                                        className='img-item'
                                                        src={imageUrl}
                                                        alt={e?.DiseaseName}
                                                    />
                                                ) : (
                                                    <img
                                                        className='img-item'
                                                        src="assets/disease_default.png"
                                                    />
                                                )}
                                            </div>
                                            <h4>{e?.DiseaseName}</h4>
                                        </div>
                                        <Link to={`/disease/${e?.ID}`}><CiRead className='icon-eye' /></Link>
                                    </div>
                                );
                            })
                        ) : (
                            <p>ไม่พบโรคที่ค้นหา</p>
                        )
                    )}
                </div>
            </div>
            <BottomMenu />
        </div>
    );
};

export default Disease;
