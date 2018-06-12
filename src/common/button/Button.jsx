import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from '@fortawesome/react-fontawesome';
import utils from 'utils';
import parser from 'html-react-parser';

export default class Button extends React.Component {
  render() {
    const icon = this.props.icon ? <FontAwesome icon={this.props.icon} /> : null;
    const inner = this.props.inner ? parser(this.props.inner) : null;

    return (<button
      className={this.props.className}
      onClick={this.props.onClick}>
      {icon}
      {inner}
    </button>);
  }
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
