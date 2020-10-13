import React from 'react';
import victor from '../../images/Victor_Lopez.jpg'
import carlos from '../../images/Carlos_Salazar.jpg'

import personnelStyles from './personnel.module.scss';

const Personnel = () => {
  return (
    <section className={personnelStyles.personnel}>
      <div className={personnelStyles.person}>
        <img src={carlos} alt="CARLOS SALAZAR" />
        <h4>CARLOS SALAZAR</h4>
        <h5>New Projects Manager</h5>
        <p className={personnelStyles.description}>
          Carlos has 6 years of experience in wood framing, demo, drywall,
          concrete work, painting, tile work and estimating.
        </p>
      </div>

      <div className={personnelStyles.person}>
        <img src={victor} alt="VICTOR LOPEZ" />
        <h4>VICTOR LOPEZ</h4>
        <h5>General Projects Manager</h5>
        <p className={personnelStyles.description}>
          Victor has 16 years of experience in metal and wood framing, drywall,
          concrete work, demo, painting, plumbing and project management.
        </p>
      </div>
    </section>
  )
}

export default Personnel;