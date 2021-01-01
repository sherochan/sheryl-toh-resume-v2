import React from 'react';
import '../styles/page.css'
import { NumExperience } from "./NumExperience.js"
// import ReactGA from 'react-ga'

// const trackingId = 'UA-131338203-2'
// ReactGA.initialize(trackingId);

function NewlineText(props) {
    const text = props.text;
    return text.split('\n').map(str => <p>{str}</p>);
  }

export class SkillsPage extends React.Component{
    constructor(props) {
        super(props);

    }
    render() {

        return (
            <div>
                <div className={"sub-page"}>
                    <div className={"icons-container"}>
                        <NumExperience 
                                skillName={"Python"} 
                                yearsActive={"2015 - "}
                                nYears={0}
                                skillsDescription={"Experience in using various machine learning (ML) libraries, as well as being familiar with using Python as a backend language for building API endpoints and for Database connections in order to productionize ML pipelines."}
                        />

                        <NumExperience 
                            skillName={"Amazon Web Services (AWS)"} 
                            yearsActive={"2019 - "}
                            nYears={0}
                            skillsDescription={<NewlineText text={'Experience in using AWS such as S3, ECR, EC2 for ML pipelines during deployment.\nAWS Certified Cloud Practitioner & AWS Certified Solutions Architect - Associate'} />}
                            // {'Experience in using AWS such as S3, ECR, EC2 for ML pipelines during deployment.\nAWS Certified Cloud Practitioner and AWS Certified Solutions Architect (Associate).'}
                        />

                        <NumExperience 
                            skillName={"Git"} 
                            yearsActive={"2019 - "}
                            nYears={0}
                            skillsDescription={"Familiar with using Git for version control and collaboration between team members."}
                        />

                        <NumExperience 
                                skillName={"Docker"} 
                                yearsActive={"2019 - "}
                                nYears={0}
                                skillsDescription={"Familiar with using Docker to containerize ML pipelines for better integration with other services."}
                        />
            
                        <NumExperience 
                            skillName={"React"} 
                            yearsActive={"2019 - "}
                            nYears={0}
                            skillsDescription={"Experience in using React to build the front end of a service for triggering ML pipelines."}
                        />

                        <NumExperience 
                            skillName={"R"} 
                            yearsActive={"2016 - 2018"}
                            nYears={0}
                            skillsDescription={"Exposure in using R for statistical modelling and R Shiny in building interactive web applications."}
                        />

                        <NumExperience 
                            skillName={"Java"} 
                            yearsActive={"2016 - 2017"}
                            nYears={0}
                            skillsDescription={"Enrolled in modules back in NUS School of Computing that taught Data Structure and Algorithms using Java."}
                        />
                    </div>    
                </div>  
            </div>
        )
    }
}