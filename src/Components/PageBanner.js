import React from 'react';
import data from '../Database/database.json';
import '../Styles/pagebanner.css';

const PageBanner = (props) => {
    
    let img1;
    let img2;
    let img3;
    let img4;
    let i;

    for(i=0; i<data.banners.length;i++){
        if(data.banners[i].Page == props.type){
            img1 = data.banners[i].Img1;
            img2 = data.banners[i].Img2;
            img3 = data.banners[i].Img3;
            img4 = data.banners[i].Img4;
            break;
        }
        else{
            continue;
        }
    }

    if(img1 == undefined){
        console.log("Invalid Type for PageBanner");
    }

    return(
    <div className='pagebanner'>
        <div className='imagewrapper'>
            <img src={img1} />
            <img src={img2} />
            <img src={img3} />
            <img src={img4} />
        </div>
    </div>

    )
}

export default PageBanner;