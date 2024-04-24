import React from 'react';
import PropTypes from 'prop-types';
// import { FaGithub, FaTwitter } from 'react-icons/fa';
import '../assets/css/Button.css'; // Import custom styles for the Button component

function Button({ type, text, icon }) {
  let buttonClass = 'button';

  if (type === 'outline') {
    buttonClass += ' outline';
  } else if (type === 'text-icon') {
    buttonClass += ' text-icon';
  }

  return (
    <button type="button" className={buttonClass}>
      <span className="text">{text}</span>
      {icon && <span className="icon">{icon}</span>}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.oneOf(['default', 'outline', 'text-icon']).isRequired, // Validate the type prop
  text: PropTypes.string.isRequired, // Validate the text prop
  icon: PropTypes.element, // Validate the icon prop (optional)
};

Button.defaultProps = {
  icon: null, // Set a default value of null for the icon prop
};

export default Button;
