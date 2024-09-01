import React from 'react';
import { Link } from 'react-router-dom';
import FetchCSVData from '../api/fetchCSVData.js';
import BottomMenu from '../components/BottomMenu.js';
import HeroImage from '../components/HeroImage.js';
import { CiRead } from "react-icons/ci";
import SkeletonLoader from '../components/SkeletonLoader.js';
import { getIsLoading, getDataPrinciplesStore } from "../redux/dataSlice.js";
import { useSelector } from "react-redux";

const Principles = () => {
    const isLoading = useSelector(getIsLoading);
    const dataStore = useSelector(getDataPrinciplesStore);

    FetchCSVData("Principles");

    console.log("dataStore", dataStore);
    

    return (
        <div>
            <HeroImage
                image="https://hips.hearstapps.com/hmg-prod/images/types-of-doctors-1600114658.jpg?crop=1xw:0.8425829875518672xh;center,top&resize=1200:*"
                title="หลักการใช้ยา"
                subtitle="( Principles )"
            />
            <div className='container'>
                <div className='container-Disease-list' style={{marginTop: '20px'}} >
                    {isLoading ? (
                        <SkeletonLoader />
                    ) : (
                        dataStore.length > 0 ? (
                            dataStore.map((e, i) => {
                                return (
                                    <div className='card-item' key={i} >
                                        <div className='card-item-child' style={{fontSize: '18px'}}>
                                            <h4>{e?.Title}</h4>
                                        </div>
                                        <Link to={`/principles/${e?.ID}`}><CiRead className='icon-eye' /></Link>
                                    </div>
                                );
                            })
                        ) : (
                            <p>ไม่มีหลักการใช้ยา</p>
                        )
                    )}
                </div>
            </div>
            <BottomMenu />
        </div>
    );
};

export default Principles;
