import "./DressCode.css";  // Import the DressCode.css file
import BeigeSuit from "../../images/BeigeSuit.png";
import BeigeCopper from "../../images/BeigeCopper.png";
import Copper from "../../images/Copper.png";
import Pink from "../../images/Pink.png";
import RedBeige from "../../images/Red&Beige.png";
import bluepink from "../../images/bluepink.png";

function DressCode() {
  return (
<section className="full-screen p-10 text-center">
  <h2>Klädkod</h2>
  <p className="description">Dessa färger kommer vara bröllopets tema, och nedan ser du exempel om du vill matcha temat, men man får självklart komma hur man vill <br></br><br></br>OBS: Vid fint väder kommer mycket av festen hållas utomhus, så ha det i åtanke när du väljer din outfit</p> 

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
    <img src={RedBeige} className="image-1" alt="Dress example 1" />
    <img src={BeigeCopper} className="image-2" alt="Dress example 2" />
    <img src={Copper} className="image-3" alt="Dress example 3" />
    <img src={Pink} className="image-4" alt="Dress example 4" />
    <img src={bluepink} className="image-5" alt="Dress example 5" />
    <img src={BeigeSuit} className="image-6" alt="Dress example 6" />
  </div>
</section>
  
  );
}

export default DressCode;
