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
        <div className={featuredProjectsStyles.colOne}>
          <div className={featuredProjectsStyles.imgContainer}>
            <img src={acapulco} alt="Acapulco restaurant" />
            <div className={featuredProjectsStyles.title}>Las Brisas</div>
          </div>

          <div className={featuredProjectsStyles.imgContainer}>
            <img src={schoolRoof} alt="school roof" />
            <div>School Roof</div>
          </div>
        </div>

        <div className={featuredProjectsStyles.colTwo}>
          <div className={featuredProjectsStyles.imgContainer}>
            <img src={lasBrisas} alt="Las Brisas restaurant" />
            <div>Las Brisas</div>
          </div>

          <div className={featuredProjectsStyles.imgContainer}>
            <img src={floorReinforcement} alt="floor reinforcement" />
            <div>Floor Reinforcement</div>
          </div>
        </div>

        <div className={featuredProjectsStyles.colThree}>
          <div className={featuredProjectsStyles.imgContainer}>
            <img src={chevys} alt="chevy's restaurant" />
            <div>Chevy's</div>
          </div>

          <div className={featuredProjectsStyles.imgContainer}>
            <img src={whoSong} alt="Who Song and Larry's restaurant" />
            <div>Who Song and Larry's</div>
          </div>
        </div>

        <div className={featuredProjectsStyles.colFour}>
          <div className={featuredProjectsStyles.imgContainer}>
            <img src={ave12} alt="Ave12" />
            <div>Bath Remodel</div>
          </div>

          <div className={featuredProjectsStyles.imgContainer}>
            <img src={elTorito} alt="El Torito Restaurant" />
            <div>El Torito</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProjects;
