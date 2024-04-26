import React from 'react';
import PropTypes from 'prop-types';
// import { FaGithub, FaTwitter } from 'react-icons/fa';
import '../assets/css/Button.css';

function Button({
  type, text, icon, color,
}) {
  let buttonClass = 'button';

  if (type === 'outline') {
    buttonClass += ' outline';
  } else if (type === 'text-icon') {
    buttonClass += ' text-icon';
  }

  if (color === 'white') {
    buttonClass += ' whiteoutline';
  }

  return (
    <button type="button" className={buttonClass}>
      <span className="text">{text}</span>
      {icon && <span className="icon">{icon}</span>}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.oneOf(['default', 'outline', 'text-icon']).isRequired,
  text: PropTypes.string.isRequired,
  icon: PropTypes.element,
  color: PropTypes.string,
};

Button.defaultProps = {
  icon: null,
  color: null,
};

export default Button;
