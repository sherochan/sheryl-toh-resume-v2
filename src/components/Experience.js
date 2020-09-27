import React from 'react';
import '../styles/page.css'
import {TimeLine} from './TimeLine.js'
import {pageConstants} from '../constants/pageConstants.js'
// import ReactGA from 'react-ga'

// const trackingId = 'UA-131338203-2'
// ReactGA.initialize(trackingId);


const EXPERIENCES = pageConstants.EXPERIENCE


export class ExperiencePage extends React.Component{
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div>

                <div className="sub-page">
                    {
                        EXPERIENCES.map( experience =>
                            <TimeLine
                            showCurrent={experience.CURRENT}
                            companyName={experience.COMPANY}
                            headerName={experience.ROLE}
                            description={experience.DESCRIPTION}
                            startDate={experience.STARTDATE}
                            endDate={experience.ENDDATE}
                            />
                            )
                    }
                </div>
            </div>
        )
    }
}