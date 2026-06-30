import React from "react";
import ImageCard from "./ImageCard";

function Gallery() {


  const all = [
    {
      id: 1,
      url: "./assets/images/alb1.jpg",
      title: "Mountain",
      description: "A beautiful mountain landscape.",
    },
    {
      id: 2,
      url: "./assets/images/alb2.jpg",
      title: "Herbert Lake",
      description: "Mountain range reflected in water",
    },
    {
      id: 3,
      url: "./assets/images/alb3.jpg",
      title: "Cute Dog",
      description: "A happy dog enjoying nature.",
    },
    {
      id: 4,
      url: "./assets/images/alb4.jpg",
      title: "River",
      description: "A peaceful river surrounded by trees.",
    },
    {
      id: 5,
      url: "./assets/images/alb5.jpg",
      title: "Beach",
      description: "A relaxing beach during sunset.",
    },
    {
      id: 6,
      url: "./assets/images/alb6.jpg",
      title: "Tiger",
      description: "Tigers are the world's largest living cats.",
    },
    {
      id: 7,
      url: "./assets/images/alb7.jpg",
      title: "Lion",
      description: "A peaceful trail through the forest.",
    },
    {
      id: 8,
      url: "./assets/images/alb8.jpg",
      title: "peacock",
      description: "(peafowl) are iconic pheasants.",
    },
    {
      id: 9,
      url: "./assets/images/alb9.jpg",
      title: "Forest",
      description: "A peaceful trail through the forest.",
    },
    {
      id: 10,
      url: "./assets/images/alb10.jpg",
      title: "Delhi",
      description: "View of chicago city lights.",
    },
  ];
  const favorites = [
    {
      id: 1,
      url: "./assets/images/alb3.jpg",
      title: "Dog",
      description: "Fluffy dog with brown and black fur",
    },
    {
      id: 2,
      url: "./assets/images/fa1.jpg",
      title: "Cat",
      description: "Pure white cat",
    },
    {
      id: 3,
      url: "./assets/images/fa2.jpg",
      title: "City Nights",
      description: "Nighttime view of a city",
    },
    {
      id: 4,
      url: "./assets/images/fa3.jpg",
      title: "America",
      description: "Bustling street with tram and crowd",
    },
    {
      id: 5,
      url: "./assets/images/fa4.jpg",
      title: "Germany",
      description: "The great street of Germany",
    },
    {
      id: 6,
      url: "./assets/images/fa5.jpg",
      title: "photography",
      description: "The art and process of capturing light  ",
    },
    {
      id: 7,
      url: "./assets/images/fa6.jpg",
      title: "china",
      description: "China, officially the People's Republic of China.",
    },
    {
      id: 8,
      url: "./assets/images/fa7.jpg",
      title: "Hong kong",
      description: "Hong Kong is a special administrative region of China",
    },
    {
      id: 9,
      url: "./assets/images/fa8.jpg",
      title: "Jungle",
      description: "A jungle is a land area densely covered with tropical forest",
    },
    {
      id: 10,
      url: "./assets/images/fa9.jpg",
      title: "Beach",
      description: "A beach is a dynamic landform running",
    },
  ];
  const albums = [
    {
      
     id: 1,
      url: "./assets/images/alb1.jpg",
      title: "Mountain",
      description: "A beautiful mountain landscape.",
    },
    {
      id: 2,
      url: "/assets/images/alb2.jpg",
      title: "Dark",
    },
    {
      id: 3,
      url: "/assets/images/alb3.jpg",
      title: "City",
    },
    {
      id: 4,
      url: "/assets/images/alb4.jpg",
      title: "Beach",
    },
    {
      id: 5,
      url: "/assets/images/alb5.jpg",
      title: "Flower",
    },
  ];
  return (
    <>
      <section id="All" className="image-section">
        <h1>All</h1>
        <div className="image-cards">
          {all.map(function (item) {
            return <ImageCard key={item.id} imagecard={item} />;
          })}
        </div>
      </section>
      <section id="Favorites" className="image-section">
        <h1>Favorites</h1>
        <div className="image-cards">
          {favorites.map(function (item) {
            return <ImageCard key={item.id} imagecard={item} />;
          })}
        </div>
      </section>
      <section id="Albums" className="image-section">
        <h1>Albums</h1>
        <div className="image-cards">
          {albums.map(function (item) {
            return <ImageCard key={item.id} imagecard={item} />;
          })}
        </div>
      </section>
    </>
  );
}

export default Gallery;