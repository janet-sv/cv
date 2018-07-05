import React from 'react';
import PropTypes from 'prop-types';
import './styles.scssm';

const propTypes = {
  image: PropTypes.string.isRequired,
};

const Photo = ({
  image,
}) => (
  <div styleName="photo">
    <div
      styleName="wrapper"
      style={{ backgroundImage: `url(${image})`}}
    />
  </div>
);

Photo.propTypes = propTypes;

export default Photo;