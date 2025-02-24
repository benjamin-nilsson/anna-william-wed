import { useState } from "react";
import { Link } from "react-router-dom";
import React from "react";

function Wishlist() {
    const [gifts, setGifts] = useState([
      { id: 1, name: "Toaster", img: "/toaster.jpg", link: "#", taken: false },
      { id: 2, name: "Dinner Set", img: "/dinner-set.jpg", link: "#", taken: false },
      { id: 3, name: "Coffee Machine", img: "/coffee-machine.jpg", link: "#", taken: false }
    ]);
  
    const markAsTaken = (id) => {
      setGifts(gifts.map(gift => gift.id === id ? { ...gift, taken: !gift.taken } : gift));
    };
  
    return (
      <div className="p-10 text-center">
        <h2 className="text-3xl font-semibold">Gift List</h2>
        <ul className="mt-6 space-y-4">
          {gifts.map(gift => (
            <li key={gift.id} className="flex items-center gap-4 bg-gray-100 p-4 rounded-lg">
              <img src={gift.img} className="w-20 h-20 rounded" />
              <div className="flex-1">
                <p className="text-lg">{gift.name}</p>
                <a href={gift.link} className="text-blue-600 underline">View Item</a>
              </div>
              <button onClick={() => markAsTaken(gift.id)}
                className={`px-4 py-2 rounded ${gift.taken ? "bg-gray-500" : "bg-green-500"}`}>
                {gift.taken ? "Taken" : "Reserve"}
              </button>
            </li>
          ))}
        </ul>
        <Link to="/" className="block mt-6 text-blue-600 underline">Back to Invite</Link>
      </div>
    );
  }

export default Wishlist;