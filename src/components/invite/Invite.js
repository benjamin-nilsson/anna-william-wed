import InviteImage from "../../images/InviteImage.jpg";
import { Link } from "react-router-dom";
import Rsvp from "../rsvp/Rsvp";
import DressCode from "../dress_code/DressCode"
import Schedule from "../schedule/Schedule";
import Menu from "../food_drink/Menu";

function Invite() {
  return (
    <div>
    <div className="invite-section" style={{ backgroundImage: `url(${InviteImage})` }}>
    <div className="invite-overlay">
      <h1 className="invite-title">William & Anastasia Bröllop</h1>
      <p className="invite-text">Welcome to our special day!</p>
      <button
        className="invite-button"
        onClick={() => document.getElementById("rsvp").scrollIntoView({ behavior: 'smooth' })}
      >
        RSVP Now
      </button>
    </div>
  </div>
  {/* Second Section: Dress Code */}
<div className="w-full min-h-screen bg-white">
<DressCode />
</div>

{/* Third Section: Schedule */}
<div className="w-full min-h-screen bg-gray-100">
<Schedule />
</div>

{/* Fourth Section: Menu */}
<div className="w-full min-h-screen bg-white">
<Menu />
</div>

{/* Fifth Section: RSVP */}
<div id="rsvp" className="w-full min-h-screen bg-gray-100">
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

