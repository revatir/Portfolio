import React from 'react';
import photo1 from '../Images/photo1.JPG';
import photo2 from '../Images/photo2.JPG';
import photo3 from '../Images/photo3.JPG';
import photo4 from '../Images/photo4.JPG';
import photo5 from '../Images/photo5.JPG';
import photo6 from '../Images/photo6.JPG';

function Photography() {
  return (
    <div id="photography" className="section-wrapper">
      <section>
        <h3>Photography</h3>
        <div className="photo-wrapper row">
          <div className="column">
            <img src={photo1} alt="Nolita" />
            <img src={photo4} alt="Highline" />
            <img src={photo5} alt="Chinatown" />
          </div>
          <div className="column">
            <img src={photo2} alt="Lower East Side" />
            <img src={photo6} alt="East River" />
            <img src={photo3} alt="SoHo" />
          </div>
        </div>
      </section >
    </div >
  )
}

export default Photography