import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FetchCSVData from '../api/fetchCSVData.js';
import { getFileIdFromUrl } from '../util/getFileIdFromUrl.js';
import { getImageUrlFromDriveId } from '../util/getImageUrlFromDriveId.js';
import BottomMenu from '../components/BottomMenu.js';
import HeroImage from '../components/HeroImage.js';
import { CiRead } from "react-icons/ci";
import SkeletonLoader from '../components/SkeletonLoader.js';
import { getIsLoading, getDataDrugStore } from "../redux/dataSlice.js";
import { useSelector } from "react-redux";

const Drug = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const isLoading = useSelector(getIsLoading);
    const dataStore = useSelector(getDataDrugStore);

    FetchCSVData("Drug");

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value.toLowerCase());
    };

    const filteredDrugs = dataStore.filter((e) => {
        const drugName = e?.DrugName?.toLowerCase() || '';
        return drugName.includes(searchTerm);
    });

    const drugDataTypeCD = filteredDrugs.filter((e) => e?.Type === "CD");
    const drugDataTypeP = filteredDrugs.filter((e) => e?.Type === "P");

    return (
        <div>
            <HeroImage
                image="https://natcopharmausa.com/wp-content/uploads/2023/11/Slider-img-06-1024x683.jpg"
                title="ยา & โรค"
                subtitle=""
            />
            <div className='container'>
                <div className='search-bar'>
                    <input
                        type="text"
                        placeholder="ค้นหาชื่อยา"
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                </div>
                {searchTerm !== "" ? (
                    <div className='container-drug-list' >
                        {filteredDrugs?.map((e, i) => {
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

                                                />
                                            ) : (
                                                <img
                                                    className='img-item'
                                                    src="assets/drug_default.png"
                                                />
                                            )}
                                        </div>
                                        <h4>{e?.DrugName}</h4>
                                    </div>
                                    <Link to={`/drug/${e?.ID}`}><CiRead className='icon-eye' /></Link>
                                </div>
                            );
                        })}

                    </div>
                ) : (
                    <div className='container-drug-list'>
                        <h2>ยาโรคเรื้อรัง</h2>
                        {isLoading ? (
                            <SkeletonLoader />
                        ) : (
                            drugDataTypeCD?.map((e, i) => {
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

                                                    />
                                                ) : (
                                                    <img
                                                        className='img-item'
                                                        src="assets/drug_default.png"
                                                    />
                                                )}
                                            </div>
                                            <h4>{e?.DrugName}</h4>
                                        </div>
                                        <Link to={`/drug/${e?.ID}`}><CiRead className='icon-eye' /></Link>
                                    </div>
                                );
                            })
                        )}
                        <div className='divider' style={{ marginTop: '50px' }} ></div>
                        <h2>ยาเม็ด</h2>
                        {isLoading ? (
                            <SkeletonLoader />
                        ) : (
                            drugDataTypeP?.map((e, i) => {
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
                                                        alt={e?.DrugName}
                                                    />
                                                ) : (
                                                    <img
                                                        className='img-item'
                                                        src="assets/drug_default.png"
                                                    />
                                                )}
                                            </div>
                                            <h4>{e?.DrugName}</h4>
                                        </div>
                                        <Link to={`/drug/${e?.ID}`}><CiRead className='icon-eye' /></Link>
                                    </div>
                                );
                            })
                        )}
                    </div>)}
            </div>
            <BottomMenu />
        </div>
    );
};

export default Drug;
