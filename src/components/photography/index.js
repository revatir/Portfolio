import React from "react"
import "./index.scss"

import { Img } from "../../helpers"
import { photo1, photo2, photo3, photo4, photo5, photo6 } from "../../assets"

const Photography = () => {
  return (
    <div id="photography" className="section-wrapper --photography">
      <section>
        <h3>Photography</h3>

        <div className="row">
          <div className="column">
            <Img src={photo1} alt="Nolita" />
            <Img src={photo4} alt="Highline" />
            <Img src={photo5} alt="Chinatown" />
          </div>

          <div className="column">
            <Img src={photo2} alt="Lower East Side" />
            <Img src={photo6} alt="East River" />
            <Img src={photo3} alt="SoHo" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Photography
