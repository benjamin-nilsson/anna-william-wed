function Rsvp() {
  return (
    <section id="rsvp" className="rsvp-section">
      <h2 className="rsvp-title">RSVP</h2>
      <form className="rsvp-form">
        <div className="rsvp-columns">
          {/* Första stegen */}
          <div className="rsvp-column">
            <div className="rsvp-item item-1">
              <input type="text" placeholder="Namn" required />
            </div>
            <div className="rsvp-item item-2">
              <label>Kommer du?</label>
              <select>
                <option>Kommer</option>
                <option>Kommer inte</option>
              </select>
            </div>
          </div>

          {/* Andra stegen */}
          <div className="rsvp-column">
            <div className="rsvp-item item-4">
              <input type="text" placeholder="Mat allergier" />
            </div>
            <div className="rsvp-item item-3">
              <label>Boendesituation</label>
              <select>
                <option>Har fixat boende</option>
                <option>Behöver boende</option>
                <option>Åker hem samma kväll</option>
                <option>Kommer inte</option>
              </select>
            </div>
          </div>
        </div>

        {/* Skicka-knapp under båda stegarna */}
        <div className="rsvp-item item-5 checkbox-container">
              <input type="checkbox" id="spex" />
              <label htmlFor="spex">Jag vill hålla spex eller tal</label>
            </div>
        <div className="rsvp-item item-6">
              <label>Frågor?</label>
              <textarea placeholder="Skriv dina frågor här..."></textarea>
            </div>
        <div className="rsvp-item item-7">
          <button type="submit">Skicka</button>
        </div>
      </form>
    </section>
  );
}

export default Rsvp;
