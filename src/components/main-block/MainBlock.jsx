import './MainBlock.scss';
import React from 'react';
import PostPreview from '../post-preview/PostPreview.jsx';
import Post from '../post/Post.jsx';
import { connect } from 'react-redux';


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
  _renderPreview() {
    return this.props.articles.map((item, i) => <PostPreview key={`preview-${i}`} article={item} />) 
  }

  _renderPost() {
    return <Post article={this.props.articles.find(item => item.id === this.props.id)} />
  }

  render() {
    return <div className="main-block">
      <h1>{ this.props.header }</h1>
      {this.props.isPreview ? this._renderPreview() : this._renderPost()}
    </div>;
  }
}
