import React from 'react';
import { Link } from 'gatsby';
import buttonStyles from './block-button.module.scss';

const BlockButton = props => {
  return (
    <button className={buttonStyles.buttonContainer}>
      <Link
        to={props.location}
      >
        {props.text}
      </Link>
    </button>
  )
}

export default BlockButton;