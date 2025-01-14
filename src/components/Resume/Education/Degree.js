import React from 'react';
import PropTypes from 'prop-types';

const Degree = ({ data }) => (
  <article className="degree-container">
    <header>
      <h4 className="degree">{data.degree}</h4>
      <p className="school">{data.start_year}-{data.end_year} | <a href={data.link}>{data.school}</a></p>
    </header>
  </article>
);

Degree.propTypes = {
  data: PropTypes.shape({
    degree: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    school: PropTypes.string.isRequired,
    start_year: PropTypes.number.isRequired,
    end_year: PropTypes.number.isRequired,
    grade: PropTypes.number.isRequired,
  }).isRequired,
};

export default Degree;
