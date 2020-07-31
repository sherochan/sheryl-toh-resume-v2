import React from 'react';
import '../styles/timeline.css'

export class TimeLine extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        const {
            showCurrent,
            companyName,
            headerName,
            description,
            startDate,
            endDate

        } = this.props;
        return (
            <div className="row">
                <div className="col main"> 
                    <h4>{companyName}</h4>
                    <div className="dateperiod"> {startDate} - {endDate}</div>
                </div>
                
                <div className='col right'>
                    <div className='header'>
                        <div className="middle">
                            <div className={"divider-circle" + (showCurrent ? " show" : " hide")} />
                        </div>
                        <b>{headerName}</b>
                    </div>

                    <div className='description'>
                        <p>{description} </p>
                    </div>
                    
                </div>
            </div>
        )
    }
}
