import React, { useState, useEffect } from 'react';
import { db } from '../../database/firebase'; // Assuming firebase.js is already set up
import { collection, updateDoc, doc, getDocs } from 'firebase/firestore';

const Wishlist = () => {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [name, setName] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [isCanceling, setIsCanceling] = useState(false);

  // Fetch wishlist items from Firestore
  useEffect(() => {
    const fetchItems = async () => {
      const querySnapshot = await getDocs(collection(db, 'wishlist'));
      const wishlistItems = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setItems(wishlistItems);
    };
    fetchItems();
  }, []);

  // Mark an item as taken
  const markAsTaken = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  // Mark an item as not taken (cancel)
  const cancelItem = async (item) => {
    const itemRef = doc(db, 'wishlist', item.id);
    await updateDoc(itemRef, { taken: false, takenBy: '' });
    setItems((prevItems) => prevItems.map((i) => (i.id === item.id ? { ...i, taken: false, takenBy: '' } : i)));
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!name || !selectedItem) return;

    // Add user's name to the item and mark as taken
    const itemRef = doc(db, 'wishlist', selectedItem.id);
    await updateDoc(itemRef, { taken: true, takenBy: name });

    // Update state
    setItems((prevItems) => prevItems.map((item) =>
      item.id === selectedItem.id ? { ...item, taken: true, takenBy: name } : item
    ));

    setShowModal(false);
    setName('');
  };

  return (
    <div>
      <h2>Wishlist</h2>

      {/* Wishlist Items */}
      <div className="wishlist-items">
        {items.map((item) => (
          <div key={item.id} className="wishlist-item">
            <img src={item.image} alt={item.title} />
            <div className="item-details">
              <h3>{item.title}</h3>
              <a href={item.url} target="_blank" rel="noopener noreferrer">{item.url}</a>
              <div className="actions">
                {!item.taken ? (
                  <button onClick={() => markAsTaken(item)}>Mark as Taken</button>
                ) : (
                  <div>
                    <span>Taken by {item.takenBy}</span>
                    <button onClick={() => cancelItem(item)}>Cancel</button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for Marking Item as Taken */}
      {showModal && !isCanceling && (
        <div className="modal">
          <div className="modal-content">
            <h3>Mark {selectedItem.title} as Taken</h3>
            <form onSubmit={handleSubmit}>
              <label>Your Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <div className="modal-actions">
                <button type="submit">Send</button>
                <button type="button" onClick={() => setShowModal(false)}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal for Canceling the Item */}
      {isCanceling && (
        <div className="modal">
          <div className="modal-content">
            <h3>Cancel {selectedItem.title}?</h3>
            <p>This will deselect the item and remove it from the database.</p>
            <div className="modal-actions">
              <button onClick={() => cancelItem(selectedItem)}>Yes, Cancel</button>
              <button onClick={() => setIsCanceling(false)}>No, Keep</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Wishlist;
