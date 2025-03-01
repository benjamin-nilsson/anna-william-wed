import { Link } from "react-router-dom";
import DressCode from "../dress_code/DressCode";
import Schedule from "../schedule/Schedule";
import Menu from "../food_drink/Menu";
import Rsvp from "../rsvp/Rsvp";
import InviteImage from "../../images/InviteImage.jpg";

function Invite() {
  return (
    <div>
      {/* Hero Section */}
      <div className="invite-section" style={{ backgroundImage: `url(${InviteImage})` }}>
        <div className="invite-overlay">
          <h1 className="invite-title">William & Anastasia Bröllop</h1>
          <p className="invite-text">Welcome to our special day!</p>
          <button className="invite-button" onClick={() => document.getElementById("rsvp").scrollIntoView({ behavior: 'smooth' })}>
            RSVP Now
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
      <div id="rsvp" className="section bg-gray">
        <Rsvp />
      </div>

      {/* Gift List Link */}
      <div className="text-center mt-10">
        <Link to="/gifts" className="text-blue-600 text-xl underline">View Gift List</Link>
      </div>
    </div>
  );
}

export default Invite;
