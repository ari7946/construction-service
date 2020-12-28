import React from 'react';
import { Link } from 'gatsby';
import buttonStyles from './block-button.module.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons"

const BlockButton = props => {
  return (
    <Link
      to={props.location}
      className={buttonStyles.buttonContainer}
    >
      <span className={buttonStyles.buttonText}>
        {props.text}
        {' '}<FontAwesomeIcon icon={faAngleDoubleRight}/>
      </span>
    </Link>
  )
}

export default BlockButton;