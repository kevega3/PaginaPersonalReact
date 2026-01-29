import React from 'react';

interface TeamBoxProps {
    name: string;
    image: string;
    post: string;
}

const TeamBox = ({ name, image, post }: TeamBoxProps) => {
  return (
    <div className="col-lg-3 col-sm-6">
      <div className="team-box text-center">
        <div className="team-wrapper">
          <div className="team-member">
            <img
              alt={name}
              src={image}
              className="img-fluid rounded"
            />
          </div>
        </div>
        <h4 className="team-name">{name}</h4>
        <p className="text-uppercase team-designation">{post}</p>
      </div>
    </div>
  );
};
export default TeamBox;
