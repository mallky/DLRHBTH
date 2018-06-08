import './Page.scss';
import React from 'react';
import PropTypes from 'prop-types';
import parser from 'html-react-parser';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  header: state.app.header
});

@connect(mapStateToProps)
export default class Page extends React.Component {
  toTop(e) {
    console.log(this.props.header);
  }

  render() {
    return <div className="page">
      {parser(this.props.page)}
      <button className="to-top" onClick={this.toTop.bind(this)}>top</button>
    </div>;
  }
}

Page.propTypes = {
  page: PropTypes.string.isRequired
}
