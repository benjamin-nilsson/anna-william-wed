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
    { title: "Ceremoni", time: "13:00", desc: "Vigsel tar plats på Erska kyrka", img: Church },
    { title: "Mingel Timme", time: "14:30", desc: "Medans vi inväntar brudparet så bjuds det på meze", img: Mingle },
    { title: "Huvudmiddag", time: "16:00", desc: "Det kommer bjudas på mat för allas smak", img: Food },
    { title: "Desser", time: "18:00", desc: "Senare mot kvällen så kommer det serveras tårta, drinkar och allt möjligt festligt", img: Dessert },
    { title: "Fest & Dans", time: "20:00", desc: "På kvällen hoopas vi ni kan bjuda på er själva med lite dans och stämning för brudparet", img: Dance },
  ];

  return (
    <section className="schedule">
      <h1>Schema</h1>
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
