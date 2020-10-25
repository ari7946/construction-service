import React from "react"
import acapulco from '../../images/acapulco1.jpg'
import ave12 from "../../images/ave-121.jpg"
import chevys from "../../images/chevys1.jpg"
import lasBrisas from "../../images/las-brisas1.jpg"
import schoolRoof from "../../images/school-roof1.jpg"
import floorReinforcement from '../../images/floor-reinforcement1.jpg'
import whoSong from "../../images/whosong1.jpg"
import elTorito from "../../images/el-torito1.jpg"


import featuredProjectsStyles from './featured-projects.module.scss';

const FeaturedProjects = () => {
  return (
    <section>
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

export default FeaturedProjects;
