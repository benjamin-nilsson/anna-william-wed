import React from "react";
import "./Schedule.css";  // Import the CSS file
import Food from "../../images/food.png";

function Schedule() {
  return (
    <section className="schedule">
      <h1>Schedule</h1>
      <div className="timeline">
        {/* Touchpoint 1 */}
        <div className="timeline-item">
          <div className="timeline-circle"></div>
          <div className="timeline-content left">
            <h3>Event 1</h3>
            <p>Description of event 1.</p>
          </div>
          <div className="timeline-image">
            <img src="Food" alt="Event 1" />
          </div>
        </div>

        {/* Touchpoint 2 */}
        <div className="timeline-item">
          <div className="timeline-circle"></div>
          <div className="timeline-content right">
            <h3>Event 2</h3>
            <p>Description of event 2.</p>
          </div>
          <div className="timeline-image">
            <img src="path_to_image_2.jpg" alt="Event 2" />
          </div>
        </div>

        {/* Touchpoint 3 */}
        <div className="timeline-item">
          <div className="timeline-circle"></div>
          <div className="timeline-content left">
            <h3>Event 3</h3>
            <p>Description of event 3.</p>
          </div>
          <div className="timeline-image">
            <img src="path_to_image_3.jpg" alt="Event 3" />
          </div>
        </div>

        {/* Touchpoint 4 */}
        <div className="timeline-item">
          <div className="timeline-circle"></div>
          <div className="timeline-content right">
            <h3>Event 4</h3>
            <p>Description of event 4.</p>
          </div>
          <div className="timeline-image">
            <img src="path_to_image_4.jpg" alt="Event 4" />
          </div>
        </div>

        {/* Touchpoint 5 */}
        <div className="timeline-item">
          <div className="timeline-circle"></div>
          <div className="timeline-content left">
            <h3>Event 5</h3>
            <p>Description of event 5.</p>
          </div>
          <div className="timeline-image">
            <img src="path_to_image_5.jpg" alt="Event 5" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Schedule;
