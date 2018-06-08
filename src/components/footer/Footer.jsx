import './Footer.scss';
import React from 'react';
import { connect } from 'react-redux';
import parser from 'html-react-parser';

const mapStateToProps = (state) => ({
  footer: state.data.content.footer
});

@connect(mapStateToProps)
export default class Footer extends React.Component {
  render() {
    const footer = this.props.footer ? parser(this.props.footer) : '';

    return <footer>
      { footer }
    </footer>
  }
}
