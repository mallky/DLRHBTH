import './Page.scss';
import React from 'react';
import PropTypes from 'prop-types';
import parser from 'html-react-parser';
import { connect } from 'react-redux';
import FontAwesome from '@fortawesome/react-fontawesome';
import down from '@fortawesome/fontawesome-free-solid/faAngleDown';
import top from '@fortawesome/fontawesome-free-solid/faAngleUp';
import { addToPages } from '../../../../store/actions/actions.js';

import utils from 'utils';

const mapStateToProps = (state) => ({
  header: state.app.header,
  footer: state.app.footer,
  pages: state.app.pages
});

const mapDispatchToProps = (dispatch) => ({
  setPage: (page) => dispatch(addToPages(page))
});

@connect(mapStateToProps, mapDispatchToProps)
export default class Page extends React.Component {
  constructor(props) {
    super(props);

    this.page = null;
    this.setPage = this.setPage.bind(this);
  }

  setPage(page) {
    this.props.setPage(page);
  }

  toTop(e) {
    utils.scrollTo(this.props.header, 1);
  }

  toBot(e) {
    const { num, pages, footer } = this.props;
    const _num = num === pages.length - 1 ? num : num + 1;
    const nextItem = num === pages.length - 1 ? footer : pages[_num];

    utils.scrollTo(nextItem);
  }

  render() {
    return <div className="page" ref={this.setPage} >
      {parser(this.props.page)}
      <div />
      <button className="to-top" onClick={this.toTop.bind(this)}>
        <FontAwesome icon={top} />
      </button>
      <button className="to-bot" onClick={this.toBot.bind(this)}>
        <FontAwesome icon={down} />
      </button>
    </div>;
  }
}

Page.propTypes = {
  page: PropTypes.string.isRequired,
  num: PropTypes.number.isRequired
}
