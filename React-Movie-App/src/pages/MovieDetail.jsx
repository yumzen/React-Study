import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { IMG_BASE_URL } from '../components/Movie';



export default function MovieDetail() {
    const { title } = useParams();
    const { state } = useLocation();

    return (
        <div className='page-container'>
            <div>
                <img
                    style={{ marginLeft: "5%", width: "300px", height: "450px" }}
                    src={IMG_BASE_URL + state.poster_path}
                    alt="영화포스터이미지"
                />
                <div>
                    <div style={{ margin: '10px', marginLeft: '135px', fontsize: "50px" }}>
                        {title}
                    </div>
                </div>
            </div>
        </div >
    )
};
