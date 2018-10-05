import './Post.scss';
import React from 'react';
import PropTypes from 'prop-types';

import { Link } from "react-router-dom";
import ArticleInfo from 'common/article-info/ArticleInfo.jsx';

import { toPreview } from 'actions';
import { connect } from 'react-redux';

const mapDispatchtoProps = (dispatch) => {
  return {
    toPreview: () => dispatch(toPreview())
  };
}

const mapStateToProps = (state) => {
  return {
    id: state.app.id,
    header: state.app.header
  };
}

@connect(mapStateToProps, mapDispatchtoProps)
export default class Post extends React.Component {
  constructor(props) {
    super(props);

    this.article = null;
    this.onClick = this.onClick.bind(this);
  }

  componentWillMount() {
    this.article = require(`../../../articles/${this.props.id}.jsx`);
  }

  onClick() {
    this.props.toPreview();
  }

  render() {
    const Article = this.article.default;

    return <React.Fragment>
      <div className="article bg-white">
        <h1>{ this.props.header }</h1>
        <Article />
        <Link to="/" onClick={this.onClick}>Назад</Link>
        <ArticleInfo article={this.props.article} />
      </div>
    </React.Fragment>;
  }
}

Post.propTypes = {
  article: PropTypes.object
}

Post.defaultProps = {
  article: {
    author: '',
    date: ''
  }
}
