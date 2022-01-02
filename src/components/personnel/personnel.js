import React from 'react';
import victor from '../../images/Victor_Lopez1.jpg'
import carlos from '../../images/Carlos_Salazar1.jpg'

import personnelStyles from './personnel.module.scss';

const Personnel = () => {
  return (
    <section className={personnelStyles.personnel}>
      <article className={personnelStyles.personCard}>
        <img src={carlos} alt="CARLOS SALAZAR" />
        <hgroup>
          <h4 className={personnelStyles.name}>CARLOS SALAZAR</h4>
          <h5 className={personnelStyles.title}>New Projects Manager</h5>
        </hgroup>
        <p className={personnelStyles.description}>
          Carlos has 6 years of experience in wood framing, demo, drywall,
          concrete work, painting, tile work and estimating.
        </p>
      </article>
       
      <article className={personnelStyles.personCard}>
        <img src={victor} alt="VICTOR LOPEZ" />
        <hgroup>
          <h4 className={personnelStyles.name}>VICTOR LOPEZ</h4>
          <h5 className={personnelStyles.title}>General Projects Manager</h5>
        </hgroup>
        <p className={personnelStyles.description}>
          Victor has 16 years of experience in metal and wood framing, drywall,
          concrete work, demo, painting, plumbing and project management.
        </p>
      </article>
    </section>
  )
}

export default Personnel;