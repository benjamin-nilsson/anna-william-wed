import { useState } from "react";
import { db } from "../../database/firebase"; // Import Firebase setup
import { collection, addDoc } from "firebase/firestore";

function Rsvp() {
  const [formData, setFormData] = useState({
    name: "",
    attending: "Kommer",
    allergies: "",
    accommodation: "Har fixat boende",
    spex: false,
    questions: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "responses"), {
        ...formData,
        timestamp: new Date(),
      });
      alert("Tack! Din RSVP är inskickad.");
      setFormData({
        name: "",
        attending: "Kommer",
        allergies: "",
        accommodation: "Har fixat boende",
        spex: false,
        questions: "",
      });
    } catch (error) {
      console.error("Error submitting RSVP:", error);
    }
  };

  return (
    <section id="rsvp" className="rsvp-section">
      <h2 className="rsvp-title">RSVP</h2>
      <form className="rsvp-form" onSubmit={handleSubmit}>
        <div className="rsvp-columns">
          {/* Första stegen */}
          <div className="rsvp-column">
            <div className="rsvp-item item-1">
              <input
                type="text"
                placeholder="Namn"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="rsvp-item item-2">
              <label>Kommer du?</label>
              <select name="attending" value={formData.attending} onChange={handleChange}>
                <option>Kommer</option>
                <option>Kommer inte</option>
              </select>
            </div>
          </div>

          {/* Andra stegen */}
          <div className="rsvp-column">
            <div className="rsvp-item item-4">
              <input
                type="text"
                placeholder="Mat allergier"
                name="allergies"
                value={formData.allergies}
                onChange={handleChange}
              />
            </div>
            <div className="rsvp-item item-3">
              <label>Boende rekommendationer</label>
            </div>
          </div>
        </div>

        {/* Skicka-knapp under båda stegarna */}
        <div className="rsvp-item item-5 checkbox-container">
          <input
            type="checkbox"
            id="spex"
            name="spex"
            checked={formData.spex}
            onChange={handleChange}
          />
          <label htmlFor="spex">Jag vill hålla spex (burdparet uppmanar till mycket spex)</label>
          <div className="rsvp-item item-6">
          <label>Beskriva gärna ditt spex om du har ett hum om den?</label>
          <textarea
            placeholder="Skriv dina frågor här..."
            name="questions"
            value={formData.questions}
            onChange={handleChange}
          ></textarea>
        </div>
        </div>
        <div className="rsvp-item item-5 checkbox-container">
          <input
            type="checkbox"
            id="spex"
            name="spex"
            checked={formData.spex}
            onChange={handleChange}
          />
          <label htmlFor="spex">Jag vill hålla tal (håll gärna ert tall under 5 minuter)</label>
        </div>
        <p>Kontaka gärna mail om du har frågor kring tal och spex</p>
        <div className="rsvp-item item-6">
          <label>Frågor?</label>
          <textarea
            placeholder="Skriv dina frågor här..."
            name="questions"
            value={formData.questions}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="rsvp-item item-7">
          <button type="submit">Skicka</button>
        </div>
      </form>
    </section>
  );
}

export default Rsvp;
