import './App.scss';
import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  state
});

@connect(mapStateToProps)
export default class App extends React.Component {
  render() {
    console.log(this.props.state);

    return <div className="main-app">
      HELLO!!!
    </div>;
  }
}
