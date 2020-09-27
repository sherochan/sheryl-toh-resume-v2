import React from 'react';
import '../styles/page.css'
import { FaLeaf} from "react-icons/fa"


export class NumExperience extends React.Component{
    constructor(props) {
        super(props);
    }

    createLeafs = () => {
        const {
            nYears
          } = this.props;
        let leaves = []
        for (let i = 0; i < nYears ; i++) {
            leaves.push(<FaLeaf size={15} color={"green"}/>)
        }
        return leaves
    }

    render() {
        const {
            skillName,
            yearsActive,
            skillsDescription
        } = this.props;
        return (
            <div className={"icon-container"}>
                <p>
                    
                    <div className={"leaf-icon-container"}>
                        <strong>{skillName} &nbsp;</strong>
                        {this.createLeafs()}
                    </div>
                    <div className={"years-active-container"}>
                        <i> {yearsActive}</i>
                    </div>
                </p>
                <p className={"skill-description-container"}>
                    {skillsDescription}
                    
                </p>

            </div>


        )

    }

}