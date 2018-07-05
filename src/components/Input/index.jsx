import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './styles.scssm';

class Input extends PureComponent {
  static propTypes = {
    name: PropTypes.string,
    label: PropTypes.string,
    isTextArea: PropTypes.bool,
    maxLength: PropTypes.number,
  };

  static defaultProps = {
    isTextArea: false,
  };

  state = {
    value: '',
  };

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  getValue = () => (
    this.state.value
  );

  render() {
    const {
      value,
    } = this.state;

    const {
      name,
      label,
      isTextArea,
      maxLength,
    } = this.props;

    return (
      <div styleName="container">
        <label htmlFor={`input-${name}`} styleName="label">
          {label}
        </label>
        {
          !isTextArea
          ? <input
              type="text"
              id={`input-${name}`}
              name={name}
              styleName="input"
              value={value}
              onChange={this.handleChange}
            />
          : <textarea
              id={`input-${name}`}
              name={name}
              styleName="input"
              value={value}
              onChange={this.handleChange}
              maxlength={maxLength}
              rows="3"
            />
        }
      </div>
    );
  }
}

export default Input;