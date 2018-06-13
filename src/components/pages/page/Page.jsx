import './Page.scss';
import React from 'react';
import PropTypes from 'prop-types';
import parser from 'html-react-parser';
import { connect } from 'react-redux';
import { addToPages } from 'actions';
import down from '@fortawesome/fontawesome-free-solid/faChevronDown';
import Button from 'common/button/Button.jsx';
import Block from 'common/block/Block.jsx';

import utils from 'utils';

const mapStateToProps = (state) => ({
  header: state.app.header,
  footer: state.app.footer,
  images: state.data.content.images,
  steps: state.data.content.steps,
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

  get lastPage() {
    const { num, pages } = this.props;

    return num === pages.length - 1;
  }

  toBot() {
    const { num, pages, footer, header } = this.props;
    const _num = this.lastPage ? num : num + 1;
    const nextItem = this.lastPage ? footer : pages[_num];
    const shift = header.getBoundingClientRect().height;

    utils.scrollTo(nextItem, { shift });
  }

  renderInstruction() {
    return this.props.steps && this.props.steps.map((step, i) => {
      return <Block inner={step} className='step' key={`step-${i}`} onClick={false} />
    });
  }

  renderImages() {
    return this.props.images && this.props.images.map((img, i) => {
      return <Block img={img} key={i} inner={img.inner} />
    });
  }

  render() {
    return <div className={`page page-${this.props.num}`} ref={this.setPage} >
      {parser(this.props.page)}
      {this.props.num === 1 && <div className="instruction">{ this.renderInstruction() }</div>}
      {this.props.num === 2 && <div className="block-with-blocks">{ this.renderImages() }</div>}
      {!this.lastPage && <Button icon={down} onClick={this.toBot.bind(this)} className='round-button bot-center' />}
    </div>;
  }
}

Page.propTypes = {
  page: PropTypes.string.isRequired,
  num: PropTypes.number.isRequired
}
