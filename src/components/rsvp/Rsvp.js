import { useState } from "react";
import { db } from "../../database/firebase";
import { collection, addDoc } from "firebase/firestore";

function Rsvp() {
  const [formData, setFormData] = useState({
    name: "",
    attending: "Kommer",
    allergies: "",
    tal: false,
    spex: false,
    description: "",
    questions: "",
    song: "",
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
  
    // Check if 'name' and 'attending' are filled
    if (!formData.name.trim()) {
      alert("Vänligen fyll i ditt namn.");
      return;
    }

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
        spex: false,
        tal: false,
        questions: "",
        description: "",
        song: "",
      });
    } catch (error) {
      console.error("Error submitting RSVP:", error);
    }
  };

  return (
    <section id="rsvp" className="rsvp-section">
      <h2 className="rsvp-title">OSA</h2>
      <div className="rsvp-container">
        <form className="rsvp-form" onSubmit={handleSubmit}>
          <div className="rsvp-item">
            <input
              type="text"
              placeholder="Namn"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="rsvp-item">
            <select name="attending" value={formData.attending} onChange={handleChange} required>
              <option>Kommer</option>
              <option>Kommer inte</option>
            </select>
          </div>
          <div className="rsvp-item">
            <input
              type="text"
              placeholder="Mat allergier"
              name="allergies"
              value={formData.allergies}
              onChange={handleChange}
            />
          </div>
          <div className="rsvp-item checkbox-container">
            <input
              type="checkbox"
              id="spex"
              name="spex"
              checked={formData.spex}
              onChange={handleChange}
            />
            <label htmlFor="spex">Jag vill hålla spex</label>
          </div>
          <div className="rsvp-item checkbox-container">
            <input
              type="checkbox"
              id="tal"
              name="tal"
              checked={formData.tal}
              onChange={handleChange}
            />
            <label htmlFor="tal">Jag vill hålla tal</label>
          </div>
          <div className="rsvp-item">
          <label>Låt som du delar med eller får dig tänka på brudparet (endast vid tal/spex) <p style={{color:"red", display: "inline-block"}}>* </p> </label>
            <input
              type="text"
              placeholder="Låt och artist"
              name="song"
              value={formData.song}
              onChange={handleChange}
            />
          </div>
          <div className="rsvp-item">
            <label>Beskriv ditt spex om du har ett hum om vad</label>
            <textarea
              placeholder="Spex idé..."
              name="description"
              value={formData.description}
              onChange={handleChange} 
            ></textarea>
          <div className="obs">OBS: Vänligen kontakta <b>Mimmi94m@gmail.com</b> om ditt spex eller tal! <p style={{color:"red", display: "inline-block"}}>* </p> </div>
          </div>
          <div className="rsvp-item">
            <label>Frågor?</label>
            <textarea
              placeholder="Skriv dina frågor här..."
              name="questions"
              value={formData.questions}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="obs">OBS: SVARA SENAST 30/4 <p style={{color:"red", display: "inline-block"}}>* </p> </div>
          <div className="rsvp-item">
            <button type="submit">Skicka</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Rsvp;
