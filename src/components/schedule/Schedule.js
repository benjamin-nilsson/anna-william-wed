import React from "react";
import "./Schedule.css";
import Food from "../../images/food.png";
import Church from "../../images/Church.png";
import Mingle from "../../images/Mingle.png";
import Dessert from "../../images/Dessert.png";
import Dance from "../../images/Dance.png";

function Schedule() {
  return (
    <section className="schedule">
      <h1>Schedule</h1>
      <div className="timeline"></div>

      {/* Event 1 */}
      <div className="timeline-item">
        <div className="timeline-circle"></div>
        <div className="timeline-content">
          <h3>Ceremoni</h3>
          <p>11:00</p>
          <p>Vigsel.</p>
        </div>
        <div className="timeline-image">
          <img src={Church} alt="Event 1" />
        </div>
      </div>

      {/* Event 2 */}
      <div className="timeline-item">
        <div className="timeline-circle"></div>
        <div className="timeline-image">
          <img src={Mingle} alt="Event 2" />
        </div>
        <div className="timeline-content">
          <h3>Mingel Timme</h3>
          <p>13:00</p>
          <p>Description of event 2.</p>
        </div>
      </div>

      {/* Event 3 */}
      <div className="timeline-item">
        <div className="timeline-circle"></div>
        <div className="timeline-content">
          <h3>Huvudmiddagen</h3>
          <p>14:00</p>
          <p>Description of event 3.</p>
        </div>
        <div className="timeline-image">
          <img src={Food} alt="Event 3" />
        </div>
      </div>

      {/* Event 4 */}
      <div className="timeline-item">
        <div className="timeline-circle"></div>
        <div className="timeline-image">
          <img src={Dessert} alt="Event 4" />
        </div>
        <div className="timeline-content">
          <h3>Efterrätt och Drinkar</h3>
          <p>17:00</p>
          <p>Description of event 4.</p>
        </div>
      </div>

      {/* Event 5 */}
      <div className="timeline-item">
        <div className="timeline-circle"></div>
        <div className="timeline-content">
          <h3>Fest & Dans</h3>
          <p>20:00</p>
          <p>Description of event 5.</p>
        </div>
        <div className="timeline-image">
          <img src={Dance} alt="Event 5" />
        </div>
      </div>
    </section>
  );
}

export default Schedule;
