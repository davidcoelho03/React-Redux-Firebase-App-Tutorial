import React from 'react';

const ProjectDetails = (props) => {
    const id = props.match.params.id;
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title {id} </span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquam consequuntur culpa cupiditate doloribus facilis illo ipsum iusto laudantium nisi, nulla officia quas quibusdam recusandae reprehenderit sequi voluptatem! Explicabo, quaerat?
                    </p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by The Net Ninja</div>
                    <div>2nd of Semptember, 2am</div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;