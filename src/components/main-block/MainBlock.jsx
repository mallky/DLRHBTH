import './MainBlock.scss';
import React from 'react';
import PostPreview from '../post-preview/PostPreview.jsx';
import Post from '../post/Post.jsx';
import { connect } from 'react-redux';
import { HashRouter, Route } from 'react-router-dom';

const mapStateToProps = (state) => {
  return {
    articles: state.data.articles
  }
}

@connect(mapStateToProps)
export default class MainBlock extends React.Component {
  _renderPreview() {
    return <React.Fragment>
      <h1>Статьи:</h1>
      {this.props.articles.map((item, i) => <PostPreview key={`preview-${i}`} article={item} />)} 
    </React.Fragment>
  }

  _renderPost(match) {
    return <Post article={this.props.articles.find(item => item.id === match.match.params.id)} match={match} />
  }

  render() {
    return <div className="main-block">
      <HashRouter>
        <div>
          <Route path="/" exact component={(match) => this._renderPreview(match) } />
          <Route path="/post/:id" component={(match) => this._renderPost(match) } />
        </div>
      </HashRouter>
    </div>;
  }
}
