import './MainBlock.scss';
import React from 'react';
import PostPreview from '../post-preview/PostPreview.jsx';
import Post from '../post/Post.jsx';
import { connect } from 'react-redux';
import { BrowserRouter , Route } from 'react-router-dom';

const mapStateToProps = (state) => {
  return {
    articles: state.data.articles,
    isPreview: state.app.isPreview,
    header: state.app.header,
    id: state.app.id
  }
}

@connect(mapStateToProps)
export default class MainBlock extends React.Component {
  _renderPreview(match) {
    return <React.Fragment>
      <h1>{ this.props.header }</h1>
      {this.props.articles.map((item, i) => <PostPreview key={`preview-${i}`} article={item} />)} 
    </React.Fragment>
  }

  _renderPost(match) {
    return <Post article={this.props.articles.find(item => item.id === this.props.id)} match={match} />
  }

  render() {
    return <BrowserRouter><div className="main-block">
      <Route path="/" exact component={(match) => this._renderPreview(match) } />
      <Route path="/post/:id" component={(match) => this._renderPost(match) } />
      
    </div></BrowserRouter>;
  }
}
