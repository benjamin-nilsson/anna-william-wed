import React, { useState, useEffect } from "react";
import "./Schedule.css";
import Food from "../../images/food.png";
import Church from "../../images/Church.png";
import Mingle from "../../images/Mingle.png";
import Dessert from "../../images/Dessert.png";
import Dance from "../../images/Dance.png";

function Schedule() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const events = [
    { title: "Ceremoni", time: "11:00", desc: "Vigsel.", img: Church },
    { title: "Mingel Timme", time: "13:00", desc: "Description of event 2.", img: Mingle },
    { title: "Huvudmiddagen", time: "14:00", desc: "Description of event 3.", img: Food },
    { title: "Efterrätt och Drinkar", time: "17:00", desc: "Description of event 4.", img: Dessert },
    { title: "Fest & Dans", time: "20:00", desc: "Description of event 5.", img: Dance },
  ];

  return (
    <section className="schedule">
      <h1>Schedule</h1>
      <div className="timeline"></div>

      {events.map((event, index) => (
        <div className="timeline-item" key={index}>
          <div className="timeline-circle"></div>

          {isMobile ? (
            <>
              {/* Mobile: Text First, Image Second */}
              <div className="timeline-content">
                <h3>{event.title}</h3>
                <p>{event.time}</p>
                <p>{event.desc}</p>
              </div>
              <div className="timeline-image">
                <img src={event.img} alt={event.title} />
              </div>
            </>
          ) : (
            <>
              {/* Desktop: Keep Alternating Layout */}
              {index % 2 === 0 ? (
                <>
                  <div className="timeline-content">
                    <h3>{event.title}</h3>
                    <p>{event.time}</p>
                    <p>{event.desc}</p>
                  </div>
                  <div className="timeline-image">
                    <img src={event.img} alt={event.title} />
                  </div>
                </>
              ) : (
                <>
                  <div className="timeline-image">
                    <img src={event.img} alt={event.title} />
                  </div>
                  <div className="timeline-content">
                    <h3>{event.title}</h3>
                    <p>{event.time}</p>
                    <p>{event.desc}</p>
                  </div>
                </>
              )}
            </>
          )}
        </div>
      ))}
    </section>
  );
}

export default Schedule;
