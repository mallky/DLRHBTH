import './Page.scss';
import React from 'react';
import PropTypes from 'prop-types';
import parser from 'html-react-parser';

export default class Page extends React.Component {
  render() {
    return parser(this.props.page);
  }
}

Page.propTypes = {
  page: PropTypes.string.isRequired
}
