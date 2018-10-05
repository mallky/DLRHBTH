import React from 'react';
import PropTypes from 'prop-types';

export default function ArticleInfo ({ article }) {
  return (<div className="article-info">
    <span>{ article.author }</span>
    <span>{ article.date }</span>
  </div>);
}

ArticleInfo.defaultProps = {
  article: {
    author: '',
    date: ''
  }
};

ArticleInfo.propTypes = {
  article: PropTypes.object
};
