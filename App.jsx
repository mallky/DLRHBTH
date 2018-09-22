import './App.scss';
import React from 'react';
import MainBlock from 'components/main-block/MainBlock.jsx';
import SideBlock from 'components/side-block/SideBlock.jsx';
import articles from './articles/articles.json';
import { connect } from 'react-redux';
import { addContent } from 'actions';

const mapDispatchToProps = (dispatch) => {
  return {
    addContent: (articles) => dispatch(addContent(articles))
  };
}

@connect(null, mapDispatchToProps)
export default class App extends React.Component {
  componentWillMount() {
    this.props.addContent(articles.articles);
  }

  render() {
    return <React.Fragment>
      <SideBlock />
      <MainBlock />
    </React.Fragment>;
  }
}
