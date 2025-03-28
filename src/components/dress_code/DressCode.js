import "./DressCode.css";  // Import the DressCode.css file
import BeigeSuit from "../../images/BeigeSuit.png";
import SexyDress from "../../images/SexyDress.png";
import GreenBowTie from "../../images/GreenBowTie.png";
import BeigeDress from "../../images/BeigeDress.png";
import SummerCouple from "../../images/SummerCouple.png";
import SummerDress from "../../images/SummerDress.png";

function DressCode() {
  return (
<section className="full-screen p-10 text-center">
  <h2 className="text-3xl font-semibold">Kläd Kod</h2>
  <p className="description">Dessa färger kommer vara bröllopets tema, och nedan ser du exempel om du vill matcha temat, men man får självklart komma hur man vill</p>

  {/* White & Green Circles */}
  <div className="circles-container">
    <div className="circle bg-matcha"></div>
    <div className="circle bg-pistashe"></div>
    <div className="circle bg-carob"></div>
    <div className="circle bg-almond"></div>
    <div className="circle bg-chai"></div>
    <div className="circle bg-vanilla"></div>
  </div>

  {/* Dress Code Examples Grid */}
  <div className="mt-6 grid grid-cols-3 md:grid-cols-3 gap-4 grid-layout">
    <img src={SummerCouple} className="image-1" alt="Dress example 1" />
    <img src={SexyDress} className="image-2" alt="Dress example 2" />
    <img src={GreenBowTie} className="image-3" alt="Dress example 3" />
    <img src={BeigeDress} className="image-4" alt="Dress example 4" />
    <img src={BeigeSuit} className="image-5" alt="Dress example 5" />
    <img src={SummerDress} className="image-6" alt="Dress example 6" />
  </div>
</section>
  
  );
}

export default DressCode;
