import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './styles.scssm';

class Rate extends PureComponent {
  static propTypes = {
    number: PropTypes.number.isRequired,
  };

  renderRate = (number, active = false) => {
    let circles = [];

    for (let i = 0; i< number; i++) {
      circles.push(
        <div
          key={`${active ? 'circle-active-' : 'circle-'}${i}`}
          styleName={`circle ${active ? 'is-active' : ''}`}
        />
      );
    }

    return circles;
  };

  render() {
    const {
      number,
    } = this.props;

    return (
      <div styleName="rate">
        {this.renderRate(number, true)}
        {this.renderRate(10 - number)}
      </div>
    );
  }
}

export default Rate;