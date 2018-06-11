import './Footer.scss';
import React from 'react';
import { connect } from 'react-redux';
import parser from 'html-react-parser';
import { setFooter } from '../../../store/actions/actions.js';

const mapStateToProps = (state) => ({
  footer: state.data.content.footer
});

const mapDispatchToProps = (dispatch) => ({
  setFooter: (footer) => dispatch(setFooter(footer))
});

@connect(mapStateToProps, mapDispatchToProps)
export default class Footer extends React.Component {
  constructor(props) {
    super(props);

    this.setFooter = this.setFooter.bind(this);
  }

  setFooter(footer) {
    this.props.setFooter(footer);
  }

  render() {
    const footer = this.props.footer ? parser(this.props.footer) : '';

    return <footer ref={this.setFooter}>
      { footer }
    </footer>
  }
}
