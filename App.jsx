import './App.scss';
import React from 'react';
import { connect } from 'react-redux';

import { addContent } from './store/actions/actions';
import pages from './pages.json';

import Header from './src/components/header/Header.jsx';
import Footer from './src/components/footer/Footer.jsx';
import Pages from './src/components/pages/Pages.jsx';

const mapDispatchToProps = (dispatch) => ({
  addContent: (content) => dispatch(addContent(content)) 
});

@connect(null, mapDispatchToProps)
export default class App extends React.Component {
  componentDidMount() {
    this.props.addContent(pages);
  }

  render() {
    return <div className="main-app">
      <Header />
      <Pages />
      <Footer />
    </div>;
  }
}
