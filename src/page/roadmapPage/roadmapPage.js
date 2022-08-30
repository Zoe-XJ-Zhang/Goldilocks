import React, { useContext, useEffect, useState } from 'react';
import roadmap from '../../data/roadmap-cut.png'

const RoadmapPage = () => {
    return (
        <div>
            <img className="roadmapImg" src={roadmap} alt="roadmapImg" width="100%"></img>
        </div>
    );
};

export default RoadmapPage;