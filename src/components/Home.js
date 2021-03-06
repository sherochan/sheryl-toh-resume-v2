import React from 'react';
import '../styles/page.css'
import test_image from '../img/img_resume.png'
import {MdMailOutline} from "react-icons/md"
// import ReactGA from 'react-ga'

// const trackingId = 'UA-131338203-2'
// ReactGA.initialize(trackingId);


export class HomePage extends React.Component{
    constructor(props) {
        super(props);

    }
    render() {
        return (

                <div className={"sub-page"}>
                    <div className={"sub-page-home"}>
                    <img className={"mobile-img"} src={test_image} alt="pic"/>
                        {/* { mobileView ? <img className={"mobile-img"} src={test_image} alt="pic"/>: */
                        <div className="sub-page-home-greetings tri-right left-in"><p> Hey there, I am Sheryl Toh!</p></div>} 
                        
                        <p> I graduated from National University of Singapore in 2019 with a degree in Business Analytics. However, don't get fooled by the name! This degree actually has more to do with Data Analytics and Machine Learning rather than the business aspect. Besides working as a Machine Learning Engineer upon graduation, I am also interested in Web Development and have created this website as a pet project for me to learn React.js. </p>
                        <p> During my free time, I enjoy hiking, baking, cooking, reading novels and spending time with my loved ones. Occasionally, I enjoy going for a run or playing a game of badminton :)</p>
                        <br/>
                        <a href={"mailto:"+'sheryl_toh_152@outlook.com'}><MdMailOutline color={"grey"} size={28}/>Feel free to connect with me!</a> 

                    </div>
                </div>
                    

        )
    }
}

{/* <div className={mobileView ? "mobile-sub-page" :"sub-page"}>
<div className={mobileView ? "" :"sub-page-home"}>
    { mobileView ? <img className={"mobile-img"} src={test_image} alt="pic"/>: <div className="sub-page-home-greetings tri-right left-in"><p> Hey there, I am Sheryl Toh!</p></div>}
    
    <p> I graduated from National University of Singapore in 2019 with a degree in Business Analytics. Don't get fooled by the name! It actually has more to do with Data Analytics and Machine Learning than the business aspect. I have been working as a Machine Learning Engineer upon graduation but my other interest is on Web Development and hence i created this site as a pet project for me to learn React.js. </p>
    <p> During my free time, I enjoy hiking, baking, cooking, reading novels and spending time with my loved ones. Occasionally, I enjoy going for a run or playing a game of badminton :)</p>
    <br/>
    <p> <a href={"mailto:"+'sheryl_toh_152@outlook.com'}><MdMailOutline color={"grey"} size={28}/></a> Feel free to connect with me! </p>

</div>
</div> */}