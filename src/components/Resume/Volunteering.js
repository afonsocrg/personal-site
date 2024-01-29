import React from 'react';
import PropTypes from 'prop-types';
import VolunteeringExperience from './Volunteering/VolunteeringExperience';

const Volunteering = ({ data }) => (
  <div className="experience">
    <div className="link-to" id="volunteering" />
    <div className="title">
      <h3>Volunteering</h3>
    </div>
    {data.map((volExp) => (
      <div key={`${volExp.organization}-${volExp.position}`}>
        <VolunteeringExperience data={volExp} />
        <br />
      </div>
    ))}
  </div>
);

Volunteering.propTypes = {
  data: PropTypes.arrayOf(PropTypes.exact({
    organization: PropTypes.string,
    position: PropTypes.string,
    url: PropTypes.string,
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    highlights: PropTypes.arrayOf(PropTypes.string),
    summary: PropTypes.string,
  })),
};

Volunteering.defaultProps = {
  data: [],
};

export default Volunteering;
