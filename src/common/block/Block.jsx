import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from '@fortawesome/react-fontawesome';
import utils from 'utils';
import parser from 'html-react-parser';
import Popup from 'common/popup/Popup.jsx';

export default class Block extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isPopupVisible: false };
  }

  closePopup(e) {
    e.preventDefault();
    e.stopPropagation();

    this.setState({
      isPopupVisible: false
    });
  }

  openPopup() {
    this.setState({
      isPopupVisible: true
    });
  }

  render() {
    const { img, inner, className} = this.props;
    const _img = img ? <div className='img-wrapper'><img src={img.src} alt={img.alt || 'image'} /></div> : null;
    const _inner = inner ? <div className='inner'>{parser(inner)}</div> : null;

    return (<div className={className} onClick={this.openPopup.bind(this)}>
      {_img}
      {_inner}
      {this.props.onClick && this.state.isPopupVisible && <Popup onClick={this.closePopup.bind(this)}>{_img}{_inner}</Popup>}
    </div>);
  }
}

Block.defaultProps = {
  img: null,
  inner: null,
  className: 'common-block',
  onClick: true
};

Block.propTypes = {
  onClick: PropTypes.bool,
  img: PropTypes.any,
  inner: PropTypes.any,
  className: PropTypes.string
};
