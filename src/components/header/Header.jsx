import './Header.scss';
import React from 'react';
import { connect } from 'react-redux';
import { setHeader } from 'actions';

import parser from 'html-react-parser';

const mapStateToProps = (state) => ({
  header: state.data.content.header
});

const mapDispatchToProps = (dispatch) => ({
  setHeader: (header) => dispatch(setHeader(header))
});

@connect(mapStateToProps, mapDispatchToProps)
export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.setHeader = this.setHeader.bind(this);
  }

  setHeader(header) {
    this.props.setHeader(header);
  }

  render() {
    const header = this.props.header ? parser(this.props.header) : '';

    return <header ref={this.setHeader}>
      { header }
    </header>
  }
}
