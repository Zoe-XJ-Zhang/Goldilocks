import React, { useContext, useEffect, useState } from 'react';
import roadmap5 from '../../images/roadmap5.png'
import roadmap8 from '../../images/roadmap8.png'
import roadmap11 from '../../images/roadmap11.png'
import './roadmapPage.css'

const ageGroup = [3, 5, 8, 11]
const RoadmapPage = () => {
    const [roadmapAge, setRoadmapAge] = useState(3);
    const changeRoadmapInfoByAge = (e) => {
        setRoadmapAge(e)
    }

    return (
        <div>
            <div className='backgroundImg'>
                {ageGroup.map(age => <div key={age} className={`btn${age}`} onClick={() => changeRoadmapInfoByAge(age)}></div>)}
                <div className='roadmapInfoImg'>
                    <img className={roadmapAge === 5 ? "showRoadmap5" : "hideRoadmap5"} src={roadmap5} alt="roadmapImg5" />
                    <img className={roadmapAge === 8 ? "showRoadmap8" : "hideRoadmap8"} src={roadmap8} alt="roadmapImg8" />
                    <img className={roadmapAge === 11 ? "showRoadmap11" : "hideRoadmap11"} src={roadmap11} alt="roadmapImg11" />
                </div>

            </div>

        </div>

    );
};

export default RoadmapPage;