import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./categories.css";

export const categories = [
  {
    name: "Hotels",
    path: "/Websites/Hotels",
    images: [
      "/images/hotels1.png",
      "/images/hotels2.png",
      "/images/hotels3.png",
      "/images/hotels4.png",
      "/images/hotels5.png",
    ],
  },
//   {
//     name: "Libraries",
//     path: "/category/libraries",
//     images: [
//       "/images/libraries1.jpg",
//       "/images/libraries2.jpg",
//       "/images/libraries3.jpg",
//     ],
//   },
//   {
//     name: "Restaurants",
//     path: "/category/restaurants",
//     images: [
//       "/images/restaurants1.jpg",
//       "/images/restaurants2.jpg",
//       "/images/restaurants3.jpg",
//     ],
//   },
//   {
//     name: "Beaches",
//     path: "/category/beaches",
//     images: [
//       "/images/beaches1.jpg",
//       "/images/beaches2.jpg",
//       "/images/beaches3.jpg",
//     ],
//   },
//   {
//     name: "Parks",
//     path: "/category/parks",
//     images: [
//       "/images/parks1.jpg",
//       "/images/parks2.jpg",
//       "/images/parks3.jpg",
//     ],
//   },
//   {
//     name: "Museums",
//     path: "/category/museums",
//     images: [
//       "/images/museums1.jpg",
//       "/images/museums2.jpg",
//       "/images/museums3.jpg",
//     ],
//   },
//   {
//     name: "Gyms",
//     path: "/category/gyms",
//     images: [
//       "/images/gyms1.jpg",
//       "/images/gyms2.jpg",
//       "/images/gyms3.jpg",
//     ],
//   },
//   {
//     name: "Schools",
//     path: "/category/schools",
//     images: [
//       "/images/schools1.jpg",
//       "/images/schools2.jpg",
//       "/images/schools3.jpg",
//     ],
//   },
//   {
//     name: "Cafes",
//     path: "/category/cafes",
//     images: [
//       "/images/cafes1.jpg",
//       "/images/cafes2.jpg",
//       "/images/cafes3.jpg",
//     ],
//   },
//   {
//     name: "Shops",
//     path: "/category/shops",
//     images: [
//       "/images/shops1.jpg",
//       "/images/shops2.jpg",
//       "/images/shops3.jpg",
//     ],
//   },
];

export default function Categories() {
  const [indexes, setIndexes] = useState(categories.map(() => 0));
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setIndexes((prev) =>
        prev.map((val, i) => (val + 1) % categories[i].images.length)
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <div className="Titler">
        <h1>Website Categories</h1>
    <p>There are different categories of Websites. Below are the Categories. New website will be uploaded every week. </p>
        <p><mark>Enjoy</mark></p>
        </div>
    
    <div className="categories-container">
        
      {categories.map((cat, i) => (
        <div
          key={i}
          className="category-card fade"
          style={{
            backgroundImage: `url(${cat.images[indexes[i]]})`,
          }}
          onClick={() => navigate(cat.path)} // ✅ clean routing
        >
          <div className="overlay glass">
            <h2>{cat.name}</h2>
            <div className="pulse-icon">👉 Press Me</div>
          </div>
        </div>
      ))}
    </div>
    </>
  );
}