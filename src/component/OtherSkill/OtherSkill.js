import React from 'react';
import data from '../../images/firebase.png'
import data2 from '../../images/github-6-xxl.png'
import data3 from '../../images/heroku.png'
import data4 from '../../images/mongo.png'
import OtherSkillDEtails from '../OtherSkillDEtails/OtherSkillDEtails';
const images=[ 
    {
    img:data
},
    {
    img:data2
},
    {
    img:data3
},
    {
    img:data4
},
]


const OtherSkill = () => {
    return (
        <div className='col-lg-12'>
            <div className="row">
                {
                    images.map(image=><OtherSkillDEtails imagesItem={image}></OtherSkillDEtails>)
                }
            </div>
        </div>
    );
};

export default OtherSkill;