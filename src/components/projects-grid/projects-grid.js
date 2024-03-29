import React, { memo } from "react"
import gridStyles from "./projects-grid.module.scss"

const ProjectsGrid = props => {
  return (
    <div className={gridStyles.gridContainer}>
      {props.images.map(imgUrl => {
        return (
          <div className={gridStyles.gridImageContainer} key={imgUrl}>
            <img className={gridStyles.gridImage} src={imgUrl} />
          </div>
        )
      })}
    </div>
  )
}

export default memo(ProjectsGrid)
