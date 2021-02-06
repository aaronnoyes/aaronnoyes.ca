import React from 'react';
import '../styles/project.css';

const Project = (props) => {
  const { image, title } = props;
  return (
    <div className="project">
      <h3>{title}</h3>
      {image && <img src={image} alt={title} />}
      {props.children}
    </div>
  );
};

export default Project;
