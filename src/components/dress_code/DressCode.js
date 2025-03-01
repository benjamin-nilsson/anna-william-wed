import "./DressCode.css";  // Import the DressCode.css file
import InviteImage from "../../images/InviteImage.jpg";
import SexyDress from "../../images/SexyDress.png";
import GreenBowTie from "../../images/GreenBowTie.png";
import GreenSuite from "../../images/GreenSuite.png";
import SummerCouple from "../../images/SummerCouple.png";
import SummerDress from "../../images/SummerDress.png";

function DressCode() {
  return (
<section className="full-screen p-10 text-center">
  <h2 className="text-3xl font-semibold">Dress Code</h2>
  <p className="description">Your perfect outfit awaits!</p>

  {/* White & Green Circles */}
  <div className="circles-container">
    <div className="circle bg-white"></div>
    <div className="circle bg-green-500"></div>
  </div>

  {/* Dress Code Examples Grid */}
  <div className="mt-6 grid grid-cols-3 md:grid-cols-3 gap-4 grid-layout">
    <img src={SummerCouple} className="image-1" alt="Dress example 1" />
    <img src={SexyDress} className="image-2" alt="Dress example 2" />
    <img src={GreenBowTie} className="image-3" alt="Dress example 3" />
    <img src={GreenSuite} className="image-4" alt="Dress example 4" />
    <img src={InviteImage} className="image-5" alt="Dress example 5" />
    <img src={SummerDress} className="image-6" alt="Dress example 6" />
  </div>
</section>
  
  );
}

export default DressCode;
