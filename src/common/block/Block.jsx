import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from '@fortawesome/react-fontawesome';
import utils from 'utils';
import parser from 'html-react-parser';

export default function Block ({ img, inner, onClick, className}) {
  const _img = img ? <img src={img.src} alt={img.alt || 'image'} /> : null;
  const _inner = inner ? <div className='inner'>{parser(inner)}</div> : null;

  return (<div className={className} onClick={onClick}>
    {_img}
    {_inner}
  </div>);
}

Block.defaultProps = {
  img: null,
  inner: null,
  className: 'common-block',
  onClick: () => {}
};

Block.propTypes = {
  onClick: PropTypes.func,
  img: PropTypes.any,
  inner: PropTypes.any,
  className: PropTypes.string
};
