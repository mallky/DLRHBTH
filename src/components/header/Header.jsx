import './Header.scss';
import React from 'react';
import { connect } from 'react-redux';
import parser from 'html-react-parser';

const mapStateToProps = (state) => ({
  header: state.data.content.header
});

@connect(mapStateToProps)
export default class Header extends React.Component {
  render() {
    const header = this.props.header ? parser(this.props.header) : '';

    return <header>
      { header }
    </header>
  }
}
