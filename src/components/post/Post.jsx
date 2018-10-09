import './Post.scss';
import React from 'react';
import PropTypes from 'prop-types';

import { Link } from "react-router-dom";
import ArticleInfo from 'common/article-info/ArticleInfo.jsx';
import utils from 'utils';

export default class Post extends React.Component {
  constructor(props) {
    super(props);

    this.article = null;
  }

  componentWillMount() {
    this.article = require(`../../../articles/${this.props.match.match.params.id}.jsx`);
  }

  render() {
    const Article = this.article.default;

    return <React.Fragment>
      <div className="article bg-white">
        <h1>{ this.props.article.header }</h1>
        <Article />
        <Link to="/" onClick={utils.scrollElemToTop.bind(null, '.main-block')} >Назад</Link>
        <ArticleInfo article={this.props.article} />
      </div>
    </React.Fragment>;
  }
}

Post.propTypes = {
  article: PropTypes.object,
  match: PropTypes.object.isRequired
}

Post.defaultProps = {
  article: {
    author: '',
    date: ''
  }
}
