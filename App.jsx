import './App.scss';
import React from 'react';
import { connect } from 'react-redux';

import { addContent } from 'actions';
import pages from './pages.json';

import Header from 'components/header/Header.jsx';
import Footer from 'components/footer/Footer.jsx';
import Pages from 'components/pages/Pages.jsx';
import top from '@fortawesome/fontawesome-free-solid/faChevronUp';
import Button from 'common/button/Button.jsx';
import utils from 'utils';

const mapStateToProps = (state) => ({
  header: state.app.header
});

const mapDispatchToProps = (dispatch) => ({
  addContent: (content) => dispatch(addContent(content)) 
});

@connect(mapStateToProps, mapDispatchToProps)
export default class App extends React.Component {
  componentDidMount() {
    this.props.addContent(pages);
  }

  toTop(e) {
    utils.scrollTo(this.props.header, { shift: 0, direction: 1 });
  }

  render() {
    return <div className="main-app">
      <Header />
      <Pages />
      <Footer />
      <Button icon={top} onClick={this.toTop.bind(this)} className='round-button to-top' />
    </div>;
  }
}
