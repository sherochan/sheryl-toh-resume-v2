import React from 'react';
import '../styles/page.css'
// import ReactGA from 'react-ga'

// const trackingId = 'UA-131338203-2'
// ReactGA.initialize(trackingId);


export class EducationPage extends React.Component{
    constructor(props) {
        super(props);

    }
    render() {
    
        return (
            <div>
                
                <div className={"sub-page"}>
                    <div className={"row-education"}>
                        <div className={"col-education left"}>
                            <h2>National University of Singapore</h2>
                            <h4> School of Computing</h4>
                            <p>Bachelor of Science in Business Analytics with Honours (Distinction)</p>
                        </div>
                        <div className={"col-education date"}>
                            <div><i>August 2015 - June 2019</i></div>
                        </div>

                    </div>
                    <div className={"row-education"}>
                        <div className={"col-education left"}>
                            <h2>University of Western Ontario</h2>
                            <p> Student Exchange Programme in Canada</p>
                        </div>
                        <div className={"col-education date"}>
                            <div><i>January 2018 - May 2018</i></div>
                        </div>

                    </div>
                    <div className={"row-education"}>
                        <div className={"col-education left"}>
                            <h2>Serangoon Junior College</h2>
                            <h4> Science Stream</h4>
                            <p> H2 Mathematics, Biology, Chemistry and H1 Economics</p>
                        </div>
                        <div className={"col-education date"}>
                            <div><i>January 2013 - December 2014</i></div>
                        </div>

                    </div>

                </div>

            </div>
            
            

        )
    }
}