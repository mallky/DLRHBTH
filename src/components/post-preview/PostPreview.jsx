import './PostPreview.scss';
import React from 'react';
import PropTypes from 'prop-types';

import { Link } from "react-router-dom";
import ArticleInfo from 'common/article-info/ArticleInfo.jsx';

import parser from 'html-react-parser';
import { connect } from 'react-redux';
import { toPost } from 'actions';

const mapDispatchToProps = (dispatch) => {
  return {
    toPost:(content) => dispatch(toPost(content))
  }
}

@connect(null, mapDispatchToProps)
export default class PostPreview extends React.Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.toPost({
      header: this.props.article.header,
      id: this.props.article.id
    });
  }

  render() {
    const article = this.props.article;

    return <React.Fragment>
      <div className="article">
        <h2>{ article.header }</h2>
        { parser(article.preview) }
        <Link to={`/post/${this.props.article.id}`} onClick={this.onClick}>Читать полностью</Link>
        <ArticleInfo article={this.props.article} />
      </div>
    </React.Fragment>;
  }
}

PostPreview.propTypes = {
  article: PropTypes.object.isRequired
}