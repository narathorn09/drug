import React, { useState } from 'react';
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
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXtjOlnBtfSdRbyuqxz4SycAdZTUkr9Obe6w&s"
                title="ยา"
                subtitle="( Drug )"
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
                    <div className='container-drug-list'>
                        {filteredDrugs.length > 0 ? (
                            filteredDrugs.map((e, i) => {
                                const fileId = getFileIdFromUrl(e?.ImageLink);
                                const imageUrl = getImageUrlFromDriveId(fileId);

                                return (
                                    <div className='card-item' key={i}>
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
                                                        alt="Default"
                                                    />
                                                )}
                                            </div>
                                            <h4>{e?.DrugName}</h4>
                                        </div>
                                        <Link to={`/drug/${e?.ID}`}><CiRead className='icon-eye' /></Link>
                                    </div>
                                );
                            })
                        ) : (
                            <p>ไม่พบยาที่ค้นหา</p>
                        )}
                    </div>
                ) : (
                    <div className='container-drug-list'>
                        <h2>ยาโรคเรื้อรัง</h2>
                        {isLoading ? (
                            <SkeletonLoader />
                        ) : (
                            drugDataTypeCD.length > 0 ? (
                                drugDataTypeCD.map((e, i) => {
                                    const fileId = getFileIdFromUrl(e?.ImageLink);
                                    const imageUrl = getImageUrlFromDriveId(fileId);

                                    return (
                                        <div className='card-item' key={i}>
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
                                                            alt="Default"
                                                        />
                                                    )}
                                                </div>
                                                <h4>{e?.DrugName}</h4>
                                            </div>
                                            <Link to={`/drug/${e?.ID}`}><CiRead className='icon-eye' /></Link>
                                        </div>
                                    );
                                })
                            ) : (
                                <p>No chronic disease drugs available</p>
                            )
                        )}
                        <div className='divider' style={{ marginTop: '50px' }}></div>
                        <h2>ยาเม็ด</h2>
                        {isLoading ? (
                            <SkeletonLoader />
                        ) : (
                            drugDataTypeP.length > 0 ? (
                                drugDataTypeP.map((e, i) => {
                                    const fileId = getFileIdFromUrl(e?.ImageLink);
                                    const imageUrl = getImageUrlFromDriveId(fileId);

                                    return (
                                        <div className='card-item' key={i}>
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
                                                            alt="Default"
                                                        />
                                                    )}
                                                </div>
                                                <h4>{e?.DrugName}</h4>
                                            </div>
                                            <Link to={`/drug/${e?.ID}`}><CiRead className='icon-eye' /></Link>
                                        </div>
                                    );
                                })
                            ) : (
                                <p>No tablet drugs available</p>
                            )
                        )}
                    </div>
                )}
            </div>
            <BottomMenu />
        </div>
    );
};

export default Drug;
