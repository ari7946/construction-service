import React from "react"
import acapulco from '../../images/acapulco.jpg'
import ave12 from "../../images/ave-12.jpg"
import chevys from "../../images/chevys.jpg"
import lasBrisas from "../../images/las-brisas.jpg"
import schoolRoof from "../../images/school-roof.jpg"
import floorReinforcement from '../../images/floor-reinforcement.jpg'
import whoSong from "../../images/whosong.jpg"
import elTorito from "../../images/el-torito.jpg"


import featuredProjectsStyles from './featured-projects.module.scss';

const featuredProjects = () => {
  return (
    <section>
      <h1>Featured Projects</h1>
      <div className={featuredProjectsStyles.featuredProjects}>
        <div>
          <img src={acapulco} alt="Acapulco restaurant" />
          <h3>Las Brisas</h3>
          <img src={schoolRoof} alt="school roof" />
          <h3>School Roof</h3>
        </div>

        <div>
          <img src={ave12} alt="Ave12" />
          <h3>Bath Remodel</h3>
          <img src={floorReinforcement} alt="floor reinforcement" />
          <h3>Floor Reinforcement</h3>
        </div>

        <div>
          <img src={chevys} alt="chevy's restaurant" />
          <h3>Chevy's</h3>
          <img src={whoSong} alt="Who Song and Larry's restaurant" />
          <h3>Who Song and Larry's</h3>
        </div>

        <div>
          <img src={lasBrisas} alt="Las Brisas restaurant" />
          <h3>Las Brisas</h3>
          <img src={elTorito} alt="El Torito Restaurant" />
          <h3>El Torito</h3>
        </div>
      </div>
    </section>
  )
}

export default featuredProjects;
