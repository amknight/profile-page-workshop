import React, { Component } from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';

import './Toggle.css';

/* Button which displays the current dark mode state and toggles
 * the dark mode state when pressed.
 *
 * Props:
 *  isDarkMode (bool): Represents current dark mode state
 *  toggleDarkMode (func): Function that is called when this toggle
 *                         button is pressed
 */
class DarkModeToggle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: this.props.initialTheme
    };
  }

  options = [
    { value: 'light', label: 'Light' },
    { value: 'dark', label: 'Dark' },
    { value: 'stupid', label: 'Stupid' }
  ];

  handleChange = selectedOption => {
    this.setState({ selectedOption });
    this.props.setTheme(selectedOption.value);
  };

  render() {
    return (
      <Select
        value={this.state.selectedOption}
        onChange={this.handleChange}
        options={this.options}
        className='darkModeToggle'
      />
    );
  }
}

DarkModeToggle.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
  toggleDarkMode: PropTypes.func.isRequired
};

export default DarkModeToggle;
