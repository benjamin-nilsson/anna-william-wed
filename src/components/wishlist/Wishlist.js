import React, { useState, useEffect } from "react";
import { db, storage } from "../../database/firebase";
import { collection, addDoc, getDocs, updateDoc, doc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import "./Wishlist.css";

const Wishlist = () => {
  const [items, setItems] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [newItem, setNewItem] = useState({ title: "", url: "", image: null });

  useEffect(() => {
    const fetchItems = async () => {
      const querySnapshot = await getDocs(collection(db, "wishlist"));
      const wishlistItems = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setItems(wishlistItems);
    };
    fetchItems();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewItem((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setNewItem((prev) => ({ ...prev, image: e.target.files[0] }));
    }
  };

  const handleAddItem = async (e) => {
    e.preventDefault();

    if (!newItem.title || !newItem.url || !newItem.image) {
      alert("Please fill all fields and select an image.");
      return;
    }

    try {
      const imageRef = ref(storage, `wishlist/${newItem.image.name}`);
      await uploadBytes(imageRef, newItem.image);
      const imageUrl = await getDownloadURL(imageRef);

      const docRef = await addDoc(collection(db, "wishlist"), {
        title: newItem.title,
        url: newItem.url,
        image: imageUrl,
        taken: false,
      });

      setItems([
        ...items,
        { id: docRef.id, title: newItem.title, url: newItem.url, image: imageUrl, taken: false },
      ]);
      setNewItem({ title: "", url: "", image: null });
      setShowForm(false);
    } catch (error) {
      console.error("Error adding item: ", error);
    }
  };

  const handleMarkAsTaken = async (id, taken) => {
    const confirmAction = window.confirm(
      taken ? "Do you want to unselect this item?" : "Do you want to select this item?"
    );
    if (!confirmAction) return;

    try {
      const itemRef = doc(db, "wishlist", id);
      await updateDoc(itemRef, { taken: !taken });

      setItems((prevItems) =>
        prevItems.map((item) =>
          item.id === id ? { ...item, taken: !taken } : item
        )
      );
    } catch (error) {
      console.error("Error updating item status: ", error);
    }
  };

  return (
    <section className="wishlist-section">
      <h2 className="wishlist-header">Önskelista</h2>

      <button className="add-item-btn" onClick={() => setShowForm(!showForm)}>
        {showForm ? "Close" : "Add Item"}
      </button>

      {showForm && (
        <form className="wishlist-form" onSubmit={handleAddItem}>
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={newItem.title}
            onChange={handleChange}
            required
          />
          <input
            type="url"
            name="url"
            placeholder="URL"
            value={newItem.url}
            onChange={handleChange}
            required
          />
          <input type="file" accept="image/*" onChange={handleImageChange} required />
          <button type="submit">Add</button>
        </form>
      )}

      <div className="wishlist-container">
        {items.map((item) => (
          <div key={item.id} className={`wishlist-item ${item.taken ? "taken" : ""}`}>
            <div className="image-container">
              <img src={item.image} alt={item.title} className="wishlist-image" />
            </div>
            <div className="wishlist-details">
              <h3 className="wishlist-title">{item.title}</h3>
              <button onClick={() => window.open(item.url, "_blank")}>Gå till sidan</button>
              <div className="button-container">
                <button
                  className={`status-btn ${item.taken ? "untake-btn" : "mark-taken-btn"}`}
                  onClick={() => handleMarkAsTaken(item.id, item.taken)}
                >
                  {item.taken ? "Unselect item" : "Select item as taken"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Wishlist;
