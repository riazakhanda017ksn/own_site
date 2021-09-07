import React from 'react';
import './OtherSkillDEtails.css'
const OtherSkillDEtails = (props) => {
    const {img}=props.imagesItem
    return (
        <div className='col-lg-3 col-md-12  py-4'>
           <div className="img-item">
               <img src={img} alt=""/>
           </div>
        </div>
    );
};

export default OtherSkillDEtails;