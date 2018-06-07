import React from 'react';
import { connect } from 'react-redux';

import Page from './page/Page.jsx';

const mapStateToProps = (state) => ({
  pages: state.data.content.pages
});

@connect(mapStateToProps)
export default class Pages extends React.Component {
  render() {
    return this.props.pages.map((page, i) => {

      return <Page key={i} page={page.content} />;
    });
  }
}