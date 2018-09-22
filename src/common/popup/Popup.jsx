import './Popup.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

export default class Popup extends React.Component {
  componentDidMount() {
    document.body.style.overflow = 'hidden';
  }

  componentWillUnmount() {
    document.body.style.overflow = 'auto';
  }

  render() {
    return ReactDOM.createPortal(
      <div className="overlay" style={{top: `${window.pageYOffset}px`}}>
        <div className="popup">
          {this.props.children}
          <div className="popup-footer">
            <button className="close" onClick={this.props.onClick}>Закрыть</button>
          </div>
        </div>
      </div>,
      document.getElementById('popup-wrapper')
    );
  }
}

Popup.defaultProps = {
  onClick: () => {}
};

Popup.propTypes = {
  onClick: PropTypes.func
};
