import React from 'react';
import { Link } from 'gatsby';
import buttonStyles from './block-button.module.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons"

const BlockButton = props => {
  return (
    <button className={buttonStyles.buttonContainer}>
      <Link
        to={props.location}
      >
        {props.text}
        {' '}<FontAwesomeIcon icon={faAngleDoubleRight}/>
      </Link>
    </button>
  )
}

export default BlockButton;