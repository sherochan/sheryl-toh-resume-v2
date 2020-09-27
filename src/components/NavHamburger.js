import React from 'react';
import "../styles/layout.css";

export class NavHamburger extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        const {
            handleOnClick,
            isHamburgerClick
        } = this.props;

        return (
            <div>
                { isHamburgerClick ? <a className={"nav-icon-cross"} onClick= {handleOnClick}></a> : <a className={"nav-icon" }onClick= {handleOnClick}>&#9776;</a>}
            </div>
            

        )
    }
}