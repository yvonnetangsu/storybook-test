import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

/**
 * Primary UI component for user interaction
 */
export const Button = ({ variant, backgroundColor, big, label, ...props }) => {
  const mode = (variant === "primary") ? "su-button" : `su-button su-button--${variant}`;
  const buttonSize = big ? "su-button--big" : "";
  const bgColor = (backgroundColor !== "none" && backgroundColor) ? `su-bg-${backgroundColor}` : "";
  return (
    <button
      type="button"
      className={[mode, buttonSize, bgColor].join(' ')}
      /* style={backgroundColor && { backgroundColor }} */
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  big: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.oneOf(['none', 'cardinal-red', 'olive', 'palo-alto-dark']),
  /**
   * How large should the button be?
   */
  variant: PropTypes.oneOf(['primary', 'secondary']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  big: false,
  variant: 'primary',
  onClick: undefined,
};
