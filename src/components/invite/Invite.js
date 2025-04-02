import DressCode from "../dress_code/DressCode";
import Schedule from "../schedule/Schedule";
import Menu from "../food_drink/Menu";
import Location from "../location/Location";
import Rsvp from "../rsvp/Rsvp";
import Wishlist from "../wishlist/Wishlist";
import InviteImage from "../../images/Home.png";

function Invite() {
  return (
    <div>
      {/* Hero Section */}
      <div className="invite-section" style={{ backgroundImage: `url(${InviteImage})` }}>
        <div className="invite-overlay">
          <h2 className="invite-intro">Välkommen till</h2>
          <h1 className="invite-title">William & Anastasias Bröllop</h1>
          <p className="invite-text">28 juni 2025 | Erska Kyrka, Gräfsnäs</p>
          <button className="invite-button" onClick={() => document.getElementById("rsvp").scrollIntoView({ behavior: 'smooth' })}>
            Anmäl här
          </button>
        </div>
      </div>

      {/* Dress Code Section */}
      <div id="dresscode" className="section bg-white">
        <DressCode />
      </div>

      {/* Schedule Section */}
      <div id="schedule" className="section bg-gray">
        <Schedule />
      </div>

      {/* Menu Section */}
      <div id="menu" className="section bg-white">
        <Menu />
      </div>

      {/* RSVP Section */}
      <div id="location" className="section bg-gray">
        <Location />
      </div>

      {/* RSVP Section */}
      <div id="rsvp" className="section bg-white">
        <Rsvp />
      </div>

      {/* Gift List Link */}
      <div id="wishlist" className="section bg-gray">
        <Wishlist />
      </div>
    </div>
  );
}

export default Invite;
