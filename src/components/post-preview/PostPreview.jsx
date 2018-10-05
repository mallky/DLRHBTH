import './PostPreview.scss';
import React from 'react';
import PropTypes from 'prop-types';

import { Link } from "react-router-dom";
import ArticleInfo from 'common/article-info/ArticleInfo.jsx';

import parser from 'html-react-parser';

export default function PostPreview ({ article }) {
  return <React.Fragment>
    <div className="article">
      <h2>{ article.header }</h2>
      { parser(article.preview) }
      <Link to={`/post/${article.id}`}>Читать полностью</Link>
      <ArticleInfo article={article} />
    </div>
  </React.Fragment>;
}

PostPreview.propTypes = {
  article: PropTypes.object.isRequired
}