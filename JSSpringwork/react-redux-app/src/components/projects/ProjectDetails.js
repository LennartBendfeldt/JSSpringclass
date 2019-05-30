import React from 'react';

const ProjectDetails = (props) => {
    const id = props.match.params.id;
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id}</span>
                    <p>Lorem Ipsum laskjdflkajsd faslkdjf lkajsdlkf alksd fklas dkl;fj alk;d flkas dlfk aslk;dfj lak dflk</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by LB</div>
                    <div>4/20</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails;
