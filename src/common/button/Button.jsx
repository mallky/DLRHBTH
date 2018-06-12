import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from '@fortawesome/react-fontawesome';
import utils from 'utils';
import parser from 'html-react-parser';

export default function Button ({ icon, inner, className, onClick }) {
  const _icon = icon ? <FontAwesome icon={icon} /> : null;
  const _inner = inner ? parser(inner) : null;

  return (<button
    className={className}
    onClick={onClick}>
    {_icon}
    {_inner}
  </button>);
}

Button.defaultProps = {
  icon: null,
  inner: null,
  className: 'round-button',
  onClick: () => {}
};

Button.propTypes = {
  onClick: PropTypes.func,
  icon: PropTypes.any,
  inner: PropTypes.any,
  className: PropTypes.string
};
